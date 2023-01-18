import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  component: Button,
  title: 'Components/atoms/Button',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Hello</Button>
);

export const Default = Template.bind({});
