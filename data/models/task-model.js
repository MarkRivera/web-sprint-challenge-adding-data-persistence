const db = require("../db-config");

function find() {
  return db("task");
}

function findById(id) {
  return db("task").where({ id }).first();
}

function add(task) {
  return db("task")
    .insert(task)
    .then((res) => {
      return findById(res[0]);
    });
}

async function update(changes, id) {
  const update = await db("task").where({ id }).update(changes);
  return findById(update[0]);
}

async function remove(id) {
  const deletedNum = await db("task").where({ id }).del();
  return deletedNum;
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
