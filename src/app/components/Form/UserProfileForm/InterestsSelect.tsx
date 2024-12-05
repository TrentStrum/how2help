import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const INTERESTS = [
  { value: 'environment', label: 'Environment' },
  { value: 'education', label: 'Education' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'social-justice', label: 'Social Justice' },
  { value: 'animal-welfare', label: 'Animal Welfare' },
  { value: 'arts-culture', label: 'Arts & Culture' },
  { value: 'community', label: 'Community Development' },
  { value: 'youth', label: 'Youth Programs' },
  { value: 'elderly', label: 'Elderly Care' },
  { value: 'disaster-relief', label: 'Disaster Relief' },
];

export const InterestsSelect = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="interests"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Interests</InputLabel>
          <Select
            {...field}
            isMulti
            options={INTERESTS}
            placeholder="Select interests..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};