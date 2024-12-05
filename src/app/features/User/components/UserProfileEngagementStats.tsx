import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import { User } from '@api/entities/user';

type Props = {
	user: User;
};

const UserProfileEngagementStats = ({ user }: Props) => {
	type GridItem = {
		icon: React.ReactNode;
		titleKey: string;
		value: string | React.ReactNode;
		color?: string;
	};

	const gridItems: GridItem[] = [
		{
			icon: <AccountBalanceWalletTwoToneIcon sx={{ fontSize: 48 }} />,
			titleKey: 'Total Activities',
			value: user.activities?.length || 0,
			color: 'error.main',
		},
		{
			icon: <StorefrontTwoToneIcon sx={{ fontSize: 48 }} />,
			titleKey: 'Favorite Organizations',
			value: user.favoriteOrgs?.length || 0,
			color: 'primary.main',
		},
		{
			icon: <PersonTwoToneIcon sx={{ fontSize: 48 }} />,
			titleKey: 'Favorite Causes',
			value: user.favoriteCauses?.length || 0,
			color: 'success.main',
		},
	];

	return (
		<Card>
			<CardContent>
				<Grid container spacing={3}>
					{gridItems.map((item, index) => (
						<Grid key={index} item xs={12} sm={6} md={4}>
							<Stack alignItems="center" direction="row" spacing={2} sx={{ p: 2 }}>
								<Box sx={{ color: item.color || 'text.secondary', opacity: 0.8 }}>{item.icon}</Box>
								<Box>
									<Typography color="text.secondary" variant="h6">
										{item.titleKey}
									</Typography>
									<Typography color={item.color || 'text.primary'} variant="h4">
										{item.value}
									</Typography>
								</Box>
							</Stack>
						</Grid>
					))}
				</Grid>
			</CardContent>
		</Card>
	);
};

export { UserProfileEngagementStats };
