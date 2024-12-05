import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const SERVICE_AREAS = [
  { value: 'local', label: 'Local Community' },
  { value: 'regional', label: 'Regional' },
  { value: 'national', label: 'National' },
  { value: 'international', label: 'International' },
  { value: 'online', label: 'Online/Virtual' },
];

export const ServiceAreasSelect = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="serviceAreas"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Service Areas</InputLabel>
          <Select
            {...field}
            isMulti
            options={SERVICE_AREAS}
            placeholder="Select service areas..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};