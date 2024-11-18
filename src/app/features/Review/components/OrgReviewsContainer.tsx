import { Divider, Grid } from '@mui/material';

import { Organization } from '@api/entities/organization';

import { OrgRatingBarsContainer } from './OrgRatingBarsContainer';
import { OrgReviewList } from './OrgReviewList';
import { WriteOrgReview } from './WriteOrgReview';

interface Props {
	org: Organization;
}

const OrgReviewsContainer = ({ org }: Props) => {
	if (!org) return null;

	return (
		<>
			<Grid container spacing={2}>
				<OrgRatingBarsContainer rating={org.starRatings} />
				<WriteOrgReview orgId={org.orgId.toString()} orgName={org.name} />
			</Grid>
			<Divider sx={{ my: 2 }} />
			<OrgReviewList org={org} />
		</>
	);
};

export { OrgReviewsContainer };
