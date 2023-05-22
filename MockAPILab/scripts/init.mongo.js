dn = new Mongo().getDB('loanDB');

db.loans.remove({});
db.loans.insert([
    {
        "loanId": 1,
        "borrowers": [
            {
                "pairId": 1,
                "firstName": "John",
                "lastName": "Doe",
                "phone": "123456789"
            },
            {
                "pairId": 2,
                "firstName": "Jane",
                "lastName": "Smith",
                "phone": "987654321"
            }
        ]
    }
]);