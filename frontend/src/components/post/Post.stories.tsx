import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryWrapper } from 'utils/constants/storyWrapper';
import { Post } from '.';

export default {
  title: 'Components/Posts/Post',
  component: Post,
  argTypes: {
    post: {
      id: 1,
      title: 'Test Post',
      content: 'This is a test to make sure that this works',
      dateCreated: Date.now().toString(),
      dateModified: ''
    }
  }
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => (
  <StoryWrapper className='content'>
    <Post {...args} />
  </StoryWrapper>
);

export const NewPost = Template.bind({});
NewPost.args = {
  post: {
    id: 1,
    title: 'Test Post',
    content: 'This is a test to make sure that this works',
    dateCreated: Date.now().toString(),
    dateModified: ''
  }
};
