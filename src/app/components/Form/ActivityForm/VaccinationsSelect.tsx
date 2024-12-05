import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const VACCINATIONS = [
  { value: 'covid19', label: 'COVID-19' },
  { value: 'flu', label: 'Influenza' },
  { value: 'tetanus', label: 'Tetanus' },
  { value: 'hepatitis-b', label: 'Hepatitis B' },
  { value: 'mmr', label: 'MMR (Measles, Mumps, Rubella)' },
  { value: 'tb', label: 'Tuberculosis (TB) Test' },
];

export const VaccinationsSelect = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="health.vaccinations"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Required Vaccinations</InputLabel>
          <Select
            {...field}
            isMulti
            options={VACCINATIONS}
            placeholder="Select required vaccinations..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};