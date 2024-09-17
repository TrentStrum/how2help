import { Box, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { useGetCauseAll } from '../../api/hooks/cause/useGetCauses';
import { Cause } from '../../types/cause.types';
import { CatalogContainer } from '../../components/layouts/Catalog/CatalogContainer';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { CatalogCard } from '../../components/layouts/Catalog/CatalogCard';

export default function CauseList() {
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
						columns={{ xs: 4, sm: 8, md: 12 }}
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
						{causes?.map((cause: Cause) => (
							<Grid
								item
								xs={2}
								sm={4}
								md={4}
								key={cause.causeId}
							>
								<CatalogCard
									id={cause.causeId}
									name={cause.name}
									avatarImageUrl={cause.avatarImageUrl}
									rating={cause.userRating}
									entity='cause'
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</CatalogContainer>
	);
}
