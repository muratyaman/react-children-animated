import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ReactChildrenAnimated, ReactChildrenAnimatedProps } from '..';

export default {
  title: 'Examples/ReactChildrenAnimated',
  component: ReactChildrenAnimated,
  argTypes: {
    delay: {
      name: 'delay',
      description: 'delay X milliseconds'
    }
  },
} as Meta;

const styleGray  = { color: 'gray' };
const styleRed   = { color: 'red' };
const styleBlue  = { color: 'blue' };
const styleGreen = { color: 'green' };

const Template1: Story<ReactChildrenAnimatedProps> = (args) => (
  <ReactChildrenAnimated {...args}>
    <p style={styleRed}>[sentence1: Maecenas accumsan dolor at mi finibus dictum.]</p>
    <p style={styleBlue}>[sentence2: Donec imperdiet efficitur arcu, in facilisis tellus.]</p>
    <p style={styleGreen}>[sentence3: Pellentesque malesuada magna vel purus ornare, eget laoreet justo faucibus.]</p>
  </ReactChildrenAnimated>
);

const Template2: Story<ReactChildrenAnimatedProps> = (args) => (
  <ReactChildrenAnimated {...args}>
    <span style={styleRed}>[phrase1: Etiam a pulvinar odio]</span>
    <span style={styleBlue}>[phrase2: Suspendisse potenti]</span>
    <span style={styleGreen}>[phrase3: Praesent id faucibus est]</span>
  </ReactChildrenAnimated>
);

export const Sample1 = Template1.bind({});
Sample1.args = {
  
};
Sample1.decorators = [(Story) => (
  <div>
    <p>Using ReactChildrenAnimated among some paragraphs to show different sentences.</p>
    <p style={styleGray}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id velit metus. Nunc in dignissim dui.</p>
    <p style={styleGray}>Aenean sed malesuada magna. Praesent a erat vel dolor sollicitudin posuere. In interdum, metus consequat faucibus interdum, mi orci efficitur sapien, vitae molestie tellus arcu at turpis. </p>
    <Story/>
    <p style={styleGray}>Nunc viverra et nisl ut venenatis. Vestibulum ornare eros vitae nulla tristique rutrum. Quisque sollicitudin turpis vitae odio malesuada, et accumsan orci porttitor. Donec neque lectus, tincidunt quis pulvinar vitae, fringilla vel leo.</p>
  </div>
)];

export const Sample2 = Template2.bind({});
Sample2.args = {

};
Sample2.decorators = [(Story) => (
  <div>
    <p>Using ReactChildrenAnimated in a paragraph to show different phrases:</p>
    <p>
      <span style={styleGray}> Aliquam id augue ut sem sodales facilisis. </span>
      <Story/>
      <span style={styleGray}> Sed blandit purus mi, quis efficitur ex rutrum at. </span>
    </p>
  </div>
)];