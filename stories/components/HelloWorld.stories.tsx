import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import HelloWorld, { HelloWorldProps } from '../../src/components/HelloWorld';

export default {
  title: 'components/HelloWorld',
  component: HelloWorld
} as Meta;

const Template: Story<HelloWorldProps> = (args) => <HelloWorld {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  value: 'My first storybook.'
};
