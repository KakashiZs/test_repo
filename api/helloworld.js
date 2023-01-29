import { VercelRequest, VercelResponse } from "@vercel/node";
module.exports = async (req, res) => {
  const data = {
    msg: "hello world!",
    cc: "ddd"
  };
  res.status(200).json(data);
};
