import { Db } from 'mongodb';
import { Post } from './types';

export const resolvers = {
  posts: async (_: Partial<Post>, context: any) => {
    const db: Db = await context();
    return db.collection('posts').find().toArray();
  },
  post: async ({ id }: Pick<Post, 'id'>, context: any) => {
    const db: Db = await context();
    return db.collection('posts').findOne({ id });
  },
  editPost: async (
    { id, title, content }: Pick<Post, 'id' | 'title' | 'content'>,
    context: any
  ) => {
    const db: Db = await context();
    return db
      .collection('posts')
      .findOneAndUpdate(
        { id },
        {
          $set: {
            title,
            content,
            dateModified: Date.now().toString(10),
            draft: ''
          }
        },
        { returnDocument: 'after' }
      )
      .then((v) => v.value);
  },
  savePost: async (
    { title, content }: Pick<Post, 'title' | 'content'>,
    context: any
  ) => {
    const db: Db = await context();
    let id: number;
    await db
      .collection('users')
      .find()
      .toArray()
      .then((v) => {
        id = v.length + 1;
      });
    return db.collection('posts').insertOne({
      id,
      title,
      content,
      dateCreated: Date.now().toString(10),
      dateModified: ''
    });
  },
  saveDraft: async (
    { id, title, draft }: Pick<Post, 'id' | 'title' | 'draft'>,
    context: any
  ) => {
    const db: Db = await context();
    if (id) {
      return db
        .collection('posts')
        .findOneAndUpdate(
          { id },
          { $set: { title, dateModified: Date.now().toString(10), draft } },
          { returnDocument: 'after' }
        )
        .then((v) => v.value);
    }
    let newId: number;
    await db
      .collection('users')
      .find()
      .toArray()
      .then((v) => {
        newId = v.length + 1;
      });
    return db.collection('posts').insertOne({
      newId,
      title,
      dateModified: Date.now().toString(10),
      draft
    });
  }
};
