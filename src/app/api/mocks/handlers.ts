import { handlers as activityHandler } from '../entities/activity/mocks/mockHandler';
import { handlers as causeHandler } from '../entities/cause/mocks/mockHandler';
import { handlers as eventHandler } from '../entities/events/mocks/mockHandler';
import { handlers as orgHandler } from '../entities/organization/mocks/mockHandler';
import { handlers as reviewHandler } from '../entities/reviews/mocks/mockHandler';
import { handlers as userHandler } from '../entities/user/mocks/mockHandler';

export const handlers = [
	...userHandler,
	...orgHandler,
	...causeHandler,
	...eventHandler,
	...reviewHandler,
	...activityHandler,
];
