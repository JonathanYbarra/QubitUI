import { Label } from './../../components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/Label',
    component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: 'My Label',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    text: 'All Caps',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Secondary',
    color: 'Secondary',
    size: "normal"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    text: 'Tertiary',
    color: 'Tertiary',
    size: "normal",
}