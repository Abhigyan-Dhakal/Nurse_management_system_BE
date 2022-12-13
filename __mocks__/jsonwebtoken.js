module.exports = {
  sign: (
    uidObject,
    accessToken,
    c = {
      expiresIn: "40s",
    }
  ) => {
    return "randomString";
  },
  verify: (refreshToken, refreshTokenSecret) => {
    return {
      user_id: 1,
    };
  },
};
