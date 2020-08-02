exports.up = function (knex) {
  return knex.schema.table("task", (tbl) => {
    tbl.integer("project_id");
  });
};

exports.down = function (knex) {
  return knex.schema.table("task", (tbl) => {
    tbl.dropColumn("project_id");
  });
};
