const express = require("express");
const app = express();
const router = require("./src/routes");
const errorHandler = require("./src/utils/errorHandler");

app.use("/api", router);
app.use(errorHandler);
app.listen(3010, () => console.log("The server started on port 3010"));
