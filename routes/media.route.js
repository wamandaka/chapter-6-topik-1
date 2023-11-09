const router = require("express").Router();
const storage = require("../lib/multer");
const {
  storageImage,
  storageVideo,
  storageFile,
} = require("../controller/media.controller");

router.post("/image", storage.image.single("images"), storageImage);
router.post("/video", storage.video.single("videos"), storageVideo);
router.post("/file", storage.file.single("files"), storageFile);
module.exports = router;
