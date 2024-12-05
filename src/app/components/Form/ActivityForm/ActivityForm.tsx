import { Grid } from '@mui/material';
import { useZodForm } from '@app/hooks/form';
import { activitySchema, type ActivityFormData } from '@app/schemas/forms';
import { FormWrapper, FormInput, FormSelect } from '@app/components/Form';
import { CommitmentSection } from './CommitmentSection';
import { RequirementsSection } from './RequirementsSection';
import { HealthSection } from './HealthSection';
import { ReferencesSection } from './ReferencesSection';

interface ActivityFormProps {
  initialData?: Partial<ActivityFormData>;
  onSubmit: (data: ActivityFormData) => void;
}

const FREQUENCY_OPTIONS = [
  { value: 'one-time', label: 'One-time' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'flexible', label: 'Flexible' },
];

export const ActivityForm = ({ initialData, onSubmit }: ActivityFormProps) => {
  const methods = useZodForm({
    schema: activitySchema,
    defaultValues: {
      role: '',
      commitment: {
        hours: 1,
        frequency: 'one-time',
        duration: '',
      },
      requirements: {
        skills: [],
        experience: '',
        certifications: [],
        background_check: false,
      },
      health: {
        physical_demands: '',
        safety_equipment: [],
        vaccinations: [],
      },
      references: [],
      motivation: '',
      ...initialData,
    },
  });

  return (
    <FormWrapper methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {/* Basic Information */}
        <Grid item xs={12}>
          <FormInput
            name="role"
            label="Role Title"
            required
          />
        </Grid>

        {/* Commitment */}
        <Grid item xs={12}>
          <CommitmentSection />
        </Grid>

        {/* Requirements */}
        <Grid item xs={12}>
          <RequirementsSection />
        </Grid>

        {/* Health & Safety */}
        <Grid item xs={12}>
          <HealthSection />
        </Grid>

        {/* References */}
        <Grid item xs={12}>
          <ReferencesSection />
        </Grid>

        {/* Motivation */}
        <Grid item xs={12}>
          <FormInput
            name="motivation"
            label="Motivation Statement"
            multiline
            rows={4}
            required
            helperText="Please explain why you want to volunteer for this role"
          />
        </Grid>
      </Grid>
    </FormWrapper>
  );
};