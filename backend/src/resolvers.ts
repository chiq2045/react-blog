import { Db } from 'mongodb';

export const resolvers = {
  posts: async (_: any, context: any) => {
    const db: Db = await context();
    return db.collection('posts').find().toArray();
  },
  post: async ({ id }: { id: number }, context: any) => {
    const db: Db = await context();
    return db.collection('posts').findOne({ id });
  },
  editPost: async (
    { id, title, content }: { id: number; title: string; content: string },
    context: any
  ) => {
    const db: Db = await context();
    return db
      .collection('posts')
      .findOneAndUpdate(
        { id },
        { $set: { title, content, dateModified: Date.now().toString(10) } },
        { returnDocument: 'after' }
      )
      .then((v) => v.value);
  },
  addPost: async (
    { title, content }: { title: string; content: string },
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
};
