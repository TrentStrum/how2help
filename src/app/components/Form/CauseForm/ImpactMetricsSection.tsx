import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormInput } from '@app/components/Form';

export const ImpactMetricsSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'impactMetrics',
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Impact Metrics
      </Typography>
      {fields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={5}>
            <FormInput
              name={`impactMetrics.${index}.metric`}
              label="Metric Name"
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormInput
              name={`impactMetrics.${index}.target`}
              label="Target"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormInput
              name={`impactMetrics.${index}.unit`}
              label="Unit"
              required
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <IconButton
              onClick={() => remove(index)}
              color="error"
              sx={{ mt: 1 }}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        onClick={() => append({ metric: '', target: 0, unit: '' })}
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Add Impact Metric
      </Button>
    </Box>
  );
};