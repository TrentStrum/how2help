import { render, screen, fireEvent } from '@testing-library/react';
import { EventTabs } from './EventTabs';

const mockEvent = {
  id: 1,
  name: 'Test Event',
  description: 'Test Description',
  avatarImageUrl: 'test.jpg',
  startDate: '2024-03-20',
  location: 'Test Location',
  reactions: [],
  comments: [],
  activities: [],
  attendees: [],
};

describe('EventTabs Component', () => {
  it('renders all tabs', () => {
    render(<EventTabs event={mockEvent} />);

    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Attendees')).toBeInTheDocument();
    expect(screen.getByText('Comments')).toBeInTheDocument();
    expect(screen.getByText('Activities')).toBeInTheDocument();
  });

  it('switches content when tabs are clicked', () => {
    render(<EventTabs event={mockEvent} />);

    // Initially shows Details tab
    expect(screen.getByText('About this event')).toBeInTheDocument();

    // Click Attendees tab
    fireEvent.click(screen.getByText('Attendees'));
    expect(screen.getByText('Attendees (0)')).toBeInTheDocument();

    // Click Comments tab
    fireEvent.click(screen.getByText('Comments'));
    expect(screen.getByText('Comments (0)')).toBeInTheDocument();

    // Click Activities tab
    fireEvent.click(screen.getByText('Activities'));
    expect(screen.getByText('Activities (0)')).toBeInTheDocument();
  });
}); 