
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', table => {
        table.increments()
        table.string('title').notNullable("")
        table.string('director')
        table.integer('year')
        table.integer('rating')
        table.string('poster')
        table.timestamps(true, true)

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies')
};
