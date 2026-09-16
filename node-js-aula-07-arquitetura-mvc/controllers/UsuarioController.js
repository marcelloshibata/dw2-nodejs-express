import express from "express";
const rota = express.Router();

rota.get("/perfil", (req, res) => {
  res.render("perfil");
});
export default rota;
