import { Divider, Grid } from '@mui/material';

import { OrgRatingBarsContainer } from './OrgRatingBarsContainer';
import { WriteOrgReview } from './WriteOrgReview';
import { OrgReviewList } from './OrgReviewList';
import { Organization } from '../../app/api/entities/organization';

type Props = {
	org: Organization;
};

const OrgReviewsLayout = ({ org }: Props) => {
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

export { OrgReviewsLayout };
