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
} from '@mui/material';
import { Link } from 'react-router-dom';

import { Activity } from '@api/entities/activity';
import { LinkButton } from '@components/Buttons/LinkButton';
import { SoftButton } from '@components/Buttons/SoftButton';
import { CardImage } from '@components/Cards/CardImage';

type Props = {
	id: number;
	name: string;
	avatarImageUrl?: string;
	rating?: number;
	entity: string;
	activities?: Activity[];
};

const OrgCard = ({ id, name, avatarImageUrl, rating, entity, activities }: Props) => {
	const openOpportunities = activities?.filter((activity) => activity.status === 'active').length;

	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			spacing={{ xs: 2, sm: 3 }}
			sx={{ height: '100%', flexGrow: 1 }}
		>
			<Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
				<Link style={{ textDecoration: 'none' }} to={`/${entity}/${id}`}>
					<CardImage
						Id={id}
						avatarImageUrl={avatarImageUrl}
						height={300}
						imageAltDesc={`${name} + 's profile image`}
						maxWidth="100%"
					/>
				</Link>
				<CardContent>
					<Link style={{ textDecoration: 'none' }} to={`/${entity}/${id}`}>
						<Typography color="primary" component="div" gutterBottom variant="h5">
							{name}
						</Typography>
					</Link>
					{!rating ? '' : <Rating defaultValue={rating} precision={0.5} readOnly />}
				</CardContent>
				<CardActions sx={{ m: 'auto', justifyContent: 'center', mb: 1 }}>
					<LinkButton buttonText="Learn More" url={`/${entity}/${id}`} />
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
							color="error"
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
							<Typography color="text.primary" component="span" sx={{ pl: 0.5 }} variant="h4">
								{openOpportunities ? openOpportunities : 0}
							</Typography>
						</Typography>
					</Grid>
				</Grid>
			</Card>
		</Stack>
	);
};

export { OrgCard };
