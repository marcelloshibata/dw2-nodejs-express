import express from "express";
const rota = express.Router();


rota.get("/servicos", (req, res) => {
  res.render("servicos");
});
export default rota;