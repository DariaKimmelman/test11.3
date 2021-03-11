const express = require('express');
const cors = require('cors');
const jokesRoutes = require('./routes/jokes');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());



app.use('/', jokesRoutes);



app.listen(3001, () => console.log('server is running..'))