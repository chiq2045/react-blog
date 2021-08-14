import { buildSchema } from 'graphql';

export const schema = buildSchema(`
	type User {
		id: ID!
		name: String
		username: String!
		email: String!
		password: String!
		posts: [Post!]
	}

	type Post {
		id: ID!
		title: String!
		content: String!
		dateCreated: String!
		dateModified: String
	}

  type Query {
	  hello: String
		posts: [Post!]!
		post(id: Int!): Post!
  }
`);


