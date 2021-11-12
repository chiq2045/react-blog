import { buildSchema } from 'graphql';

export const schema = buildSchema(`
	type Post {
		id: ID!
		title: String!
		content: String!
		dateCreated: String!
		dateModified: String
		draft: String
	}

  type Query {
	  hello: String
		posts: [Post!]!
		post(id: Int!): Post!
  }

	type Mutation {
		editPost(id: Int!, title: String!, content: String!, draft: String!): Post!
		savePost(title: String!, content: String!): Post!
		saveDraft(title: String!, draft: String!): Post!
	}
`);


