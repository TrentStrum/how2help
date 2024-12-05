import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormInput } from '@app/components/Form';

export const StaffSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'staff',
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Staff Members
      </Typography>
      {fields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <FormInput
              name={`staff.${index}.name`}
              label="Name"
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormInput
              name={`staff.${index}.role`}
              label="Role"
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              name={`staff.${index}.email`}
              label="Email"
              type="email"
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
        onClick={() => append({ name: '', role: '', email: '' })}
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Add Staff Member
      </Button>
    </Box>
  );
};