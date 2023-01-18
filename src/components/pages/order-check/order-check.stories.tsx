import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getOrderCheckHandler, changeOrderStateHandler } from 'mock_services';

import OrderCheck from './order-check';

export default {
  component: OrderCheck,
  title: 'Components/pages/OrderCheck',
} as ComponentMeta<typeof OrderCheck>;

const Template: ComponentStory<typeof OrderCheck> = args => (
  <OrderCheck {...args} />
);

export const SuccessMock = Template.bind({});
SuccessMock.parameters = {
  msw: {
    handlers: [getOrderCheckHandler, changeOrderStateHandler],
  },
};
