import { Grid } from '@mui/material';
import { useZodForm } from '@app/hooks/form';
import { organizationSchema, type OrganizationFormData } from '@app/schemas/forms';
import { FormWrapper, FormInput, FormSelect } from '@app/components/Form';
import { SocialMediaSection } from './SocialMediaSection';
import { StaffSection } from './StaffSection';
import { ServiceAreasSelect } from './ServiceAreasSelect';

interface OrganizationFormProps {
  initialData?: Partial<OrganizationFormData>;
  onSubmit: (data: OrganizationFormData) => void;
}

const ORG_TYPES = [
  { value: 'nonprofit', label: 'Nonprofit Organization' },
  { value: 'charity', label: 'Charitable Organization' },
  { value: 'community', label: 'Community Group' },
  { value: 'other', label: 'Other' },
];

export const OrganizationForm = ({ initialData, onSubmit }: OrganizationFormProps) => {
  const methods = useZodForm({
    schema: organizationSchema,
    defaultValues: {
      name: '',
      type: 'nonprofit',
      mission: '',
      contact: {
        email: '',
        phone: '',
        website: '',
      },
      location: {
        address: '',
        city: '',
        state: '',
        country: '',
      },
      serviceAreas: [],
      socialMedia: {
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
      },
      staff: [],
      ...initialData,
    },
  });

  return (
    <FormWrapper methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {/* Basic Information */}
        <Grid item xs={12} md={6}>
          <FormInput name="name" label="Organization Name" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormSelect
            name="type"
            label="Organization Type"
            options={ORG_TYPES}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            name="mission"
            label="Mission Statement"
            multiline
            rows={4}
            required
          />
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <FormInput
            name="contact.email"
            label="Contact Email"
            type="email"
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="contact.phone"
            label="Contact Phone"
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="contact.website"
            label="Website URL"
            type="url"
          />
        </Grid>

        {/* Location */}
        <Grid item xs={12}>
          <FormInput
            name="location.address"
            label="Street Address"
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="location.city"
            label="City"
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="location.state"
            label="State"
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="location.country"
            label="Country"
            required
          />
        </Grid>

        {/* Service Areas */}
        <Grid item xs={12}>
          <ServiceAreasSelect />
        </Grid>

        {/* Social Media */}
        <Grid item xs={12}>
          <SocialMediaSection />
        </Grid>

        {/* Staff Members */}
        <Grid item xs={12}>
          <StaffSection />
        </Grid>
      </Grid>
    </FormWrapper>
  );
};