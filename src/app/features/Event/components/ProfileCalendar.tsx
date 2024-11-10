import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { Box, Typography, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Cause } from '@api/entities/cause';
import { useGetActiveEventsByEntityId } from '@api/entities/events/hooks/useGetActiveEventsByEntityId';
import { Organization } from '@api/entities/organization';
import { User } from '@api/entities/user';
import { CardCalendarWrapper } from '@app/components/Cards';
import { SwipeIndicator } from '@app/components/SwipeIndicator-Styles';

import { ProfileCalendarCard } from './ProfileCalendarCard';

type Props = {
	entityType: string;
	entityId: string;
	entity: Organization | Cause | User;
};

const ProfileCalendar = ({ entityId, entityType, entity }: Props) => {
	console.log(entityId);
	console.log(entityType);

	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState<number>(10);
	const { data, isPending, isError, error } = useGetActiveEventsByEntityId(
		entityId,
		entityType,
		currentPage,
		limit,
	);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const events = data.results;
	console.log(events);

	return (
		<>
			<Box
				alignItems="center"
				display="flex"
				justifyContent="space-between"
				sx={{
					pb: 2,
				}}
			>
				<Typography variant="h4">{}</Typography>
				<Box>
					<SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
						<ChevronLeftTwoToneIcon />
					</SwipeIndicator>
					<SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
						<ChevronRightTwoToneIcon />
					</SwipeIndicator>
				</Box>
			</Box>
			<Grid alignItems="stretch" container spacing={{ xs: 2, sm: 3 }}>
				<Grid item mb={2} md={4} xs={12}>
					<CardCalendarWrapper sx={{ mt: -2 }}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<StaticDatePicker
								// onChange={}
								defaultValue={dayjs('2022-04-17')}
								displayStaticWrapperAs="desktop"
							/>
						</LocalizationProvider>
					</CardCalendarWrapper>
				</Grid>
				<Grid item md={8} xs={12}>
					<Swiper
						breakpoints={{
							500: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1200: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
						}}
						loop
						modules={[Navigation, Pagination]}
						navigation={{
							nextEl: '.MuiSwipe-right',
							prevEl: '.MuiSwipe-left',
						}}
						pagination={{
							clickable: true,
							dynamicBullets: true,
						}}
						slidesPerView={2}
						spaceBetween={30}
						style={{ height: '100%' }}
					>
						{events.map((event) => (
							<SwiperSlide key={event.eventId}>
								<Box>
									<ProfileCalendarCard entity={entity} event={event} />
								</Box>
							</SwiperSlide>
						))}
					</Swiper>
				</Grid>
			</Grid>
		</>
	);
};

export { ProfileCalendar };
