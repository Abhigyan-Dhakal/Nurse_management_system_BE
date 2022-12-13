const {
  cloudinaryObj,
  cloudinaryConfig,
} = require("../src/constants/unitTest");

module.exports = {
  uploader: {
    upload: (photograph, cloudinaryObj) => {
      uploadResponse = {
        url: "testUrl",
      };
    },
  },
  config: (cloudinaryConfig) => {
    return true;
  },
};
