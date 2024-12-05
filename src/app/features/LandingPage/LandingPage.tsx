import { Box, Container } from '@mui/material';

export const LandingPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(/patterns/grid.svg) center/100px repeat',
          opacity: 0.4,
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 4, md: 0 },
        }}
      >
        <HeroSection />
        <Container 
          maxWidth="xl"
          sx={{
            '& > *': {
              mb: { xs: 6, md: 10 },
            },
            '& > *:last-child': {
              mb: 0,
            },
          }}
        >
          <ImpactStats />
          <Features />
          <RecentEvents />
          <Testimonials />
          <CTASection />
        </Container>
      </Box>
    </Box>
  );
}; 