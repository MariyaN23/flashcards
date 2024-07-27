import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Input',
  },
}

export const DefaultError: Story = {
  args: {
    errorMessage: 'Error',
    placeholder: 'Input',
  },
}

export const DefaultDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Input search',
    type: 'search',
  },
}

export const SearchError: Story = {
  args: {
    errorMessage: 'Error',
    placeholder: 'Input search',
    type: 'search',
  },
}

export const SearchDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input search',
    type: 'search',
  },
}

export const Password: Story = {
  args: {
    placeholder: 'Input',
    type: 'password',
    variant: 'withIcon',
  },
}

export const PasswordError: Story = {
  args: {
    errorMessage: 'Error',
    placeholder: 'Input',
    type: 'password',
    variant: 'withIcon',
  },
}

export const PasswordDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    type: 'password',
    variant: 'withIcon',
  },
}
