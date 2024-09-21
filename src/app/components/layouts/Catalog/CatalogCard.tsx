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
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import { Link } from 'react-router-dom';
import { ButtonSoft } from '../../ui/button-soft';
import { CardImage } from '../../ui/CardImage';
import { LinkButton } from '../../ui/LinkButton';

type Props = {
	id: number;
	name: string;
	avatarImageUrl?: string;
	rating?: number;
	entity: string;
};

const CatalogCard = ({ id, name, avatarImageUrl, rating, entity }: Props) => {
	return (
		<Stack
			spacing={{ xs: 2, sm: 3 }}
			direction={{ xs: 'column', sm: 'row' }}
			sx={{ height: '100%', flexGrow: 1 }}
		>
			<Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
				<Link
					to={`/${entity}/${id}`}
					style={{ textDecoration: 'none' }}
				>
					<CardImage
						avatarImageUrl={avatarImageUrl}
						imageAltDesc={`${name} + 's profile image`}
						height={300}
						maxWidth='100%'
						Id={id}
					/>
				</Link>
				<CardContent>
					<Link
						to={`/${entity}/${id}`}
						style={{ textDecoration: 'none' }}
					>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							color='primary'
						>
							{name}
						</Typography>
					</Link>
					<Rating
						readOnly
						defaultValue={rating}
						precision={0.5}
					/>
				</CardContent>
				<CardActions sx={{ m: 'auto', justifyContent: 'center', mb: 1 }}>
					<LinkButton
						url={`/${entity}/${id}`}
						buttonText='Learn More'
					/>
				</CardActions>
				<Divider />
				<Grid
					container
					p={1}
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'dark'
								? alpha(theme.palette.neutral[25], 0.02)
								: 'neutral.25',
					}}
					display='flex'
					alignItems='left'
					justifyContent='space-between'
				>
					<Grid item>
						<ButtonSoft
							color='error'
							sx={{ width: 38, minWidth: 0, height: 38, mr: 1 }}
							size='small'
						>
							<FavoriteTwoToneIcon fontSize='small' />
						</ButtonSoft>
						<ButtonSoft
							color='secondary'
							sx={{ width: 38, minWidth: 0, height: 38 }}
							size='small'
						>
							<IosShareTwoToneIcon fontSize='small' />
						</ButtonSoft>
					</Grid>
					<Grid item>
						<Typography
							variant='subtitle2'
							sx={{ display: 'flex', alignItems: 'center' }}
						>
							Open opportunities:
							<Typography
								sx={{ pl: 0.5 }}
								component='span'
								color='text.primary'
								variant='h4'
							>
								4
							</Typography>
						</Typography>
					</Grid>
				</Grid>
			</Card>
		</Stack>
	);
};

export { CatalogCard };
