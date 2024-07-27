import type { Preview } from '@storybook/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'

// @ts-ignore
import { themes } from '@storybook/theming'
import { withRouter } from 'storybook-addon-remix-react-router'

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      docs: {
        theme: themes.dark,
      },
      backgrounds: {
        default: 'dark',
        values: [
          {
            name: 'dark',
            value: '#000000',
          },
        ],
      },
    },
  },
}

export default preview
