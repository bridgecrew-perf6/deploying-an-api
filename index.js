// require('dotenv').config()
// at the top of index.js

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000

console.log('Deploying an API');
console.log(__dirname);

// environment variable - 
// variable specific to the machine program is running on
console.log(process.env.LADY); 
console.log(process.env.FOO);
console.log(process.env.ALWAYS);
console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use(express.json());

// fake API, routers
app.use('/api/*', (_, res) => {
    res.json({ data: 'Deploying an API' })
})

app.listen(port, () => {
    console.log(`Listenining on ${port}`)
});