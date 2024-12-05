import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LandingPage } from '../LandingPage';

describe('LandingPage', () => {
  it('renders all sections', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Connect & Make an Impact')).toBeInTheDocument();
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Community Stories')).toBeInTheDocument();
  });

  it('handles navigation correctly', async () => {
    const mockNavigate = jest.fn();
    render(
      <MemoryRouter>
        <LandingPage navigate={mockNavigate} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Join Now'));
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/register');
    });
  });
}); 