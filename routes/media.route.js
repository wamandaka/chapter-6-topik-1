const router = require("express").Router();
const storage = require("../lib/multer");
const {
  storageImage,
  storageVideo,
  storageFile,
  generateQR,
} = require("../controller/media.controller");

router.post("/image", storage.image.single("images"), storageImage);
router.post("/video", storage.video.single("videos"), storageVideo);
router.post("/file", storage.file.single("files"), storageFile);
router.post("/generate-qr", generateQR);
module.exports = router;
