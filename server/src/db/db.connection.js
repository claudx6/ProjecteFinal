const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb+srv://claudia:dyNOn1QM7vSsQW46@cluster0.uk03zqc.mongodb.net/petitamazones?retryWrites=true&w=majority");
}

module.exports = main;