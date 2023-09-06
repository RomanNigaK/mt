const { Router } = require("express");
const connection = require("../connection");
const router = Router();

router.post("/auth", async (req, res) => {
  console.log(req.body);
  let sqlstatement = `SELECT id,name FROM user WHERE id IN  ( ${req.body.idUsers} ) `;
  connection.invokeQuery(sqlstatement, function (rows) {
    console.log(rows.length);
    if (!rows.length) {
      res.send({
        result: { valid: false, msg: "Не верная пара логиг/пароль" },
      });
    } else {
      res.send({ result: { valid: true, data: rows } });
    }
  });
});

module.exports = router;
