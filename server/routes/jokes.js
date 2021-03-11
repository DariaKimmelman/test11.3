require('../data/database');

const express = require('express');
const jokeModel = require('../models/joke');
const router = express.Router();



router.get('/', (req, res) => {
    jokeModel.find({}, (err, documents) => {
        if(err ){
            res.status(500).send('error')
        }  
        else{
        const num =Math.floor(Math.random() * documents.length)
         res.status(200).send(documents[num]);
        }
    })

});
router.get('/GiveMeTwo', (req, res) => {
    jokeModel.find({}, (err, documents) => {
        if(err ){
            res.status(500).send('error')
        }  
        else{
            const num =Math.floor(Math.random() * documents.length)
            let num2 = Math.floor(Math.random() * documents.length)
            while(num === num2){
                 num2 =  Math.floor(Math.random() * documents.length)
            }
             res.status(200).send([documents[num], documents[num2]]);
            }
    })

});

router.post('/add', (req, res) => {
    const joke = new jokeModel(req.body);
    joke.save().then(() => res.send("success"));
});


module.exports = router;
