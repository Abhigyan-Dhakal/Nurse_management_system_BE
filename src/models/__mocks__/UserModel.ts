const { userResponseData, userToInsert } = require("../../constants/unitTest");

module.exports = {
  getUserByEmail: (email: any) => {
    return userResponseData;
  },
  createUser: (userToInsert: any) => {
    return userResponseData;
  },
};
