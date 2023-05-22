const {
    getAllLoans,
    getLoanByID ,
    createLoan,
    updateBorrower,
    deleteBorrower,
    deleteLoan
} = require('../controllers/loanController');

module.exports = (app) => {
    //create a GET method that gets all loan objects
    app.route('/').get(getAllLoans);

    app.route('/loan').get(getAllLoans);

    //create a GET method that gets one loan object based on loanId
    app.route('/loan/:loanId').get(getLoanByID);

    //create a POST method that adds a new loan object with an array of borrowers
    app.route('loan').post(createLoan);

    //create a PATCH method that updates borrower information based on loanId and pairId
    app.route('/loan/:loanId/borrower/:pairId').patch(updateBorrower);

    //create a PATCH or DELETE method that deletes a borrower based on loanId and pairId
    app.route('/loan/:loanId/borrower/:pairId').delete(deleteBorrower);

    //create a DELETE method that deletes a loan object based on loanId
    app.route('/loan/:loanId').delete(deleteLoan);

}