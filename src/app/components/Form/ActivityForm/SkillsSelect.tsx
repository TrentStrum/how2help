import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const SKILLS = [
  { value: 'programming', label: 'Programming' },
  { value: 'teaching', label: 'Teaching' },
  { value: 'writing', label: 'Writing' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'management', label: 'Management' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'legal', label: 'Legal' },
  { value: 'finance', label: 'Finance' },
  { value: 'languages', label: 'Languages' },
];

export const SkillsSelect = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="requirements.skills"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Required Skills</InputLabel>
          <Select
            {...field}
            isMulti
            options={SKILLS}
            placeholder="Select required skills..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};