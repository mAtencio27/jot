const knex = require("knex");

const db = knex({
    client:"pg",
    connection:
        process.env.DATABASE_URL ||
                                                                                    //dbname
        `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/jot`,
    searchPath: "public",
});

module.exports = db