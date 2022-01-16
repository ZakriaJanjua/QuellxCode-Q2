const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.get('Authorization')
    
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        if (token) {
            jwt.verify(token, 'tokenSecret', (err, user) => {
                if (err) {
                    res.status(403).json(err.message)
                } else {
                    next()
                }
            })
        } else {
            res.status(403).json('Un-authorized access')
        }
    } else {
        res.status(401).json('User not signed')
    }
}

module.exports = {
    verifyToken
}