
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { LoginBanner } from './LoginBanner';
import { LoginForm } from './LoginForm';





const LoginCover = () => {

  return (
    <>
      <Grid container>
       <LoginBanner />
        <Grid
          item
          xs={12}
          sm={9}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            py={{ xs: 2, sm: 3 }}
            mx={{ xl: 6 }}
          >
            <Container maxWidth="sm">
              <Typography
                align="center"
                variant="h3"
                gutterBottom
              >
                Sign in
              </Typography>
              <Typography
                align="center"
                variant="h6"
                fontWeight={400}
              >
                Access your account and continue your journey
              </Typography>
            </Container>
            <LoginForm />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export { LoginCover };
