import Koa from 'koa';
import logger from 'koa-logger';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import { schema } from './schema';
import { resolvers } from './resolvers';

const app = new Koa();

app.use(logger());
app.use(mount('/graphql', graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: true
})));

export {app};
