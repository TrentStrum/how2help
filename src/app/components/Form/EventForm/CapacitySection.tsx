import { Box, Typography, Grid } from '@mui/material';
import { FormInput } from '@app/components/Form';

export const CapacitySection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Event Capacity
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormInput
            name="capacity.minimum"
            label="Minimum Participants"
            type="number"
            required
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput
            name="capacity.maximum"
            label="Maximum Participants"
            type="number"
            required
            inputProps={{ min: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};