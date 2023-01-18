import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  getMenuByCategory,
  getAvailableTablesHandler,
  postCreateOrderHandler,
} from 'mock_services';

import NewOrder from './new-order';

export default {
  component: NewOrder,
  title: 'Components/pages/NewOrder',
} as ComponentMeta<typeof NewOrder>;

const Template: ComponentStory<typeof NewOrder> = args => (
  <NewOrder {...args} />
);

export const SuccessMock = Template.bind({});
SuccessMock.parameters = {
  msw: {
    handlers: [
      getMenuByCategory,
      getAvailableTablesHandler,
      postCreateOrderHandler,
    ],
  },
};
