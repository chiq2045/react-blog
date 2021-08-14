import { Db } from 'mongodb';

export const resolvers = {
	posts: async (_: any, context:any) => {
		const db: Db = await context();
		return db.collection('posts').find().toArray();
	},
	post: async ({ id }: { id: number }, context: any) => {
		const db: Db = await context();
		return db.collection('posts').findOne({ id });
	},
	hello: () => 'Hello World'
};
