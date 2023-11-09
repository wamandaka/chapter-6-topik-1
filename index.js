require("dotenv").config();
const express = require("express");
// const multer = require('multer');
// const path = require('path');
const app = express();

app.use("/images", express.static("public/images"));
app.use("/files", express.static("public/files"));

const mediarouter = require("./routes/media.route");
app.use("/api/v1", mediarouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})