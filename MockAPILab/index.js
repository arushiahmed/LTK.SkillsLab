const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importing routes
const loanRoutes = require('./api/routes/loanRoutes');

const app = express();
const port = 3000;
//const isLocal = true;

//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/loanDB', { useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log('DB connected sucessfully'))
	.catch((err) => console.error(err));

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
loanRoutes(app);

//Start server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});

// app.get('/', (req, res) => {
//     res.json({
// 		message: "✨ 👋🌏 ✨",
// 		stage: process.env.NODE_ENV,
// 	});
// });

// app.get("/ping", (req, res) => {
// 	res.json({
// 		message: "🏓",
// 	});
// });

// if (isLocal) {
// 	//local host
// 	app.listen(port, () => {
// 		console.log(`Example app listening on port ${port}`)
// 	});
// } else {
// 	//for lambda export
// 	module.exports = app;
// }
