import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const SAFETY_EQUIPMENT = [
  { value: 'mask', label: 'Face Mask' },
  { value: 'gloves', label: 'Protective Gloves' },
  { value: 'goggles', label: 'Safety Goggles' },
  { value: 'vest', label: 'Safety Vest' },
  { value: 'boots', label: 'Safety Boots' },
  { value: 'helmet', label: 'Hard Hat/Helmet' },
  { value: 'ear-protection', label: 'Ear Protection' },
  { value: 'first-aid', label: 'First Aid Kit' },
  { value: 'sanitizer', label: 'Hand Sanitizer' },
  { value: 'sunscreen', label: 'Sunscreen' },
];

export const SafetyEquipmentSelect = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="health.safety_equipment"
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <InputLabel shrink>Required Safety Equipment</InputLabel>
          <Select
            {...field}
            isMulti
            options={SAFETY_EQUIPMENT}
            placeholder="Select required safety equipment..."
          />
          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};