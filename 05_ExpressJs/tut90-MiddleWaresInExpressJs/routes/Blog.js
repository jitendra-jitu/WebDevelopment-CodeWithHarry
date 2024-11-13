const express = require('express');
const app = express();
const router = express.Router();

// Router-Middleware_1
router.use((req, res, next) => {
    console.log(`Router-Middleware_1`);
    req.data = "Router-Middleware_1";
    next();
});

// Router-Middleware_2
router.use((req, res, next) => {
    req.data += " -> Router-Middleware_2";
    console.log(`Router-Middleware_2`);
    next();
});


router.get('/', (req, res, next) => {

    console.log('Inside blog router');

    res.send(`Hello Blogging!: Crossed ${req.data}`);

    next(); // Passes the control to the next middleware after handling /blog route
});


router.get('/info', (req, res) => {
    
    console.log('Inside  blog/info router');
    
    res.send(`Blogging occurs at web !: Crossed ${req.data}`);

    next(); // Passes the control to the next middleware after handling /blog route

});

module.exports = router;




////////
///////////
////////////
// http://localhost:3000/blog/info

// for complete process over  express routing
