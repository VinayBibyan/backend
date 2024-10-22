const express = require('express');
const router = express.Router();
const person = require('../model/person');

router.post('/', async(req, res)=>{
    try {
        const data = req.body;
        const newPerson = new person(data);
        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})
router.get('/', async(req, res)=>{
    try {
        const data = await person.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
router.get('/:workType', async(req, res)=>{
    try {
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager' || workType == 'owner' || workType == 'cleaner'){
            const data = await person.find({work: workType});
            console.log("data fetched");
            res.status(200).json(data);
        }else{
            console.log(error);
            res.status(404).json({error: 'error found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})
router.put('/:id', async(req, res)=>{
    try {
        const personId = req.params.id; //extract id from params
        const updatedData = req.body; //extract updated data given by user
        const response = await person.findByIdAndUpdate(personId, updatedData,{ //here var response is the updated data in the db
            new: true, //run updated doc
            runValidator: true, //run mongoose validation
        })
        if(!response){
            return res.status(404).json({error})
        }
        console.log('data updated');
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})
router.delete('/:id', async(req, res)=>{
    try {
        const id = req.params.id; //extract id from url given by the user
        const response = await person.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({error})
        }
        console.log("data deleted")
        res.status(200).json({message: 'person deleted successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

module.exports = router;