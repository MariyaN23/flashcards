import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Check-box',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
