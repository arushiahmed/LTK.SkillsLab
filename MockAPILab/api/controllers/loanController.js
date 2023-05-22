const Loan = require('../models/loan');

//create a GET method that gets all loan objects
exports.getAllLoans = async(req, res) => {
    const loans = await Loan.find({});
    res.json(loans);
};

//create a GET method that gets one loan object based on loanId
exports.getLoanByID = async(req, res) => {
    const loans = await Loan.findOne({loanId: req.parms.loanId});
    res.json(loan);
};

//create a POST method that adds a new loan object with an array of borrowers
exports.createLoan = async(req, res) => {
    const newLoan = new Loan(req.body);
    const loan = await newLoan.save();
    res.json(loan);
};

//create a PATCH method that updates borrower information based on loanId and pairId
exports.updateBorrower = async(req, res) => {
    const updatedLoan = await Loan.findOneAndUpdate(
        {loanId: req.parms.loanId, "borrowers.pairId": req.parms.pairId},
        {$set: { "borrower.$": req.body }},
        {new: true }
    );

    res.json(updatedLoan);
}

//create a PATCH or DELETE method that deletes a borrower based on loanId and pairId
exports.deleteBorrower = async(req, res) => {
    const updatedLoan = await Loan.findOneAndUpdate(
        {loanId: req.parms.pairId},
        {$pull: {borrowers: {pairId: req.parms.pairId}}},
        {new: true }
    );

    res.json(updatedLoan);
}

//create a DELETE method that deletes a loan object based on loanId
exports.deleteLoan = async(req, res) => {
    const deleteLoan = await Loan.findOneAndDelete({loanId: req.parms.loanId});
    req.json(deleteLoan);
}