import { setupServer } from 'msw/node';
import { handlers } from 'mock_services';

export const server = setupServer(...handlers);

export { rest } from 'msw';
