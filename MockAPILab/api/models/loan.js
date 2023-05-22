const mongoose = require('mongoose');

//Creating schema for borrower
const BorrowerSchema = new mongoose.Schema({
    pairID: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
});

//Creating schema for loan
const LoanSchema = new mongoose.Schema({
    loanId: {
        type: Number,
        required: true,
        unique: true
    },
	borrowers: [BorrowerSchema]
});

//export the mongoose model
module.exports = mongoose.model('Loan', LoanSchema);