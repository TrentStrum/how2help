import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
	Avatar,
	Box,
	Card,
	CardMedia,
	Container,
	Divider,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { useGetAllCauses } from '@api/entities/cause';
import { CardActionAreaWrapper } from '@app/components/Cards';

import { LinkButton } from '../../../components/Buttons/LinkButton';

const CauseCatalog = () => {
	const { data: causes, isLoading, isError } = useGetAllCauses();

	if (isLoading) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid columns={{ xs: 4 }} container spacing={{ xs: 2, md: 3 }}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							// onChange={handleQueryChange}
							// value={query}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchTwoToneIcon />
									</InputAdornment>
								),
							}}
							placeholder="Search by organization name..."
						/>
					</Grid>

					{causes?.map((cause) => (
						<Grid item key={cause.causeId} md={4} sm={4} xs={2}>
							<Card key={cause.causeId}>
								<CardActionAreaWrapper>
									<CardMedia alt="..." component="img" height="260" image={cause.avatarImageUrl} />
								</CardActionAreaWrapper>
								<Box
									sx={{
										position: 'relative',
										p: { xs: 2, md: 3 },
									}}
								>
									<Box
										alignItems="flex-start"
										display="flex"
										flexDirection={{ xs: 'column', sm: 'row' }}
										justifyContent="space-between"
									>
										<Box alignItems="center" display="flex">
											<Avatar
												src="/avatars/3.png"
												sx={{
													width: 44,
													height: 44,
												}}
											/>
											<Box ml={1.5}>
												<Link style={{ textDecoration: 'none' }} to={`/cause/${cause.causeId}`}>
													{cause.name}
												</Link>
											</Box>
										</Box>
									</Box>
									<Typography
										color="text.secondary"
										fontWeight={400}
										sx={{
											py: 2,
										}}
										variant="h5"
									>
										{cause.description}
									</Typography>
									<Divider
										sx={{
											mb: 2,
										}}
									/>
									<LinkButton buttonText="Learn More" url={`/cause/${cause.causeId}`} />
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export { CauseCatalog };
