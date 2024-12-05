import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormInput, FormSelect } from '@app/components/Form';

const MEDIA_TYPES = [
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
  { value: 'document', label: 'Document' },
];

export const MediaGallerySection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'media',
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Media Gallery
      </Typography>
      {fields.map((field, index) => (
        <Grid container key={field.id} spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={3}>
            <FormSelect
              name={`media.${index}.type`}
              label="Media Type"
              options={MEDIA_TYPES}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              name={`media.${index}.url`}
              label="URL"
              type="url"
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              name={`media.${index}.caption`}
              label="Caption"
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
        onClick={() => append({ type: 'image', url: '', caption: '' })}
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Add Media
      </Button>
    </Box>
  );
};