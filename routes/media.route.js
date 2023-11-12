const router = require("express").Router();
const storage = require("../lib/multer");
const {
  storageImage,
  storageVideo,
  storageFile,
  generateQR,
  imagekitUpload,
} = require("../controller/media.controller");

router.post("/image", storage.image.single("images"), storageImage);
router.post("/video", storage.video.single("videos"), storageVideo);
router.post("/file", storage.file.single("files"), storageFile);
router.post("/generate-qr", generateQR);

const multer = require("multer")();
router.post('/imagekit', multer.single('image'), imagekitUpload)
module.exports = router;
