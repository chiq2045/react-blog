import { MongoClient, Db } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

const {
  DB_PREFIX: prefix,
  DB_USER: user,
  DB_PASS: password,
  DB_NAME: name,
  DB_OPTIONS: options
} = process.env;

let database: Db = null;

export const db = async () => {
  const client = new MongoClient(
    `${prefix}${user}:${encodeURIComponent(password)}@${name}${options}`
  );
  await client.connect();
  return client.db();
};

export const devDb = async () => {
  const mongo = await MongoMemoryServer.create();
  const mongodbUrl = mongo.getUri();
  const client = new MongoClient(mongodbUrl);

  if (!database) {
    await client.connect();
    database = client.db();
    await database.collection('posts').insertMany([
      {
        id: 1,
        title: 'Lorem Ipsum',
        content: `<p>
          Massa mollis mollis phasellus vulputate vel imperdiet lorem viverra curabitur adipiscing. Sollicitudin rutrum aliquam accumsan iaculis. Tristique viverra primis eget nam felis elit. Non elementum et facilisis! Nibh nunc diam vivamus nostra et magna eros. Conubia purus sagittis facilisis fringilla mauris nascetur eros per nam iaculis. Taciti nibh enim in vehicula cum elementum tincidunt magnis augue. Fermentum adipiscing primis aptent suscipit nulla porta. Quis interdum, vel litora. Id aliquam mi vestibulum ad fames ut sociis donec congue. Ac erat tempus feugiat odio congue nascetur netus euismod porta. Laoreet praesent est, volutpat venenatis feugiat nisi?
          </p>
          `,
        draft: '',
        dateCreated: Date.now().toString(),
        dateModified: '',
        isDraft: false
      },
      {
        id: 1,
        title: 'Lorem Ipsum',
        content: `<p>
          Consectetur eleifend imperdiet posuere facilisis ac sodales pellentesque lacus. Eleifend fermentum convallis mauris ad litora fusce per! Cras conubia nunc metus diam pharetra adipiscing interdum venenatis quam sodales sem vulputate. Proin natoque curae; porttitor. Convallis curae; lorem dolor, sem integer! Ante primis nisl erat. Ac hendrerit habitasse blandit sociosqu adipiscing eleifend etiam platea felis. Purus pellentesque lacus enim pulvinar platea orci phasellus turpis.
          </p>
          <p>
          Porta felis nascetur, tristique euismod sodales vestibulum interdum? Mauris tempor laoreet faucibus parturient proin lectus scelerisque donec vehicula eu nisi. Eros id libero fames aptent purus velit curabitur dolor diam penatibus placerat. Malesuada tempus fusce montes suspendisse pellentesque vitae cubilia tellus, neque nostra. Vitae volutpat platea consequat parturient elit. Ultricies condimentum dignissim blandit condimentum tempus justo aliquet libero; ante potenti cum. Non urna libero libero etiam aenean neque fringilla. Suspendisse vestibulum cursus etiam lorem massa euismod id. Mollis pulvinar consectetur rhoncus eu natoque vehicula dis, adipiscing justo. Tellus conubia vulputate vestibulum molestie! Himenaeos?
          </p>
          `,
        draft: '',
        dateCreated: Date.now().toString(),
        dateModified: '',
        isDraft: false
      },
      {
        id: 1,
        title: 'Lorem Ipsum',
        content: `<h1>Massa</h1>
        <p>
          Massa mollis mollis phasellus vulputate vel imperdiet lorem viverra curabitur adipiscing. Sollicitudin rutrum aliquam accumsan iaculis. Tristique viverra primis eget nam felis elit. Non elementum et facilisis! Nibh nunc diam vivamus nostra et magna eros. Conubia purus sagittis facilisis fringilla mauris nascetur eros per nam iaculis. Taciti nibh enim in vehicula cum elementum tincidunt magnis augue. Fermentum adipiscing primis aptent suscipit nulla porta. Quis interdum, vel litora. Id aliquam mi vestibulum ad fames ut sociis donec congue. Ac erat tempus feugiat odio congue nascetur netus euismod porta. Laoreet praesent est, volutpat venenatis feugiat nisi?
          </p>
          <h2>Imperdiet</h2>
          <p>
          Imperdiet sapien lacinia potenti vehicula ut praesent taciti nec. Ullamcorper, iaculis id euismod. Egestas integer nulla taciti molestie. Nec euismod feugiat lorem hendrerit auctor. Fringilla taciti ac placerat mus libero magna sagittis elit quam feugiat amet. Risus praesent, per amet posuere. Dictumst elementum orci ultricies litora morbi luctus maecenas himenaeos quisque cum. Arcu vestibulum id bibendum vulputate. Mauris velit dui vestibulum etiam est ultricies fames. Augue cursus torquent leo! Tortor fermentum sollicitudin malesuada arcu aenean conubia erat. Sollicitudin pharetra sollicitudin, magnis blandit. Quisque cursus, inceptos vivamus conubia.
          </p>
          <p>
          Magna orci suscipit etiam vulputate. Erat, orci lectus hac leo lectus fames parturient mattis congue! Dignissim ligula id lectus leo. Congue, ac hendrerit fringilla. Sem diam condimentum ridiculus. Bibendum quam dignissim tempor libero adipiscing quis nascetur. Arcu euismod cubilia fermentum iaculis nulla morbi rutrum. Malesuada ultrices, fringilla taciti. Himenaeos montes ac nulla odio at commodo dictumst ligula tellus habitant amet. Risus vitae dignissim libero parturient posuere lobortis velit mauris; at convallis. Commodo bibendum diam dignissim dolor platea sed. Laoreet conubia.
          </p>
          `,
        draft: `
          <h1>Massa</h1>
        <p>
          Massa mollis mollis phasellus vulputate vel imperdiet lorem viverra curabitur adipiscing. Sollicitudin rutrum aliquam accumsan iaculis. Tristique viverra primis eget nam felis elit. Non elementum et facilisis! Nibh nunc diam vivamus nostra et magna eros. Conubia purus sagittis facilisis fringilla mauris nascetur eros per nam iaculis. Taciti nibh enim in vehicula cum elementum tincidunt magnis augue. Fermentum adipiscing primis aptent suscipit nulla porta. Quis interdum, vel litora. Id aliquam mi vestibulum ad fames ut sociis donec congue. Ac erat tempus feugiat odio congue nascetur netus euismod porta. Laoreet praesent est, volutpat venenatis feugiat nisi?
          </p>
          <h2>Imperdiet</h2>
          <p>
          Imperdiet sapien lacinia potenti vehicula ut praesent taciti nec. Ullamcorper, iaculis id euismod. Egestas integer nulla taciti molestie. Nec euismod feugiat lorem hendrerit auctor. Fringilla taciti ac placerat mus libero magna sagittis elit quam feugiat amet. Risus praesent, per amet posuere. Dictumst elementum orci ultricies litora morbi luctus maecenas himenaeos quisque cum. Arcu vestibulum id bibendum vulputate. Mauris velit dui vestibulum etiam est ultricies fames. Augue cursus torquent leo! Tortor fermentum sollicitudin malesuada arcu aenean conubia erat. Sollicitudin pharetra sollicitudin, magnis blandit. Quisque cursus, inceptos vivamus conubia.
          </p>
          <p>
<h1>Porta</h1>
          <p>
          Porta felis nascetur, tristique euismod sodales vestibulum interdum? Mauris tempor laoreet faucibus parturient proin lectus scelerisque donec vehicula eu nisi. Eros id libero fames aptent purus velit curabitur dolor diam penatibus placerat. Malesuada tempus fusce montes suspendisse pellentesque vitae cubilia tellus, neque nostra. Vitae volutpat platea consequat parturient elit. Ultricies condimentum dignissim blandit condimentum tempus justo aliquet libero; ante potenti cum. Non urna libero libero etiam aenean neque fringilla. Suspendisse vestibulum cursus etiam lorem massa euismod id. Mollis pulvinar consectetur rhoncus eu natoque vehicula dis, adipiscing justo. Tellus conubia vulputate vestibulum molestie! Himenaeos?
          </p>
          `,
        dateCreated: Date.now().toString(),
        dateModified: Date.now().toString(),
        isDraft: true
      }
    ]);
  }

  return database;
};
