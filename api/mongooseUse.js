const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://fatekakashi:mm123456@cluster-test.3y5ansf.mongodb.net/DB_Test?retryWrites=true&w=majority";

mongoose.connect(dbUri);

const BasicInfoSchema = new mongoose.Schema({
  name: String,
  age: String,
});

const Cat = mongoose.model("cccat", BasicInfoSchema);

Cat.create({name: 'xxx', age: 'ggg'}).then(res => {
  console.log('res', res);
})

Cat.find().then((res) => {
  console.log(res);
});
