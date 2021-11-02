const router = require('express').Router()
const foodRouter = require('./food')

router.get('/', (req, res) => {
    res.send('homepage')
})

router.use('/food', foodRouter)

module.exports = router