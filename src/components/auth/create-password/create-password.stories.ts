import type { Meta, StoryObj } from '@storybook/react'

import { CreatePassword } from './create-password'

const meta = {
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Auth/CreatePassword',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
