
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRoutes'); 
require('./Models/db');

const PORT = process.env.PORT || 8080; 

const app = express();


app.use(bodyParser.json());
app.use(cors());


app.get('/ping', (req, res) => {
    res.send('PONG');
});


app.use('/rbac', AuthRouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
