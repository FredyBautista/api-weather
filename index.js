const express = require("express");
const app = express();
const router = require("./src/routes");
//app.get("/greeting", (req, res) => res.send({ greeting: "Hello World" }));
//routes(app);
app.use("/", router);
app.listen(3010, () => console.log("The server started on port 3010"));
