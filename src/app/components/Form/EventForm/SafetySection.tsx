import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormInput } from '@app/components/Form';

export const SafetySection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'safety',
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Safety Guidelines
      </Typography>
      {fields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={11}>
            <FormInput
              name={`safety.${index}`}
              label={`Safety Guideline ${index + 1}`}
              required
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={() => remove(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        onClick={() => append('')}
        variant="outlined"
        size="small"
      >
        Add Safety Guideline
      </Button>
    </Box>
  );
};