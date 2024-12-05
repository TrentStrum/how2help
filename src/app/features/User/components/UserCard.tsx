import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import {
	Stack,
	Card,
	CardContent,
	CardActions,
	Typography,
	alpha,
	Divider,
	Grid,
	Checkbox,
	Avatar,
} from '@mui/material';
import clsx from 'clsx';
import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { useGetUserById } from '@api/entities/user';
import { UserCardWrapper } from '@app/components/Cards';
import { LinkButton } from '@components/Buttons/LinkButton';
import { SoftButton } from '@components/Buttons/SoftButton';

type Props = {
	id: number;
	onSelectedUserChange: (event: ChangeEvent<HTMLInputElement>, userId: string) => void;
};

const UserCard = ({ id, onSelectedUserChange }: Props) => {
	const { data: user, isPending, isError, error } = useGetUserById(id);
	const [selectedItems, setSelectedUsers] = useState<string[]>([]);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const isUserSelected = selectedItems.includes(user.userId.toString());

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, userId: string) => {
		if (!selectedItems.includes(userId)) {
			setSelectedUsers((prevSelected) => [...prevSelected, userId]);
		} else {
			setSelectedUsers((prevSelected) => prevSelected.filter((id) => id !== userId));
		}
		onSelectedUserChange(event, userId);
	};
	return (
		<UserCardWrapper
			className={clsx({
				'Mui-selected': isUserSelected,
			})}
		>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={{ xs: 2, sm: 3 }}
				sx={{ height: '100%', flexGrow: 1 }}
			>
				<Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
					<Link style={{ textDecoration: 'none' }} to={`/${user}/${id}`}>
						<Avatar
							src={user.avatarImageUrl}
							sx={{
								width: 50,
								height: 50,
								mr: 1.5,
								mb: { xs: 2, md: 0 },
							}}
							variant="rounded"
						/>
					</Link>
					<CardContent>
						<Link style={{ textDecoration: 'none' }} to={`/${user}/${id}`}>
							<Typography color="primary" component="div" gutterBottom variant="h5">
								{user.username}
							</Typography>
						</Link>
					</CardContent>
					<CardActions sx={{ m: 'auto', justifyContent: 'center', mb: 1 }}>
						<LinkButton buttonText="Learn More" url={`/${user}/${id}`} />
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
								theme.palette.mode === 'dark'
									? alpha(theme.palette.neutral[25], 0.02)
									: 'neutral.25',
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
							<SoftButton
								color="secondary"
								size="small"
								sx={{ width: 38, minWidth: 0, height: 38 }}
							>
								<IosShareTwoToneIcon fontSize="small" />
							</SoftButton>
						</Grid>
						<Grid item>
							<Typography sx={{ display: 'flex', alignItems: 'center' }} variant="subtitle2">
								Open opportunities:
								<Typography color="text.primary" component="span" sx={{ pl: 0.5 }} variant="h4">
									4
								</Typography>
							</Typography>
						</Grid>
					</Grid>
					<Checkbox
						checked={isUserSelected}
						onChange={(event) => handleCheckboxChange(event, user.userId.toString())}
						value={isUserSelected}
					/>
				</Card>
			</Stack>
		</UserCardWrapper>
	);
};

export { UserCard };
