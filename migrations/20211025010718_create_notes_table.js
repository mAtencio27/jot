
exports.up = function(knex) {
    return knex.schema.createTable("notes", (table) => {
        table.uuid("id").primary();
        table.text("note");
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable("notes")
};
