const express = require('express');

const newRouter = express.Router();

newRouter.get('/candy', function(request, response){
    response.send("I want candy!");
  });

module.exports = newRouter;  