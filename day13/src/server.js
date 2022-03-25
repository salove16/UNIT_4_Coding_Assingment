const app = require("./index");

const connect = require("./configs/db");

app.listen(4000, async () => {
  try {
    await connect();
    console.log("listening to port 4000");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
