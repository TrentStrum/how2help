import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';

import { Organization } from '@api/entities/organization';

type Props = {
	org: Organization;
};

const OrgProfileAdditionalInfo = ({ org }: Props) => {
	return (
		<Box sx={{ p: 3 }}>
			{/* Mission and Description */}
			<Paper sx={{ p: 3, mb: 3 }}>
				<Typography sx={{ mb: 2 }} variant="h5">
					Our Mission
				</Typography>
				<Typography sx={{ mb: 3 }} variant="body1">
					{org.mission || 'No mission statement provided.'}
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography sx={{ mb: 2 }} variant="h5">
					About Us
				</Typography>
				<Typography variant="body1">{org.description || 'No description provided.'}</Typography>
			</Paper>

			{/* Contact and Details Grid */}
			<Grid container spacing={3}>
				{/* Contact Information */}
				<Grid item md={6} xs={12}>
					<Paper sx={{ p: 3, height: '100%' }}>
						<Typography sx={{ mb: 3 }} variant="h5">
							Contact Information
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
							<LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
							<Typography>{org.address || 'No address provided'}</Typography>
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
							<LanguageIcon sx={{ mr: 2, color: 'primary.main' }} />
							<Typography>
								{org.website ? (
									<a
										href={org.website}
										rel="noopener noreferrer"
										style={{ color: 'inherit', textDecoration: 'none' }}
										target="_blank"
									>
										{org.website}
									</a>
								) : (
									'No website provided'
								)}
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
							<EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
							<Typography>{org.email || 'No email provided'}</Typography>
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
							<Typography>{org.phone || 'No phone number provided'}</Typography>
						</Box>
					</Paper>
				</Grid>

				{/* Organization Details */}
				<Grid item md={6} xs={12}>
					<Paper sx={{ p: 3, height: '100%' }}>
						<Typography sx={{ mb: 3 }} variant="h5">
							Organization Details
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
							<GroupsIcon sx={{ mr: 2, color: 'primary.main' }} />
							<Box>
								<Typography variant="subtitle1">Size</Typography>
								<Typography>{org.size || 'Organization size not specified'}</Typography>
							</Box>
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<CalendarTodayIcon sx={{ mr: 2, color: 'primary.main' }} />
							<Box>
								<Typography variant="subtitle1">Founded</Typography>
								<Typography>
									{org.foundedYear
										? `Established in ${org.foundedYear}`
										: 'Foundation year not provided'}
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export { OrgProfileAdditionalInfo };
