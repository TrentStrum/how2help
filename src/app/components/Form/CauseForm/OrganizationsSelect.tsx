import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { useOrganizations } from '@app/hooks/api';

export const OrganizationsSelect = () => {
  const { control } = useFormContext();
  const { data } = useOrganizations();

  const options = data?.data.map(org => ({
    value: org.id,
    label: org.name,
  })) || [];

  return (
    <Controller
      control={control}
      name="organizations"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Related Organizations</InputLabel>
          <Select
            {...field}
            isMulti
            options={options}
            placeholder="Select organizations..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};