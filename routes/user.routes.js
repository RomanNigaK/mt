const { Router } = require("express");
const connection = require("../connection");
const { loadData } = require("../script");
const router = Router();

router.post("/auth", async (req, res) => {
  let { email, password } = req.body;

  email = "ajratajratov3@gmail.com";
  password = 16919;

  let sql = `SELECT * FROM user where id=${password} and email='${email}'`;

  const users = await loadData(sql);

  if (users.length === 0) {
    return res.status(401).send({ message: "Не верная пара логин/пароль" });
  }

  users[0].photos = JSON.parse(users[0].photos);

  res.send(users);
});

router.get("/list", async (req, res) => {
  let { email, id } = req.body;

  email = "novakangelinka@gmail.com";
  id = 16919;

  let sql = `SELECT * FROM user where id=${id} `;

  const users = await loadData(sql);

  res.send({ users });
});

module.exports = router;
