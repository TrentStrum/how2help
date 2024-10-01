import {
	Avatar,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Container,
	Divider,
	Grid,
	InputAdornment,
	styled,
	TextField,
	Typography,
} from '@mui/material';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Link } from 'react-router-dom';
import { LinkButton } from '../../../app/components/ui/LinkButton';
import { useGetCauseAll } from '../../../app/api/entities/cause';
import { CatalogContainer } from '../../../app/components/layouts/Catalog/CatalogContainer';

const CardActionAreaWrapper = styled(CardActionArea)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	position: 'relative',

	'.MuiTouchRipple-root': {
		opacity: 0.3,
	},

	'.MuiCardActionArea-focusHighlight': {
		background: theme.palette.common.white,
	},

	'&:hover': {
		'.MuiCardActionArea-focusHighlight': {
			opacity: 0.1,
		},
	},
}));

const CauseCatalog = () => {
	const { data: causes, isLoading, isError } = useGetCauseAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<CatalogContainer>
			<Container>
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4 }}
					>
						<Grid xs={12}>
							<TextField
								fullWidth
								// onChange={handleQueryChange}
								// value={query}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<SearchTwoToneIcon />
										</InputAdornment>
									),
								}}
								placeholder='Search by organization name...'
							/>
						</Grid>

						{causes?.map((cause) => (
							<Grid
								item
								xs={2}
								sm={4}
								md={4}
								key={cause.causeId}
							>
								<Card key={cause.causeId}>
									<CardActionAreaWrapper>
										<CardMedia
											component='img'
											height='260'
											image={cause.avatarImageUrl}
											alt='...'
										/>
									</CardActionAreaWrapper>
									<Box
										sx={{
											position: 'relative',
											p: { xs: 2, md: 3 },
										}}
									>
										<Box
											display='flex'
											alignItems='flex-start'
											justifyContent='space-between'
											flexDirection={{ xs: 'column', sm: 'row' }}
										>
											<Box
												display='flex'
												alignItems='center'
											>
												<Avatar
													sx={{
														width: 44,
														height: 44,
													}}
													src='/avatars/3.png'
												/>
												<Box ml={1.5}>
													<Link
														to={`/cause/${cause.causeId}`}
														style={{ textDecoration: 'none' }}
													>
														{cause.name}
													</Link>
												</Box>
											</Box>
										</Box>
										<Typography
											variant='h5'
											color='text.secondary'
											fontWeight={400}
											sx={{
												py: 2,
											}}
										>
											{cause.description}
										</Typography>
										<Divider
											sx={{
												mb: 2,
											}}
										/>
										<LinkButton
											url={`/cause/${cause.causeId}`}
											buttonText='Learn More'
										/>
									</Box>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</CatalogContainer>
	);
};

export { CauseCatalog };
