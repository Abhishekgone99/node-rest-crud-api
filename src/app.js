const express = require("express");
const router = require("./routers/menRoutes");
require("../src/db/conn");

// express app
const app = express();
const port = process.env.PORT || 3000;

//middlewares & static files
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`listening at port : ${port}`);
});
