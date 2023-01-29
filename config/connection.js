const { connect, connection } = require("mongoose");

const connectionSTring =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/networkDB";

connect(connectionSTring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
