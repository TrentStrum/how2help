import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormInput } from '@app/components/Form';

export const ObjectivesSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'objectives',
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Objectives
      </Typography>
      {fields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={11}>
            <FormInput
              name={`objectives.${index}`}
              label={`Objective ${index + 1}`}
              required
            />
          </Grid>
          <Grid item xs={1}>
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
        onClick={() => append('')}
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Add Objective
      </Button>
    </Box>
  );
};