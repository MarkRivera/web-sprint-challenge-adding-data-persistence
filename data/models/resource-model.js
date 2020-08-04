const db = require("../db-config");

function find() {
  return db("resource");
}

function findById(id) {
  return db("resource").where({ id }).first();
}

function add(resource) {
  return db("resource")
    .insert(resource)
    .then((res) => {
      return findById(res[0]);
    });
}

async function update(changes, id) {
  const update = await db("resource").where({ id }).update(changes);
  return findById(update[0]);
}

async function remove(id) {
  const deletedNum = await db("resource").where({ id }).del();
  return deletedNum;
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
