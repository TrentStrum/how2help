import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormInput } from '@app/components/Form';

export const ReferencesSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'references',
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        References
      </Typography>
      {fields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <FormInput
              name={`references.${index}.name`}
              label="Reference Name"
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              name={`references.${index}.relationship`}
              label="Relationship"
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormInput
              name={`references.${index}.contact`}
              label="Contact Information"
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
        onClick={() => append({ name: '', relationship: '', contact: '' })}
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Add Reference
      </Button>
    </Box>
  );
};