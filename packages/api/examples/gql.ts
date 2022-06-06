import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import api, { http } from '@rbui/api';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

api<http.HttpInterface>(http.withHTTP())
  .request(graphqlHTTP({ schema, graphiql: true }) as http.HttpHandler)
  .listen(7000);

// http://127.0.0.1:7000/?query={hello}
