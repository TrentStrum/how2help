import { Box, Typography, Grid } from '@mui/material';
import { FormInput } from '@app/components/Form';

export const SocialMediaSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Social Media Links
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormInput
            name="socialMedia.facebook"
            label="Facebook URL"
            type="url"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput
            name="socialMedia.twitter"
            label="Twitter URL"
            type="url"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput
            name="socialMedia.linkedin"
            label="LinkedIn URL"
            type="url"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormInput
            name="socialMedia.instagram"
            label="Instagram URL"
            type="url"
          />
        </Grid>
      </Grid>
    </Box>
  );
};