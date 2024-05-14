import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from "../components/input";
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        type: {
            control: {
                type: 'text',
            },
        },
        placeholder: {
            control: {
                type: 'text',
            },
        },
        value: {
            control: {
                type: 'text',
            },
        },
        label: {
            control: {
                type: 'text',
            },
        },
        onChange: { action: 'changed' },
        
    },
    parameters: {
        docs: {
            description: {
                component: 'Input component for forms with support for different sizes and custom labels.'
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'small',
        type: 'text',
        placeholder: 'input',
        value: '',
        label: 'Small Input',
        onChange: action('changed'),
    },
};

export const Large : Story = {
    args: {
        size: 'large',
        type: 'text',
        placeholder: 'input',
        value: '',
        label: 'Large Input',
        onChange: action('changed'),
    },
};
