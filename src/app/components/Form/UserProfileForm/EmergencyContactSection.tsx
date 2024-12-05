import { Box, Typography, Grid } from '@mui/material';
import { FormInput } from '@app/components/Form';

export const EmergencyContactSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Emergency Contact
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormInput
            name="emergencyContact.name"
            label="Contact Name"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            name="emergencyContact.relationship"
            label="Relationship"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            name="emergencyContact.phone"
            label="Contact Phone"
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
};