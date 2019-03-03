var express = require('express');

const notes = require('../controllers/api.controller.js');
const notes2 = require('../controllers/acc.controller.js');

const notes3 = require('../controllers/ph.controller.js');

const notes4 = require('../controllers/tl.controller.js');

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

    
    
    // Create a new Note
    router.post('/ph', notes3.create);

    // Retrieve all Notes
    router.get('/ph', notes3.findAll);

    router.get('/ph/:noteId', notes3.findOne);

    // Update a Note with noteId
    router.put('/ph/:noteId', notes3.update);


    router.delete('/ph/:noteId', notes3.delete);

    // Create a new Note
    router.post('/ph', notes3.create);

    // Retrieve all Notes
    router.get('/tl', notes4.findAll);

    router.get('/tl/:noteId', notes4.findOne);

    // Update a Note with noteId
    router.put('/tl/:noteId', notes4.update);


    router.delete('/tl/:noteId', notes4.delete);




module.exports = router;

