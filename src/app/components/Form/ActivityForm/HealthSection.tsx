import { Box, Typography, Grid } from '@mui/material';
import { FormInput } from '@app/components/Form';
import { SafetyEquipmentSelect } from './SafetyEquipmentSelect';
import { VaccinationsSelect } from './VaccinationsSelect';

export const HealthSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Health & Safety Requirements
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormInput
            name="health.physical_demands"
            label="Physical Demands"
            multiline
            rows={2}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <SafetyEquipmentSelect />
        </Grid>
        <Grid item xs={12}>
          <VaccinationsSelect />
        </Grid>
      </Grid>
    </Box>
  );
};