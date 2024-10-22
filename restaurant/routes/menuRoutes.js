const express = require('express');
const router = express.Router();
const menu = require('../model/menu')

router.post('/', async(req, res)=>{
    try {
        const data = req.body;
        const newMenu = new menu(data);
        const savedMenu = await newMenu.save();
        res.status(200).json(savedMenu);
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})
router.get('/', async(req, res)=>{
    try {
        const data = await menu.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
router.get('/:flavour', async(req, res)=>{
    try {
        const flavour = req.params.flavour;
        if(flavour == 'sweet' || flavour == 'spicy' || flavour == 'sour'){
            const data = await menu.find({taste: flavour});
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
        const id = req.params.id;
        const updatedData = req.body;
        const response = await menu.findByIdAndUpdate(id,updatedData,{
            new: true,
            runValidation: true
        })
        if(!response){
            return res.status(404).json({error})
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})
router.delete('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const response = await menu.findByIdAndDelete(id);
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