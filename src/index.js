const app = require('./app')
const db = require('../models/index')


db.sequelize.sync({ force: false }).then(async () => {
  const data = await db.User.findAll()
  console.log(data)
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening at ${process.env.PORT || 3001}`);
  });
})