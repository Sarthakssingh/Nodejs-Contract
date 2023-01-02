const express = require('express');
const router = express.Router();
const Model = require('./model');


//post method
router.post('/post',async(req,res) => {
    const data = new Model({
        _id:req.body._id,
        lender:req.body.lender,
        borrower:req.body.borrower,
        amount:req.body.amount,
        intrest:req.body.intrest,
        loanStartDate:req.body.loanStartDate,
        loanDueDate:req.body.loanDueDate,
        isPaid:req.body.isPaid,
    })
    try{
        const saveData = await data.save();
        res.status(200).json(saveData)
    }catch(error){
        res.status(401).json({message:error.message})
    }
})

//getAll method
router.get('/getAll',async (req,res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
//get by id
router.get('/getbyName',async(req,res) => {
    try {
        const data = await Model.find();
        const filters = req.query;
        const filtered = data.filter(user => {
            let isValid = true;
            for(key in filters){
                console.log(key, user[key],filters[key]);
                isValid = isValid && user[key] == filters[key];
            }
            return isValid;
        });
        res.json(filtered)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



module.exports = router;