import { Box, Typography, Grid } from '@mui/material';
import { FormInput, FormDatePicker } from '@app/components/Form';

export const RegistrationSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Registration Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FormDatePicker
            name="registration.deadline"
            label="Registration Deadline"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="registration.fee"
            label="Registration Fee"
            type="number"
            inputProps={{ min: 0, step: 0.01 }}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="registration.refundPolicy"
            label="Refund Policy"
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
    </Box>
  );
};