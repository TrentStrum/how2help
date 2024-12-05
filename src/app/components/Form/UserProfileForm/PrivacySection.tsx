import { Box, Typography, Grid } from '@mui/material';
import { FormSelect, FormCheckbox } from '@app/components/Form';

const VISIBILITY_OPTIONS = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
  { value: 'connections', label: 'Connections Only' },
];

export const PrivacySection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Privacy Settings
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormSelect
            name="privacySettings.profileVisibility"
            label="Profile Visibility"
            options={VISIBILITY_OPTIONS}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormCheckbox
            name="privacySettings.emailVisibility"
            label="Show email to others"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormCheckbox
            name="privacySettings.phoneVisibility"
            label="Show phone number to others"
          />
        </Grid>
      </Grid>
    </Box>
  );
};