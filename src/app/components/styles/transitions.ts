export const transitions = {
  quick: 'all 0.15s ease-in-out',
  medium: 'all 0.25s ease-in-out',
  slow: 'all 0.35s ease-in-out',
  hover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
  },
  focus: {
    outline: '2px solid',
    outlineOffset: 2,
  },
  loading: {
    backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
  },
};