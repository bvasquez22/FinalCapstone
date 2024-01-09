require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createToken = (username, id) => {
    return jwt.sign(
        {
            username,
            id,
        },
        SECRET,
        {
            expiresIn: '2 days',
        }
    );
};

module.exports = {
    signin: async (req, res) => {
        let {username, password} = req.body
        const token = createToken(username, password)
        res.status(200).send(token)
    },
    signup: async (req, res) => {
        console.log('sign up')
        res.sendStatus(200)
    },
}