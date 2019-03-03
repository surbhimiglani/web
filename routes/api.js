var express = require('express');

const notes = require('../controllers/api.controller.js');
const notes2 = require('../controllers/acc.controller.js');

var router = express.Router();



    // Create a new Note
    router.post('/api', notes.create);

    // Retrieve all Notes
    router.get('/api', notes.findAll);

    router.get('/api/:noteId', notes.findOne);

    // Update a Note with noteId
    router.put('/api/:noteId', notes.update);


    router.delete('/api/:noteId', notes.delete);

    
    // Create a new Note
    router.post('/acc', notes2.create);

    // Retrieve all Notes
    router.get('/acc', notes2.findAll);

    router.get('/acc/:noteId', notes2.findOne);

    // Update a Note with noteId
    router.put('/acc/:noteId', notes2.update);


    router.delete('/acc/:noteId', notes2.delete);


module.exports = router;

