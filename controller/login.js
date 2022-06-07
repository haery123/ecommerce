const welcomeUser = (req, res) => {
    console.log(req.body)
    res.send(`"welcome"${req.body.name}`)
}


module.exports = welcomeUser