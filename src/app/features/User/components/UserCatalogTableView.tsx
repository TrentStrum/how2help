import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import {
	Card,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Typography,
	Box,
	Avatar,
	Tooltip,
	IconButton,
	Link,
	useTheme,
} from '@mui/material';

import { User } from '@api/entities/user';

type Props = {
	users: User[];
};

const UserCatalogTableView = ({ users }: Props) => {
	const theme = useTheme();
	return (
		<Box width="100%">
			{users.length === 0 ? (
				<Typography
					align="center"
					color="text.secondary"
					fontWeight={500}
					sx={{
						py: { xs: 2, sm: 3, md: 6, lg: 10 },
					}}
					variant="h3"
				>
					We couldn&apos;t find any users matching your search criteria
				</Typography>
			) : (
				<Card>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align="center">User</TableCell>
									<TableCell align="center">Name</TableCell>
									<TableCell align="center">Lifetime events attended</TableCell>
									<TableCell align="center">Favorite Organizations</TableCell>
									<TableCell align="center">Favorite Causes</TableCell>
									<TableCell align="center">Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users.map((user) => {
									return (
										<TableRow hover key={user.userId}>
											<TableCell align="center">
												<TableCell align="center">
													<Link
														fontWeight={500}
														href={`/user/${user.userId}`}
														underline="hover"
														variant="subtitle1"
													>
														<Box alignItems="center" display="flex">
															<Avatar
																src={user.avatarImageUrl}
																sx={{
																	mr: 1,
																}}
															/>
															<Box>{user.username}</Box>
														</Box>
													</Link>
												</TableCell>
											</TableCell>
											<TableCell align="center">
												<Typography fontWeight={400}>
													{user.firstName} {user.lastName}
												</Typography>
											</TableCell>
											<TableCell align="center">
												<Typography>TBD</Typography>
											</TableCell>
											<TableCell align="center">
												<Typography fontWeight={600}>{user.favoriteOrgs?.length}</Typography>
											</TableCell>
											<TableCell align="center">
												<Typography>{user.favoriteCauses?.length}</Typography>
											</TableCell>
											<TableCell align="center">
												<Typography noWrap>
													<Tooltip arrow placement="top" title="View user profile">
														<Link
															fontWeight={500}
															href={`/user/${user.userId}`}
															underline="hover"
															variant="subtitle1"
														>
															<IconButton
																size="large"
																sx={{
																	width: 60,
																	height: 60,
																	borderRadius: 50,
																}}
															>
																<PersonSearchTwoToneIcon
																	sx={{
																		fontSize: theme.typography.pxToRem(20),
																	}}
																/>
															</IconButton>
														</Link>
													</Tooltip>
													<Tooltip arrow placement="top" title="Add to favourites">
														<IconButton
															size="large"
															sx={{
																width: 60,
																height: 60,
																borderRadius: 50,
															}}
														>
															<FavoriteTwoToneIcon
																sx={{
																	fontSize: theme.typography.pxToRem(20),
																}}
															/>
														</IconButton>
													</Tooltip>
												</Typography>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Card>
			)}
		</Box>
	);
};

export { UserCatalogTableView };
