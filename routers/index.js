const router = require('express').Router()
const foodRouter = require('./food')
const categoriesRouter = require('./categories')

router.get('/', (req, res) => {
    res.send('homepage')
})

router.use('/food', foodRouter)
router.use('/categories', categoriesRouter)

module.exports = router