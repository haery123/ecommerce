const express = require('express')
const app = express();

const { products, users } = require('./data.js')
const hbs = require('hbs')
const loginRoutes = require('./routes/login'); //import gareko files from routes folder and login file
const registerRoutes = require('./routes/register');
const productsRoutes = require('./routes/product');

const connectDatabase = require('./database/connection')
const product = require('./models/product');
const async = require('hbs/lib/async');

const staticPath = __dirname + "/public"

connectDatabase()



//Serving static files
app.use('/public', express.static(staticPath))
    //Setting view engine for our application
app.set('view engine', 'hbs')
    //Setting the views folder , default is views
app.set('views', './templates')
    //Letting the engine know where to look for partials files
hbs.registerPartials('./templates/partials')




app.use(express.urlencoded({ extended: false }))
    //convert to object from json
app.use(express.json())

//3. specific path ma matra run gunx like /about   after /
// app.get('/', [logger, authorize], (req, res) => {
//     console.log(req.mern)

//     res.render('index', { products })
// })



app.get("/", async(req, res) => {
    const products = await product.find()
    res.render('index', { products })

})


//routes use garne
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/api/products', productsRoutes)


app.get("*", (req, res) => {
    res.sendStatus(404)

})


app.listen(8000, () => {
    console.log("Server is running at port 8000")
})