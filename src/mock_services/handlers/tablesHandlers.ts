import { rest } from 'msw';

import {
  MY_TABLES_RESPONSE_DATA,
  AVAILABLE_TABLES_RESPONSE_DATA,
} from 'mock_services';

export const getMyTablesHandler = rest.get(
  'https://exampleapi.com.co/my-tables',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.json(MY_TABLES_RESPONSE_DATA));
  }
);

export const getMyTablesErrorHandler = rest.get(
  'https://exampleapi.com.co/my-tables',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.status(401));
  }
);

export const getAvailableTablesHandler = rest.get(
  'https://exampleapi.com.co/available-tables',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.json(AVAILABLE_TABLES_RESPONSE_DATA));
  }
);

export const getAvailableTablesErrorHandler = rest.get(
  'https://exampleapi.com.co/available-tables',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.status(401));
  }
);

export const tablesHandlers = [getMyTablesHandler, getAvailableTablesHandler];
