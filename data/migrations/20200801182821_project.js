exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments("id");
      tbl.string("name").notNullable();
      tbl.text("description");
      tbl.boolean("completed").notNullable();
    })
    .createTable("resource", (tbl) => {
      tbl.increments("id");
      tbl.string("name").notNullable();
      tbl.text("description");
    })
    .createTable("task", (tbl) => {
      tbl.increments("id");
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project_resources");
};
