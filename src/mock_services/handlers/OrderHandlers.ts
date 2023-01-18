import { rest } from 'msw';

import {
  NEW_ORDER_RESPONSE_DATA,
  MENU_RESPONSE_DATA,
  DETAIL_ORDER_RESPONSE_DATA,
  ORDER_CHECK_RESPONSE_DATA,
} from 'mock_services';

export const postCreateOrderHandler = rest.post(
  'http://exampleapi.com.co/create-order',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.json(NEW_ORDER_RESPONSE_DATA));
  }
);

export const getOrderCheckHandler = rest.get(
  'http://exampleapi.com.co/check-order/:id',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.json(ORDER_CHECK_RESPONSE_DATA));
  }
);

export const getMenuByCategory = rest.get(
  'http://exampleapi.com.co/menu/categories',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.json(MENU_RESPONSE_DATA));
  }
);

export const getDetailOrderHandler = rest.get(
  'http://exampleapi.com.co/detail-order/:id',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.json(DETAIL_ORDER_RESPONSE_DATA));
  }
);

export const changeOrderStateHandler = rest.patch(
  'http://exampleapi.com.co/orders/:id',
  (_, res, ctx) => {
    return res(ctx.delay(500), ctx.json({ data: { message: 'Success' } }));
  }
);

export const orderHandlers = [
  getOrderCheckHandler,
  getMenuByCategory,
  postCreateOrderHandler,
  getDetailOrderHandler,
  changeOrderStateHandler,
];
