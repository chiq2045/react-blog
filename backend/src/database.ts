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
    await database.collection('users').insertMany([
      {
        id: 1,
        name: 'Loren Mackney',
        username: 'lmackney0',
        email: 'lmackney0@360.cn',
        dateJoined: '1619304919000',
        posts: []
      },
      {
        id: 2,
        name: 'Leonardo Sackur',
        username: 'lsackur1',
        email: 'lsackur1@msu.edu',
        dateJoined: '1618467494000',
        posts: []
      },
      {
        id: 3,
        name: 'Ulla Deaton',
        username: 'udeaton2',
        email: 'udeaton2@reuters.com',
        dateJoined: '1599560794000',
        posts: []
      },
      {
        id: 4,
        name: 'Gardener Skelington',
        username: 'gskelington3',
        email: 'gskelington3@globo.com',
        dateJoined: '1621795899000',
        posts: []
      },
      {
        id: 5,
        name: 'Pegeen Tapsfield',
        username: 'ptapsfield4',
        email: 'ptapsfield4@weibo.com',
        dateJoined: '1600656264000',
        posts: []
      }
    ]);
    await database.collection('posts').insertMany([
      {
        id: 1,
        title: 'The first ever post',
        content:
          'This has been a project that I have been trying to get off theground for over half a year.',
        dateCreated: `${Date.UTC(2021, 8, 13, 0, 0, 0)}`,
        dateModified: ''
      },
      {
        id: 2,
        title: 'This is a test post',
        content:
          'I struggle to actually finish projects that I start, so this time I will try and get it done',
        dateCreated: `${Date.UTC(2021, 8, 14, 0, 0, 0)}`,
        dateModified: ''
      },
      {
        id: 3,
        title: 'Automation Specialist I',
        content:
          'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        dateModified: '',
        dateCreated: '1614601545000'
      },
      {
        id: 4,
        title: 'Paralegal',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        dateModified: '',
        dateCreated: '1604674203000'
      },
      {
        id: 5,
        title: 'General Manager',
        content:
          'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        dateModified: '',
        dateCreated: '1620444694000'
      },
      {
        id: 6,
        title: 'Programmer I',
        content:
          'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        dateModified: '',
        dateCreated: '1605449854000'
      },
      {
        id: 7,
        title: 'Account Executive',
        content:
          'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        dateModified: '',
        dateCreated: '1602372735000'
      },
      {
        id: 8,
        title: 'Nuclear Power Engineer',
        content:
          'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        dateModified: '',
        dateCreated: '1616510416000'
      },
      {
        id: 9,
        title: 'Systems Administrator II',
        content:
          'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        dateModified: '',
        dateCreated: '1614143390000'
      },
      {
        id: 10,
        title: 'Internal Auditor',
        content:
          'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        dateModified: '',
        dateCreated: '1622083249000'
      },
      {
        id: 11,
        title: 'Director of Sales',
        content:
          'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        dateModified: '',
        dateCreated: '1607783297000'
      },
      {
        id: 12,
        title: 'Systems Administrator IV',
        content:
          'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        dateModified: '',
        dateCreated: '1606277899000'
      }
    ]);
  }

  return database;
};

export { startDatabase };
