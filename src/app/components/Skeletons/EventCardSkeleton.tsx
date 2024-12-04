import { Card, CardContent, Skeleton } from '@mui/material';

export const EventCardSkeleton = () => (
  <Card>
    <Skeleton variant="rectangular" height={140} />
    <CardContent>
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
    </CardContent>
  </Card>
); 