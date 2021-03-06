const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Allow cross-origin request
app.use(cors());

mongoose.connect(process.env.DB_CONNECT_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to database'.cyan.bold);
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server Running On Port ${PORT}`.yellow.bold)
);
