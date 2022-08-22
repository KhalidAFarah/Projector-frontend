import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Build } from '../components/Destiny';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'A destiny build',
  component: Build,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Build>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Build> = (args) => <Build {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  image: '/images/lazer_tag_guardian.png',
  name: 'Lazer tag'
};

