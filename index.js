const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const user = require("./routes/user");
const order = require("./routes/order");
const service = require("./routes/service");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use("/user", user);
app.use("/service", service);
app.use("/order", order);
//app.use("/uploads", express.static(uploadDir));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
