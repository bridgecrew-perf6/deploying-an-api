// require('dotenv').config()
// at the top of index.js

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000
const path = require('path');
const { send } = require('process');

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
app.use(express.static(path.join(__dirname, 'client/build')));

// fake API, routers
app.use('/api/*', (_, res) => {
    res.json({ data: 'Deploying an API' })
});

app.use('*', (_, res) => {
    // send back index.html
    res.sendFile(path.join(__dirname, 'cllient/build', 'index.html'))
})

app.listen(port, () => {
    console.log(`Listenining on ${port}`)
});