import Main from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'Decription basic'
}

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />
