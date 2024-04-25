const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb+srv://claudia:swift24@cluster0.uk03zqc.mongodb.net/petitamazones?retryWrites=true&w=majority");
}

module.exports = main;