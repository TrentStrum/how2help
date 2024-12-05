import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const CERTIFICATIONS = [
  { value: 'first-aid', label: 'First Aid' },
  { value: 'cpr', label: 'CPR' },
  { value: 'food-safety', label: 'Food Safety' },
  { value: 'teaching', label: 'Teaching License' },
  { value: 'driving', label: 'Driver\'s License' },
  { value: 'childcare', label: 'Childcare Certification' },
  { value: 'counseling', label: 'Counseling Certification' },
  { value: 'medical', label: 'Medical License' },
  { value: 'security', label: 'Security Clearance' },
  { value: 'other', label: 'Other Professional Certification' },
];

export const CertificationsSelect = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="requirements.certifications"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Required Certifications</InputLabel>
          <Select
            {...field}
            isMulti
            options={CERTIFICATIONS}
            placeholder="Select required certifications..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};