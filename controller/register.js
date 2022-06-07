const registerUser = (req, res) => {
    users.push({ id: 2, username: req.body.name, password: req.body.password })
    res.send('user added successfully')

}


module.exports = registerUser