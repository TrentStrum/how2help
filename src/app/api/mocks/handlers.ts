import { handlers as causeHandlers } from '../entities/cause/mocks/mockHandler';
import { handlers as eventHandler } from '../entities/events/mocks/mockHandler';
import { handlers as orgHandlers } from '../entities/organization/mocks/mockHandler';
import { handlers as userHandlers } from '../entities/user/mocks/mockHandler';

export const handlers = [...userHandlers, ...orgHandlers, ...causeHandlers, ...eventHandler];
