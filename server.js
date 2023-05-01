const express = require('express');
const graphHTTP = require('express-graphql');
const app = express();
const PORT = process.env.PORT || 3500;

app.use('/graphql', graphHTTP({}))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));