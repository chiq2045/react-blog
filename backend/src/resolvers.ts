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
  users: async (_: any, context: any) => {
    const db: Db = await context();
    return db.collection('users').find().toArray();
  },
  user: async ({ id }: { id: number }, context: any) => {
    const db: Db = await context();
    return db.collection('users').findOne({ id });
  },
  editUser: async (
    {
      id,
      name,
      username,
      email
    }: { id: number; name: string; username: string; email: string },
    context: any
  ) => {
    const db: Db = await context();
    return db
      .collection('users')
      .findOneAndUpdate(
        { id },
        { $set: { name, username, email } },
        { returnDocument: 'after' }
      )
      .then((v) => v.value);
  },
  addUser: async (
    {
      name,
      username,
      email
    }: { name?: string; username: string; email: string },
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
    return db.collection('users').insertOne({
      id,
      name: name || '',
      username,
      email,
      dateJoined: Date.now().toString(10),
      posts: []
    });
  },
  hello: () => 'Hello World'
};
