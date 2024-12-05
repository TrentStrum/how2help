import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormInput } from '@app/components/Form';

export const RequirementsSection = () => {
  const { control } = useFormContext();
  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: 'requirements.skills',
  });
  const { fields: equipmentFields, append: appendEquipment, remove: removeEquipment } = useFieldArray({
    control,
    name: 'requirements.equipment',
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Requirements
      </Typography>
      
      {/* Skills */}
      <Typography variant="subtitle1" gutterBottom>
        Required Skills
      </Typography>
      {skillFields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={11}>
            <FormInput
              name={`requirements.skills.${index}`}
              label={`Skill ${index + 1}`}
              required
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={() => removeSkill(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        onClick={() => appendSkill('')}
        variant="outlined"
        size="small"
        sx={{ mb: 3 }}
      >
        Add Skill
      </Button>

      {/* Equipment */}
      <Typography variant="subtitle1" gutterBottom>
        Required Equipment
      </Typography>
      {equipmentFields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={11}>
            <FormInput
              name={`requirements.equipment.${index}`}
              label={`Equipment ${index + 1}`}
              required
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={() => removeEquipment(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        onClick={() => appendEquipment('')}
        variant="outlined"
        size="small"
        sx={{ mb: 3 }}
      >
        Add Equipment
      </Button>

      {/* Age and Experience */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormInput
            name="requirements.age"
            label="Minimum Age"
            type="number"
            required
            inputProps={{ min: 0 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput
            name="requirements.experience"
            label="Required Experience"
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
    </Box>
  );
};