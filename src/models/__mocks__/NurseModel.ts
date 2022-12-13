const {
  nurseToInsert,
  nursesResponseData,
} = require("../../constants/unitTest");

module.exports = {
  getAllNurses: (authUser: any) => {
    return [nursesResponseData];
  },
  getNurse: (nurseid: number, authUser: number) => {
    return nursesResponseData;
  },
  removeNurse: (nurseid: number, authUser: number) => {
    return;
  },
  checkNurseDetailsOwner: (nurseid: number, authUser: number) => {
    return true;
  },
  addNurse: (nurseToInsert: any) => {
    return nursesResponseData;
  },
};
