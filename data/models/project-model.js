const db = require("../db-config");

function find() {
  return db("project");
}

function findById(id) {
  return db("project").where({ id }).first();
}

function add(project) {
  return db("project")
    .insert(project)
    .then((res) => {
      return findById(res[0]);
    });
}

async function update(changes, id) {
  const update = await db("project").where({ id }).update(changes);
  return findById(update[0]);
}

async function remove(id) {
  const deletedNum = await db("project").where({ id }).del();
  return deletedNum;
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
