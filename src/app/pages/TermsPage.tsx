import { Box, Container, Typography, Paper } from '@mui/material';

const TermsPage = () => {
	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Paper sx={{ p: 4 }}>
				<Typography variant="h4" gutterBottom>
					Terms of Service
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					1. Acceptance of Terms
				</Typography>
				<Typography paragraph>
					By accessing or using How2Help, you agree to be bound by these Terms of Service and all
					applicable laws and regulations.
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					2. User Accounts
				</Typography>
				<Typography paragraph>
					<Box component="ul" sx={{ pl: 4 }}>
						<li>You must provide accurate and complete information when creating an account</li>
						<li>You are responsible for maintaining the security of your account</li>
						<li>You must notify us immediately of any unauthorized access</li>
					</Box>
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					3. Acceptable Use
				</Typography>
				<Typography paragraph>
					You agree not to:
					<Box component="ul" sx={{ pl: 4 }}>
						<li>Use the service for any illegal purpose</li>
						<li>Post false or misleading information</li>
						<li>Interfere with the proper functioning of the service</li>
						<li>Attempt to gain unauthorized access to our systems</li>
					</Box>
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					4. Content Guidelines
				</Typography>
				<Typography paragraph>
					Users are responsible for all content they post. Content must be accurate, lawful, and not
					infringe on any third-party rights.
				</Typography>

				<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
					5. Termination
				</Typography>
				<Typography paragraph>
					We reserve the right to terminate or suspend access to our service immediately, without
					prior notice, for any violation of these Terms.
				</Typography>

				<Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
					Last updated: {new Date().toLocaleDateString()}
				</Typography>
			</Paper>
		</Container>
	);
};

export { TermsPage };
