import { Box, Typography, Grid } from '@mui/material';
import { FormInput, FormSelect } from '@app/components/Form';

const FREQUENCY_OPTIONS = [
  { value: 'one-time', label: 'One-time' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'flexible', label: 'Flexible' },
];

export const CommitmentSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Time Commitment
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FormInput
            name="commitment.hours"
            label="Hours per Week"
            type="number"
            required
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormSelect
            name="commitment.frequency"
            label="Frequency"
            options={FREQUENCY_OPTIONS}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="commitment.duration"
            label="Duration"
            required
            helperText="e.g., 3 months, 1 year"
          />
        </Grid>
      </Grid>
    </Box>
  );
};