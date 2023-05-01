const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schema/schema.js')
const app = express();
const PORT = process.env.PORT || 3500;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));