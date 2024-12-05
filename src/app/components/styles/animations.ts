import { keyframes } from '@mui/material';

export const animations = {
	fadeIn: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
	slideUp: keyframes`
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `,
	scaleIn: keyframes`
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,
	shimmer: keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  `,
};

export const animationStyles = {
	fadeIn: {
		animation: `${animations.fadeIn} 0.3s ease-in-out`,
	},
	slideUp: {
		animation: `${animations.slideUp} 0.4s ease-out`,
	},
	scaleIn: {
		animation: `${animations.scaleIn} 0.3s ease-out`,
	},
	shimmer: {
		backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
		backgroundSize: '200% 100%',
		animation: `${animations.shimmer} 1.5s infinite`,
	},
};