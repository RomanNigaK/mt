const { Router } = require("express");

const { dataTranslation, imgMessageFromDB, loadData } = require("../script");
const router = Router();

router.post("/", async (req, res) => {
  const count = 30;

  const { city, page } = req.body;

  let sql = `Select createdAt,text,image,user,title,deleted from message
                      where topic='${city}'
                      ORDER BY id DESC limit ${page * 30},${count}`;
  // let sql = `Select * from message
  //                     where topic='${city}'
  //                     ORDER BY id DESC limit ${page * 30},${count}`;
  const messages = await loadData(sql);

  //console.log(messages);

  let ids = [];

  messages.forEach((e) => {
    if (!ids.includes(e.user)) ids.push(e.user);
  });

  sql = `SELECT id,name FROM user WHERE id IN  ( ${ids.join(",")} ) `;

  const users = await loadData(sql);
  console.log(users);

  const result = messages
    .filter((i) => !i.deleted)
    .map((e) => {
      return {
        id: e.createdAt,
        msg: e.text,
        data: dataTranslation(e.createdAt),
        user: users.find((i) => i.id === e.user)?.name || "Админ",
        title: e.title,
        image: imgMessageFromDB(e.image),
      };
    });

  res.send({ result, city, page });
});

router.get("/list", async (req, res) => {
  let sql = `Select * from message
                      where topic='Сочи'
                      ORDER BY id DESC limit 0, 10`;

  const messages = await loadData(sql);
  res.send(messages);
});
//ALTER TABLE user ADD author VARCHAR;

// UPDATE customers
//    SET first_name = 'Joseph'
//  WHERE customer_id = 8000;
router.get("/delete", async (req, res) => {
  let sql = `UPDATE user SET password='tomat101' where id = 8 `;

  const messages = await loadData(sql);
  res.send(messages);
});

module.exports = router;
