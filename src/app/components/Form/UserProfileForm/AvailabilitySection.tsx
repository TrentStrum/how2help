import { Box, Typography, Grid } from '@mui/material';
import { FormCheckbox } from '@app/components/Form';

export const AvailabilitySection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Availability
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormCheckbox name="availability.weekdays" label="Weekdays" />
          <FormCheckbox name="availability.weekends" label="Weekends" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormCheckbox name="availability.mornings" label="Mornings" />
          <FormCheckbox name="availability.afternoons" label="Afternoons" />
          <FormCheckbox name="availability.evenings" label="Evenings" />
        </Grid>
      </Grid>
    </Box>
  );
};