import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryWrapper } from 'utils/constants/storyWrapper';
import { PostCard } from '.';

export default {
  title: 'Components/Posts/Post',
  component: PostCard,
  argTypes: {
    post: {
      id: 1,
      title: 'Test Post',
      content: 'This is a test to make sure that this works',
      dateCreated: Date.now().toString(),
      dateModified: ''
    }
  }
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <StoryWrapper className='content'>
    <PostCard {...args} />
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
