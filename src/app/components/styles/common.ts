import { alpha } from '@mui/material';

export const commonStyles = (theme: any) => ({
  card: {
    borderRadius: '12px',
    transition: 'all 0.2s ease-in-out',
    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
    background: theme.palette.background.paper,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[8],
    },
  },
  input: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: alpha(theme.palette.action.hover, 0.05),
      },
      '&.Mui-focused': {
        boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
      },
    },
  },
  button: {
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 600,
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'translateY(-1px)',
    },
  },
  list: {
    '& .MuiListItem-root': {
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: alpha(theme.palette.action.hover, 0.05),
      },
    },
  },
  blur: {
    backdropFilter: 'blur(8px)',
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
  },
});