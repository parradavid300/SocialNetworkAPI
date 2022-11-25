const { connect, connection } = require('mongoose');

connect('mongodb://localhost/insertDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;