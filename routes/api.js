var express = require('express');

const notes = require('../controllers/api.controller.js');

var router = express.Router();



    // Create a new Note
    router.post('/api', notes.create);

    // Retrieve all Notes
    router.get('/api', notes.findAll);

    router.get('/api/:noteId', notes.findOne);

    // Update a Note with noteId
    router.put('/api/:noteId', notes.update);


    router.delete('/api/:noteId', notes.delete);

module.exports = router;

