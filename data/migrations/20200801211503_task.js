exports.up = function (knex) {
  return knex.schema.createTable("task", (tbl) => {
    tbl.increments("TaskId");
    tbl.text("description").notNullable();
    tbl.text("notes");
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("task");
};
