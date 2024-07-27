import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './personal-information'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
