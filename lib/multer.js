const multer = require("multer");
const path = require("path");
const filename = (req, file, cb) => {
  const fileName = Date.now() + path.extname(file.originalname);
  cb(null, fileName);
};

const generateStorage = (destination) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename,
  });
};

module.exports = {
  image: multer({
    storage: generateStorage("./public/images"),
    fileFilter: (req, file, cb) => {
      const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];

      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        const err = new Error(
          `only ${allowedMimeTypes.join(", ")} are allowed`
        );
        cb(err, false);
      }
    },
    onError: (err, next) => {
      next(err);
    },
  }),

  video: multer({
    storage: generateStorage("./public/videos"),
    fileFilter: (req, file, cb) => {
      const allowedMimeTypes = [
        "video/mp4",
        "video/mkv",
        "video/x-msvideo",
        "video/quicktime",
      ];

      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        const err = new Error(
          `only ${allowedMimeTypes.join(", ")} are allowed`
        );
        cb(err, false);
      }
    },
    onError: (err, next) => {
      next(err);
    },
  }),

  file: multer({
    storage: generateStorage("./public/files"),
    fileFilter: (req, file, cb) => {
      const allowedMimeTypes = ["application/pdf"];

      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        const err = new Error(
          `only ${allowedMimeTypes.join(", ")} are allowed`
        );
        cb(err, false);
      }
    },
    onError: (err, next) => {
      next(err);
    },
  }),
};
