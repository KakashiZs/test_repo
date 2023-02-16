module.exports = async (req, res) => {
  const data = {
    msg: "hello world!",
    cc: "ddd"
  };
  res.status(200).json(data);
};
