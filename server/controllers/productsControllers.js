const productQueries = require('../queries/productQueries')

const getAllProducts = async (req,res) => {
    try {
        const animals = await productQueries()
        res.json(animals)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = getAllProducts