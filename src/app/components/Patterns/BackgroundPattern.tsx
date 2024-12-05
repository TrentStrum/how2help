import { Box } from '@mui/material';

export const BackgroundPattern = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.4,
      background: `
        radial-gradient(circle at 0% 0%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 100% 100%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 0% 100%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)
      `,
      pointerEvents: 'none',
      zIndex: 0,
    }}
  />
); 