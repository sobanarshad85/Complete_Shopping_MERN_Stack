const express = require('express')
const router = express.Router();

//Item Model
const Item = require('../../model/Item');

//route     GET api/items
//desc      Get All Items
//access    Public
router.get('/', async (req, res) => {
    try {
        const item = await Item.find().sort({ date: -1 });
        res.send(item);
    } catch (error) {
        console.log(error)
    }
})

//route     POST api/items
//desc      Create An Items
//access    Public
router.post('/', async (req, res) => {
    try {
        const item = new Item();
        item.name = req.body.name;
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error)
    }
})

//route     DELETE api/items
//desc      Delete an Items
//access    Public
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.deleteOne({ _id: req.params.id })

        res.send({ succes: true })
    } catch (error) {
        console.log(error)
    }
})

//Developed by Soban Arshad
//sobanarshad85@gmail.com
//+92 303 4645 060
//https://www.facebook.com/sobanarshad85
//https://www.twitter.com/sobanarshad85
//https://www.github.com/sobanarshad85
//https://www.linkedin.com/in/sobanarshad85

module.exports = router;