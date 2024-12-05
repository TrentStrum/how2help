import { Box, Typography, Grid } from '@mui/material';
import { FormInput, FormCheckbox } from '@app/components/Form';
import { SkillsSelect } from './SkillsSelect';
import { CertificationsSelect } from './CertificationsSelect';

export const RequirementsSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Requirements
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SkillsSelect />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            name="requirements.experience"
            label="Required Experience"
            multiline
            rows={2}
          />
        </Grid>
        <Grid item xs={12}>
          <CertificationsSelect />
        </Grid>
        <Grid item xs={12}>
          <FormCheckbox
            name="requirements.background_check"
            label="Background Check Required"
          />
        </Grid>
      </Grid>
    </Box>
  );
};