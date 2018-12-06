const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');

const items = require('./routes/api/items');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = 'mongodb://soban:soban1@ds125684.mlab.com:25684/mern_shopping'

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);

//Serve static assests if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port: ' + port));