module.exports = {
  compare: (password, hash) => {
    return true;
  },
  genSalt: (saltCount) => {
    return "generatedSalt";
  },
  hash: (password, salt) => {
    return "hashedPassword";
  },
};
