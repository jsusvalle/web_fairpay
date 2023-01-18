import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getDetailOrderHandler, changeOrderStateHandler } from 'mock_services';

import DetailOrder from './detail-order';

export default {
  component: DetailOrder,
  title: 'Components/pages/DetailOrder',
} as ComponentMeta<typeof DetailOrder>;

const Template: ComponentStory<typeof DetailOrder> = args => (
  <DetailOrder {...args} />
);

export const SuccessMock = Template.bind({});
SuccessMock.parameters = {
  msw: {
    handlers: [getDetailOrderHandler],
  },
};
