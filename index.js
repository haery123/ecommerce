const express = require('express')
const app = express();

const { products } = require('./data.js')
const hbs = require('hbs')

//path for data validation of price, title etc
const path = require('path')
const loginRoutes = require('./routes/login'); //import gareko files from routes folder and login file
const registerRoutes = require('./routes/register');
const productsRoutes = require('./routes/product');

const connectDatabase = require('./database/connection')
const product = require('./models/product');
const async = require('hbs/lib/async');

const staticPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templates')
const partialsPath = path.join(__dirname, '/templates/partials')

connectDatabase()



//Serving static files
app.use('/public', express.static(staticPath))
    //Setting view engine for our application
app.set('view engine', 'hbs')
    //Setting the views folder , default is views
app.set('views', './templates')
    //Letting the engine know where to look for partials files
hbs.registerPartials('./templates/partials')



//If data is submitted from form, then it translates urlencoded data into object in req.body
app.use(express.urlencoded({ extended: false }))

//convert to object from json
//If data is submitted from Javascript axios, then it translates JSON data into object in req.body
app.use(express.json())

//3. specific path ma matra run gunx like /about   after /
// app.get('/', [logger, authorize], (req, res) => {
//     console.log(req.mern)

//     res.render('index', { products })
// })


//default routes
app.get("/", async(req, res) => {
    const products = await product.find()
    res.render('index', { products })

})


//routes use garne
//login route being exported from /routes/products.js
app.use('/login', loginRoutes)

//register route being exported from /routes/products.js
app.use('/register', registerRoutes)

//Products route being exported from /routes/products.js
app.use('/api/products', productsRoutes)

//Handling all other routes by sending 404 Page Not Found
app.get("*", (req, res) => {
    res.sendStatus(404)

})

app.listen(8000, () => {
    console.log("Server is running at port 8000")
})