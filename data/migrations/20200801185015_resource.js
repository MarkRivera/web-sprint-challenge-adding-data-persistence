exports.up = function (knex) {
  return knex.schema.createTable("resource", (tbl) => {
    tbl.increments("resourceID");
    tbl.string("name").notNullable();
    tbl.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resource");
};
