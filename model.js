const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    _id:{
        require:true,
        type:Number
    },
    lender:{
        require:true,
        type:String
    },
    borrower:{
        require:true,
        type:String
    },
    amount:{
        require:true,
        type:Number
    },
    intrest:{
        require:true,
        type:Number
    },
    loanStartDate:{
        require:true,
        type:Date
    },
    loanDueDate:{
        require:true,
        type:Date
    },
    isPaid:{
        require:true,
        type:Boolean
    }

})

module.exports = mongoose.model('Data',dataSchema)