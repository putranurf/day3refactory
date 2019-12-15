const express = require("express");
const router = express.Router();

const User = require("../models").user;
const model = require("../models").sequelize;

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // const result = await User.findAll();
  // res.json(result);

  // const [result] = await model.query(`select * from users`);
  // let a = "";
  // for (const iterator of result) {
  //   a += iterator.name + "<br>";
  // }
  // res.send(a);

  const sql = 'select * from users where id = ?'
  const result = await model.query(sql,{
    replacements: [1],
    type: model.QueryTypes.SELECT
  })
  res.json(result)
  
});

// /* GET users listing by id. */
// router.get("/:id", async (req, res, next) => {
//   // const result = await User.findOne({
//   //   where : 1
//   // });
//   // res.json(result);

//   const [result, meta] = await model.query(`select * from users where id = ${req.params.id}`)
//   res.json(result)
// });

//Menggunakan res.render() jika di backend terdapat view
//jika tidak ada bisa menggunakan res.json()

module.exports = router;
