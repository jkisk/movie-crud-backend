
const knex = require('./db')

//get all movies

const getAll = () => {

    return knex('movies')
}

//get one movie by id

const getOne = (id) => {
    return knex('movies')
        .where('id', id)
}

const create = (a, b, c, d, e) => {
    return knex('movies')
        .insert({ title: a, director: b, year: c, rating: d, poster: e })
        .returning('*')
}

const update = (f, a, b, c, d, e) => {
    return knex('movies')
        .where({ id: f })
        .update({ title: a, director: b, year: c, rating: d, poster: e })
        .returning('*')
}

const remove = (f) => {

    // return knex.raw(`delete from movies where id=${f}`)
    //     .returning('*')

    return knex('movies')
        .del()
        .where({ id: f })
        .returning('*')

}


module.exports = { getAll, getOne, create, update, remove }