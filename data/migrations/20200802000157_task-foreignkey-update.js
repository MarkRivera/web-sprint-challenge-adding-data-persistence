exports.up = function (knex) {
  return knex.schema.table("task", (tbl) => {
    tbl.foreign("project_id").references("project.id");
  });
};

exports.down = function (knex) {
  return knex.schema.table("task", (tbl) => {
    tbl.dropForeign("project_id");
  });
};
