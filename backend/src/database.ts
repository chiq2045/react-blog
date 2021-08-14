import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient, Db } from 'mongodb';

let database: Db = null;

const startDatabase = async () => {
  const mongo = await MongoMemoryServer.create();
  const mongodbUrl = mongo.getUri();
  const client = new MongoClient(mongodbUrl);
  if (!database) {
    await client.connect();
    database = client.db();
    await database.collection('posts').insertMany([
      {
        id: 1,
        title: 'The first ever post',
        content:
          'This has been a project that I have been trying to get off theground for over half a year.',
        dateCreated: `${Date.now()}`,
        dateModified: ''
      }
    ]);
  }

  return database;
};

export {
  startDatabase
};
