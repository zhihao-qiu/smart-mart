const client = require('./index');

const getProducts = () => {
  return client.query(`
  SELECT * from products;`)
  .then((result) => {
    return (result.rows);
  })
  .catch((err) => console.log(err));
};

module.exports = { getProducts };