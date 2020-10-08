const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("I know how to open node... yay!!!");
});

app.listen(4200, () => console.log('listening on port 4200'));


