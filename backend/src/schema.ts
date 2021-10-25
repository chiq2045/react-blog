import { buildSchema } from 'graphql';

export const schema = buildSchema(`
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

	type Mutation {
		editPost(id: Int!, title: String!, content: String!): Post!
		addPost(title: String!, content: String!): Post!
	}
`);


