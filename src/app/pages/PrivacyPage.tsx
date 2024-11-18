import { Box, Container, Typography, Paper } from '@mui/material';

const PrivacyPage = () => {
	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Paper sx={{ p: 4 }}>
				<Typography variant="h4" gutterBottom>
					Privacy Policy
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					1. Information We Collect
				</Typography>
				<Typography paragraph>
					We collect information you provide directly to us, including name, email address, and any
					other information you choose to provide.
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					2. How We Use Your Information
				</Typography>
				<Typography paragraph>
					We use the information we collect to:
					<Box component="ul" sx={{ pl: 4 }}>
						<li>Provide and maintain our services</li>
						<li>Connect you with organizations and causes</li>
						<li>Send you updates and communications</li>
						<li>Improve and optimize our platform</li>
					</Box>
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					3. Information Sharing
				</Typography>
				<Typography paragraph>
					We do not sell your personal information. We may share your information with organizations
					when you explicitly choose to connect with them through our platform.
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					4. Data Security
				</Typography>
				<Typography paragraph>
					We implement appropriate security measures to protect your personal information from
					unauthorized access, alteration, or destruction.
				</Typography>

				<Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
					Last updated: {new Date().toLocaleDateString()}
				</Typography>
			</Paper>
		</Container>
	);
};

export { PrivacyPage };
