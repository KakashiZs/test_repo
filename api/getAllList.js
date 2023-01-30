module.exports = async (req, res) => {
  const mongoose = require("mongoose");
  const dbUri =
    "mongodb+srv://fatekakashi:mm123456@cluster-test.3y5ansf.mongodb.net/DB_Test?retryWrites=true&w=majority";

  mongoose.connect(dbUri);

  const BasicInfoSchema = new mongoose.Schema({
    name: String,
    age: String,
  });

  const Cat = mongoose.model("cccat", BasicInfoSchema);

  const resu = await Cat.find()

  console.log(resu);

  res.status(200).json(resu);
};
