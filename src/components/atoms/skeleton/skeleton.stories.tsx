import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './skeleton';

export default {
  component: Skeleton,
  title: 'Components/atoms/Skeleton',
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => (
  <Skeleton {...args}>Hello</Skeleton>
);

export const Default = Template.bind({});
