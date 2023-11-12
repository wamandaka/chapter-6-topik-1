let qr = require("node-qr-image");
const imagekit = require("../lib/imagekit");
module.exports = {
  storageImage: (req, res) => {
    const imageUrl = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
    return res.status(200).json({
      status: true,
      message: "Success",
      data: {
        image_url: imageUrl,
      },
    });
  },
  storageVideo: (req, res) => {
    const videoUrl = `${req.protocol}://${req.get("host")}/videos/${
      req.file.filename
    }`;
    return res.status(200).json({
      status: true,
      message: "Success",
      data: {
        video_url: videoUrl,
      },
    });
  },
  storageFile: (req, res) => {
    const fileUrl = `${req.protocol}://${req.get("host")}/files/${
      req.file.filename
    }`;
    return res.status(200).json({
      status: true,
      message: "Success",
      data: {
        file_url: fileUrl,
      },
    });
  },

  generateQR: (req, res) => {
    const message = req.query.message;
    var qr_png = qr.image(message, { type: "png" });
    qr_png.pipe(
      require("fs").createWriteStream(
        `./public/qr/${message.toLowerCase()}.png`
      )
    );
    // const qr_png = qr.image(message, { type: "png" });
    return res.status(200).json({
      status: 200,
      message: "Success",
      data: qr_png,
    });
  },

  imagekitUpload: async (req, res) => {
    try {
      const stringFile = req.file.buffer.toString("base64");
      const uploadFile = await imagekit.upload({
        fileName: req.file.originalname,
        file: stringFile,
      });
      return res.json({
        status: 200,
        message: "success",
        data: {
          name: uploadFile.name,
          url: uploadFile.url,
          type: uploadFile.fileType,
        },
      });
    } catch (error) {
      throw error;
    }
  },
};
