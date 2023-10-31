// const express = require('express');
// // const req = require('express/lib/request');
// // const res = require('express/lib/response');
// const path = require('path');
// const app = express();



const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const mainRouter = require('./routes/index');
// // const productRouter = require('./routes/products');
// // const ErrorHandler = require('./errors/ErrorHandler');
// app.get('/', (req,res)  =>  {
//     res.sendFile(path.resolve(__dirname) +'/index.html');
// }); 
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));




// // app.use(express.json());
// // // app.use(express.urlencoded({ extended: false }));
// // app.use(productRouter);
app.use(mainRouter);
// // app.use((req, res, next) => {
// //     return res.json({ message: 'page not found!'});
// // });

// // app.use((err, req, res, next) => {
// //     if (err instanceof ErrorHandler) {
// //         res.status(err.status).json({
// //             error: {
// //                 message: err.message,
// //                 status: err.status
// //             }
// //         });
// //     } else {
// //         res.status(500).json({
// //             error: { 
// //                 message: err.message,
// //                 status: err.status
// //             }
// //         });
// //     }
// // });
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));