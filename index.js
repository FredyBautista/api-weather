const express = require("express");
const router = require("./src/routes");
const errorHandler = require("./src/utils/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", router);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
