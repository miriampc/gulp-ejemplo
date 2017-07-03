const express = require('express');
const app = express();
app.use("/",express.static('public'));

app.listen(3000,_=>{
    console.log("Server listening on 3000");
});