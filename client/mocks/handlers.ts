import { handlers as userHandlers } from './user/mockHandler';
import { handlers as orgHandlers } from './organization/mockHandler';
import { handlers as causeHandlers } from './cause/mockHandler';

export const handlers = [...userHandlers, ...orgHandlers, ...causeHandlers];
