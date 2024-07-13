import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Input',
    variant: 'default',
  },
}

export const DefaultError: Story = {
  args: {
    error: true,
    placeholder: 'Input',
    variant: 'default',
  },
}

export const DefaultDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    variant: 'default',
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Input search',
    variant: 'search',
  },
}

export const SearchError: Story = {
  args: {
    error: true,
    placeholder: 'Input search',
    variant: 'search',
  },
}

export const SearchDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input search',
    variant: 'search',
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Input',
    variant: 'withIcon',
  },
}

export const WithIconError: Story = {
  args: {
    error: true,
    placeholder: 'Input',
    variant: 'withIcon',
  },
}

export const WithIconDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    variant: 'withIcon',
  },
}
