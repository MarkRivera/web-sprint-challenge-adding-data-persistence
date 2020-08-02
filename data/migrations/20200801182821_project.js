exports.up = function (knex) {
  return knex.schema.createTable("project", (tbl) => {
    tbl.increments("id");
    tbl.string("name").notNullable();
    tbl.text("description");
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project");
};
