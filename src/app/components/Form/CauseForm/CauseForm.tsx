import { Grid } from '@mui/material';
import { useZodForm } from '@app/hooks/form';
import { causeSchema, type CauseFormData } from '@app/schemas/forms';
import { FormWrapper, FormInput, FormSelect } from '@app/components/Form';
import { ObjectivesSection } from './ObjectivesSection';
import { BeneficiariesSection } from './BeneficiariesSection';
import { ImpactMetricsSection } from './ImpactMetricsSection';
import { MediaGallerySection } from './MediaGallerySection';
import { OrganizationsSelect } from './OrganizationsSelect';

interface CauseFormProps {
  initialData?: Partial<CauseFormData>;
  onSubmit: (data: CauseFormData) => void;
}

const CAUSE_CATEGORIES = [
  { value: 'environment', label: 'Environment' },
  { value: 'education', label: 'Education' },
  { value: 'health', label: 'Healthcare' },
  { value: 'social-justice', label: 'Social Justice' },
  { value: 'poverty', label: 'Poverty Alleviation' },
  { value: 'human-rights', label: 'Human Rights' },
  { value: 'animal-welfare', label: 'Animal Welfare' },
  { value: 'arts-culture', label: 'Arts & Culture' },
];

export const CauseForm = ({ initialData, onSubmit }: CauseFormProps) => {
  const methods = useZodForm({
    schema: causeSchema,
    defaultValues: {
      name: '',
      category: '',
      description: '',
      objectives: [],
      beneficiaries: [],
      impactMetrics: [],
      organizations: [],
      media: [],
      ...initialData,
    },
  });

  return (
    <FormWrapper methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {/* Basic Information */}
        <Grid item xs={12} md={6}>
          <FormInput name="name" label="Cause Name" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormSelect
            name="category"
            label="Category"
            options={CAUSE_CATEGORIES}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            name="description"
            label="Description"
            multiline
            rows={4}
            required
          />
        </Grid>

        {/* Objectives */}
        <Grid item xs={12}>
          <ObjectivesSection />
        </Grid>

        {/* Beneficiaries */}
        <Grid item xs={12}>
          <BeneficiariesSection />
        </Grid>

        {/* Impact Metrics */}
        <Grid item xs={12}>
          <ImpactMetricsSection />
        </Grid>

        {/* Organizations */}
        <Grid item xs={12}>
          <OrganizationsSelect />
        </Grid>

        {/* Media Gallery */}
        <Grid item xs={12}>
          <MediaGallerySection />
        </Grid>
      </Grid>
    </FormWrapper>
  );
};