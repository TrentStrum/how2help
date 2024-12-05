import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { EventProfile } from './EventProfile';
import { useGetEventById } from '@api/entities/events';
import { useAuth } from '@app/features/Auth/hooks/useAuth';

// Mock the hooks
jest.mock('@api/entities/events');
jest.mock('@app/features/Auth/hooks/useAuth');

const mockEvent = {
  id: 1,
  name: 'Test Event',
  description: 'Test Description',
  avatarImageUrl: 'test.jpg',
  startDate: '2024-03-20',
  location: 'Test Location',
  reactions: [],
  comments: [],
  activities: [],
  attendees: [],
};

describe('EventProfile Component', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    (useGetEventById as jest.Mock).mockReturnValue({
      data: mockEvent,
      isPending: false,
      isError: false,
    });
    (useAuth as jest.Mock).mockReturnValue({
      currentUserId: '1',
    });
  });

  it('renders event details correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/event/1']}>
          <Routes>
            <Route path="/event/:eventId" element={<EventProfile />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('handles loading state', () => {
    (useGetEventById as jest.Mock).mockReturnValue({
      data: undefined,
      isPending: true,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/event/1']}>
          <Routes>
            <Route path="/event/:eventId" element={<EventProfile />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles error state', () => {
    (useGetEventById as jest.Mock).mockReturnValue({
      data: undefined,
      isPending: false,
      isError: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/event/1']}>
          <Routes>
            <Route path="/event/:eventId" element={<EventProfile />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Error...')).toBeInTheDocument();
  });

  it('toggles reaction when like button is clicked', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/event/1']}>
          <Routes>
            <Route path="/event/:eventId" element={<EventProfile />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    expect(likeButton).toHaveTextContent('Liked');
  });
}); 