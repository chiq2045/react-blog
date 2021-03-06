/* eslint-disable import/first */
import { config } from 'dotenv';
config();
import Koa from 'koa';
import logger from 'koa-logger';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from '@koa/cors';
import { schema } from './schema';
import { resolvers } from './resolvers';
import { db, devDb } from './database';


const app = new Koa();
const context = async () => await db();
const devContext = async () => await devDb();

app.use(logger());
app.use(cors());
app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
      context
    })
  )
);
app.use(
  mount(
    '/dev',
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
      context: devContext
    })
  )
);

export { app };
