const express = require('express');
const app = express();

app.get('/' , (req,res)=>{
    res.send('<h1 align= center > Welcome to my Docker Nodejs application </h1>');
});

app.listen(3000, function(){
      console.log("app listening on port 3000");
})
