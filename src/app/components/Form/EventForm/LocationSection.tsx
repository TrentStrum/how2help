import { Box, Typography, Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { FormInput, FormSelect } from '@app/components/Form';

const LOCATION_TYPES = [
  { value: 'physical', label: 'Physical Location' },
  { value: 'virtual', label: 'Virtual Event' },
  { value: 'hybrid', label: 'Hybrid Event' },
];

export const LocationSection = () => {
  const { watch } = useFormContext();
  const locationType = watch('location.type');

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Event Location
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormSelect
            name="location.type"
            label="Location Type"
            options={LOCATION_TYPES}
            required
          />
        </Grid>
        
        {(locationType === 'physical' || locationType === 'hybrid') && (
          <Grid item xs={12}>
            <FormInput
              name="location.address"
              label="Physical Address"
              required
            />
          </Grid>
        )}

        {(locationType === 'virtual' || locationType === 'hybrid') && (
          <Grid item xs={12}>
            <FormInput
              name="location.virtualLink"
              label="Virtual Meeting Link"
              type="url"
              required
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <FormInput
            name="location.instructions"
            label="Additional Instructions"
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
    </Box>
  );
};