const express = require('express');

const actionRouter = require('./Routers/actionsRouter');
const projectRouter = require('./Routers/projectRouter');

const server = express();

server.use(express.json());
// server.use('/actions',actionRouter);
// server.use('/projects',projectRouter);

server.get('/', (req, res)=>{
    res.send('api is running')
})


server.listen(5000, () => console.log('\n== API Running on port 5000 ==\n'));