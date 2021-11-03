const router = require('express').Router()
const foodRouter = require('./food')
const categoriesRouter = require('./categories')

router.get('/', (req, res) => {
    res.redirect('/api-docs')
})

router.use('/food', foodRouter)
router.use('/categories', categoriesRouter)

module.exports = router