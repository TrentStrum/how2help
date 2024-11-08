import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import {
	Stack,
	Card,
	CardContent,
	CardActions,
	Typography,
	Rating,
	alpha,
	Divider,
	Grid,
	Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetActivitiesByEntityId } from '@api/entities/activity';
import { Organization, useToggleFavoriteOrg } from '@api/entities/organization';
import { LinkButton } from '@components/Buttons/LinkButton';
import { SoftButton } from '@components/Buttons/SoftButton';
import { CardImage } from '@components/Cards/CardImage';

type Props = {
	org: Organization;
};

const OrgCard = ({ org }: Props) => {
	// const { data: favoriteStatus } = useOrgFavoriteStatus(org.orgId);
	// const [selected, setSelected] = useState(favoriteStatus?.isFavorite || false);
	// const { mutate: toggleFavorite } = useToggleFavoriteOrg(org.orgId.toString());
	const { data, isPending, isError, error } = useGetActivitiesByEntityId(
		org.orgId.toString(),
		'Organization',
		0,
		0,
	);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const activities = data?.results || [];

	const openOpportunities = activities.filter((activity) => activity.status === 'active').length;

	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			spacing={{ xs: 2, sm: 3 }}
			sx={{ height: '100%', flexGrow: 1 }}
		>
			<Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
				<Link style={{ textDecoration: 'none' }} to={`/org/${org.orgId}`}>
					<CardImage
						Id={org.orgId}
						avatarImageUrl={org.avatarImageUrl}
						height={300}
						imageAltDesc={`${org.name} + 's profile image`}
						maxWidth="100%"
					/>
				</Link>
				<CardContent>
					<Link style={{ textDecoration: 'none' }} to={`/org/${org.orgId}`}>
						<Typography color="primary" component="div" gutterBottom variant="h5">
							{org.name}
						</Typography>
					</Link>
					{!org.userRating ? '' : <Rating defaultValue={org.userRating} precision={0.5} readOnly />}
				</CardContent>
				<CardActions sx={{ m: 'auto', justifyContent: 'center', mb: 1 }}>
					<LinkButton buttonText="Learn More" url={`/org/${org.orgId}`} />
				</CardActions>
				<Divider />
				<Grid
					alignItems="left"
					container
					display="flex"
					justifyContent="space-between"
					p={1}
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
					}}
				>
					<Grid item>
						<SoftButton
							// color={selected ? 'error' : undefined}
							// onClick={() => {
							// 	toggleFavorite(!selected);
							// 	setSelected(!selected);
							// }}
							size="small"
							sx={{ width: 38, minWidth: 0, height: 38, mr: 1 }}
						>
							<FavoriteTwoToneIcon fontSize="small" />
						</SoftButton>
						<SoftButton color="secondary" size="small" sx={{ width: 38, minWidth: 0, height: 38 }}>
							<IosShareTwoToneIcon fontSize="small" />
						</SoftButton>
					</Grid>
					<Grid item>
						<Typography sx={{ display: 'flex', alignItems: 'center' }} variant="subtitle2">
							Open opportunities:
							<Tooltip title="Hover to show modal of list of activities that are clickable straight to activity profile">
								<Typography color="text.primary" component="span" sx={{ pl: 0.5 }} variant="h4">
									{openOpportunities ? openOpportunities : 0}
								</Typography>
							</Tooltip>
						</Typography>
					</Grid>
				</Grid>
			</Card>
		</Stack>
	);
};

export { OrgCard };
