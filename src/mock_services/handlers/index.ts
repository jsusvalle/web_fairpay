import { tablesHandlers } from './tablesHandlers';
import { orderHandlers } from './OrderHandlers';

export const handlers = [...tablesHandlers, ...orderHandlers];

export * from './OrderHandlers';
export * from './tablesHandlers';
