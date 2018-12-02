const model = require('./model.js')



function getAll(req, res, next) {
    model.getAll()
        .then((result) => {
            if (result.errors)
                return next({ status: 400, message: `Server failed to deliver posts`, errors: result.errors })
            return res.status(200).json({ result })
        })
    .catch(next)
}

function getOne(req, res, next) {
    model.getOne(req.params.id)
        .then((result) => {
            if (result.length === 0)
                return next({ status: 400, message: 'Movie not found', errors: result.errors })
            return res.status(200).json({ result })
        })
    .catch(next) 
}

const create = (req, res, next) => {
    model.create(req.body.title, req.body.director, req.body.year, req.body.rating, req.body.poster)
        .then((result) => {
            if (result.length === 0)
                return next({ status: 400, message: 'Movie not created', errors: result.errors })
            return res.status(201).json({ result })
        })
    .catch(next) 
}

const update = (req, res, next) => {
    const id = parseInt(req.params.id)
    model.update(id, req.body.title, req.body.director, req.body.year, req.body.rating, req.body.poster)
        .then((result) => {
            if (result.length === 0)
                return next({ status: 400, message: 'Movie not updated', errors: result.errors })
            return res.status(201).json({ result })
        })
    .catch(next)
}

const remove = (req, res, next) => {
    const id = parseInt(req.params.id)
    model.remove(id)
        .then((result) => {
            if (result.length === 0)
                return next({ status: 400, message: 'Movie not deleted', errors: result.errors })
            return res.status(201).json({ result })
        })
    .catch(next)
}



module.exports = { getAll, getOne, create, update, remove }