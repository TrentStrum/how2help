import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'zh', label: 'Chinese' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ar', label: 'Arabic' },
  { value: 'hi', label: 'Hindi' },
  { value: 'pt', label: 'Portuguese' },
];

export const LanguageSelect = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="languages"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Languages</InputLabel>
          <Select
            {...field}
            isMulti
            options={LANGUAGES}
            placeholder="Select languages..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};