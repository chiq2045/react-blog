import { buildSchema } from 'graphql';

export const schema = buildSchema(`
	type User {
		id: ID!
		name: String
		username: String!
		email: String!
		dateJoined: String!
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
		users: [User!]!
		user(id: Int!): User!
  }

	type Mutation {
		editPost(id: Int!, title: String!, content: String!): Post!
		editUser(id: Int!, name: String, username: String!, email: String!): User!
		addPost(title: String!, content: String!): Post!
		addUser(name: String, email: String!, username: String!): User!
	}
`);


