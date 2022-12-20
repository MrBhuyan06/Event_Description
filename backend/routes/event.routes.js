const express=require('express');
const { home, addEvent, getEvent, editEvent, deleteEvent } = require('../controller/desc.controller.js');

const router=express.Router();


router.get('/',home)

router.post('/addEvent',addEvent)
router.get('/getEvent',getEvent)
router.put('/updateEvent/:id',editEvent)
router.delete('/deleteEvent/:id',deleteEvent)

module.exports=router