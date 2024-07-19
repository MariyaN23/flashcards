import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
    label: 'test',
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'test',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'test',
  },
}
