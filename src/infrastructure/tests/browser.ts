import { setupWorker } from 'msw';
import { handlers } from 'mock_services';

export const worker = setupWorker(...handlers);

export { rest } from 'msw';
