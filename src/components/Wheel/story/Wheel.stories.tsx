import type { Meta, StoryObj } from '@storybook/react';

import Wheel from '../main/Wheel';

const meta: any = {
    title: 'wheel-of-react/wheel',
    component: Wheel,

    tags: ['autodocs'],
} satisfies Meta<typeof Wheel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        //label: 'Wheel 1',
    },
};