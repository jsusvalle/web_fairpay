import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getMyTablesHandler } from 'mock_services';

import Home from './home';

export default {
  component: Home,
  title: 'Components/pages/Home',
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = args => <Home {...args} />;

export const SuccessMock = Template.bind({});
SuccessMock.parameters = {
  msw: {
    handlers: [getMyTablesHandler],
  },
};
