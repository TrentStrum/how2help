import { Grid } from '@mui/material';
import { useZodForm } from '@app/hooks/form';
import { userProfileSchema, type UserProfileFormData } from '@app/schemas/forms';
import { FormWrapper, FormInput, FormSelect, FormCheckbox } from '@app/components/Form';
import { LanguageSelect } from './LanguageSelect';
import { SkillsSelect } from './SkillsSelect';
import { InterestsSelect } from './InterestsSelect';
import { AvailabilitySection } from './AvailabilitySection';
import { EmergencyContactSection } from './EmergencyContactSection';
import { PrivacySection } from './PrivacySection';

interface UserProfileFormProps {
  initialData?: Partial<UserProfileFormData>;
  onSubmit: (data: UserProfileFormData) => void;
}

export const UserProfileForm = ({ initialData, onSubmit }: UserProfileFormProps) => {
  const methods = useZodForm({
    schema: userProfileSchema,
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: {
        street: '',
        city: '',
        state: '',
        country: '',
      },
      skills: [],
      interests: [],
      availability: {
        weekdays: false,
        weekends: false,
        mornings: false,
        afternoons: false,
        evenings: false,
      },
      languages: [],
      emergencyContact: {
        name: '',
        relationship: '',
        phone: '',
      },
      privacySettings: {
        profileVisibility: 'public',
        emailVisibility: false,
        phoneVisibility: false,
      },
      ...initialData,
    },
  });

  return (
    <FormWrapper methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <FormInput name="firstName" label="First Name" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput name="lastName" label="Last Name" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput name="email" label="Email" type="email" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput name="phone" label="Phone Number" />
        </Grid>

        {/* Location */}
        <Grid item xs={12}>
          <FormInput name="location.street" label="Street Address" required />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput name="location.city" label="City" required />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput name="location.state" label="State" required />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput name="location.country" label="Country" required />
        </Grid>

        {/* Skills and Interests */}
        <Grid item xs={12} md={6}>
          <SkillsSelect />
        </Grid>
        <Grid item xs={12} md={6}>
          <InterestsSelect />
        </Grid>

        {/* Languages */}
        <Grid item xs={12}>
          <LanguageSelect />
        </Grid>

        {/* Availability */}
        <Grid item xs={12}>
          <AvailabilitySection />
        </Grid>

        {/* Emergency Contact */}
        <Grid item xs={12}>
          <EmergencyContactSection />
        </Grid>

        {/* Privacy Settings */}
        <Grid item xs={12}>
          <PrivacySection />
        </Grid>
      </Grid>
    </FormWrapper>
  );
};