const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

// urlencoded add to extract data from
app.use(express.urlencoded());

// routes
app.use('/', require('./routes'));

app.listen(port, (error) => {
    if(error){
        console.log("error in listning "+error);
    }
    console.log('Server is up and listening on port', port);
});