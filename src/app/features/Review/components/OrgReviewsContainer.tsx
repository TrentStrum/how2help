import { Divider, Grid } from '@mui/material';

import { Organization } from '@api/entities/organization';

import { OrgRatingBarsContainer } from './OrgRatingBarsContainer';
import { OrgReviewList } from './OrgReviewList';
import { WriteOrgReview } from './WriteOrgReview';

type Props = {
	org: Organization;
};

const OrgReviewsContainer = ({ org }: Props) => {
	return (
		<>
			<Grid container>
				<OrgRatingBarsContainer rating={org.starRatings} />
				<WriteOrgReview />
			</Grid>
			<Divider />
			<OrgReviewList org={org} />
		</>
	);
};

export { OrgReviewsContainer };
