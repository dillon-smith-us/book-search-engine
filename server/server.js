const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');


// const app = express();
// const PORT = process.env.PORT || 3001;

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });

// //integrate apollo server with express app
// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   // set static folder
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// // comment this out at end of mern development

// app.get('*',  (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// })

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`🌍 Now listening on localhost:${PORT}`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });

async function startApolloServer() {
  const app = express();
  const PORT = process.env.PORT || 3001;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
    ,
  });
  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Additional middleware can be mounted at this point to run before Apollo.
  if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  

  // Mount Apollo middleware here.
  app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  })
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}