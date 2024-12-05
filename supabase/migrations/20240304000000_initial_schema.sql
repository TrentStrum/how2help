-- Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "citext";

-- Create custom types
create type user_role as enum ('user', 'admin');
create type entity_status as enum ('active', 'inactive', 'closed');
create type entity_type as enum ('Organization', 'Cause', 'Event', 'Activity', 'User');

-- Create profiles table
create table public.profiles (
    id uuid references auth.users on delete cascade primary key,
    first_name text,
    last_name text,
    username citext unique,
    avatar_url text,
    email citext unique,
    phone text,
    street_address text,
    alt_address text,
    city text,
    state text,
    country text,
    role user_role default 'user',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Create causes table
create table public.causes (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    description text,
    long_description text,
    banner_image_url text,
    avatar_image_url text,
    mission text,
    organization_count int default 0,
    event_count int default 0,
    countries text[],
    growth_rate text,
    focus_areas text[],
    status entity_status default 'active',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Create organizations table
create table public.organizations (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    description text,
    long_description text,
    mission text,
    founded_year int,
    size text,
    email citext,
    phone text,
    address text,
    website text,
    banner_image_url text,
    avatar_image_url text,
    countries_serving text[],
    state_serving text,
    city_serving text,
    user_rating numeric(3,2),
    status entity_status default 'active',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Create events table
create table public.events (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    description text,
    event_date date not null,
    start_time time,
    location text,
    host_id uuid references organizations(id),
    avatar_image_url text,
    user_rating numeric(3,2),
    status entity_status default 'active',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Create activities table
create table public.activities (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    description text,
    location text,
    duration text,
    spots_available int,
    requirements text,
    posted_date timestamptz default now(),
    start_date timestamptz,
    end_date timestamptz,
    host_id uuid references organizations(id),
    host_type entity_type not null,
    avatar_image_url text,
    status entity_status default 'active',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Create junction tables
create table public.organization_causes (
    organization_id uuid references organizations(id) on delete cascade,
    cause_id uuid references causes(id) on delete cascade,
    primary key (organization_id, cause_id)
);

create table public.event_causes (
    event_id uuid references events(id) on delete cascade,
    cause_id uuid references causes(id) on delete cascade,
    primary key (event_id, cause_id)
);

create table public.event_organizations (
    event_id uuid references events(id) on delete cascade,
    organization_id uuid references organizations(id) on delete cascade,
    primary key (event_id, organization_id)
);

create table public.user_favorites (
    user_id uuid references profiles(id) on delete cascade,
    entity_id uuid not null,
    entity_type entity_type not null,
    created_at timestamptz default now(),
    primary key (user_id, entity_id, entity_type)
);

-- Create RLS policies
alter table public.profiles enable row level security;
alter table public.causes enable row level security;
alter table public.organizations enable row level security;
alter table public.events enable row level security;
alter table public.activities enable row level security;
alter table public.organization_causes enable row level security;
alter table public.event_causes enable row level security;
alter table public.event_organizations enable row level security;
alter table public.user_favorites enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
    on profiles for select
    using (true);

create policy "Users can update own profile"
    on profiles for update
    using (auth.uid() = id);

-- Organizations policies
create policy "Organizations are viewable by everyone"
    on organizations for select
    using (true);

create policy "Admins can insert organizations"
    on organizations for insert
    with check (exists (
        select 1 from profiles
        where id = auth.uid()
        and role = 'admin'
    ));

-- Events policies
create policy "Events are viewable by everyone"
    on events for select
    using (true);

create policy "Organization owners can create events"
    on events for insert
    with check (exists (
        select 1 from organizations
        where id = host_id
        and status = 'active'
    ));

-- Activities policies
create policy "Activities are viewable by everyone"
    on activities for select
    using (true);

-- Favorites policies
create policy "Users can view own favorites"
    on user_favorites for select
    using (auth.uid() = user_id);

create policy "Users can manage own favorites"
    on user_favorites for all
    using (auth.uid() = user_id);

-- Create functions
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
    insert into public.profiles (id, email, username)
    values (new.id, new.email, new.raw_user_meta_data->>'username');
    return new;
end;
$$;

-- Create triggers
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user();

-- Create indexes
create index profiles_username_idx on profiles using btree (username);
create index organizations_name_idx on organizations using btree (name);
create index events_date_idx on events using btree (event_date);
create index activities_start_date_idx on activities using btree (start_date);