const {
  getAllNurses,
  getNurse,
  removeNurse,
  addNurse,
} = require("../services/nurseService");
const { nursesResponseData, nurseToInsert } = require("../constants/unitTest");

jest.mock("../models/NurseModel.ts");

test("Should get all the nurses", async () => {
  const input = {
    authUser: 1,
  };

  const output = await getAllNurses(input.authUser);

  const expectedOutput = {
    data: [nursesResponseData],
    message: "Nurses details fetched successfully!",
  };

  expect(output).toEqual(expectedOutput);
});

test("Should get a specific nurse details", async () => {
  const input = {
    nurseId: 1,
    authUser: 1,
  };

  const output = await getNurse(input.nurseId, input.authUser);

  const expectedOutput = {
    data: nursesResponseData,
    message: "Nurse details fetched successfully!",
  };

  expect(output).toEqual(expectedOutput);
});

test("Should add a new nurse", async () => {
  const input = {
    nurseToInsert,
    photograph: "photographPath",
  };

  const output = await addNurse(input);

  const expectedOutput = {
    data: nursesResponseData,
    message: "Nurse details added successfully!",
  };

  expect(output).toEqual(expectedOutput);
});

test("Should remove a specific nurse details", async () => {
  const input = {
    nurseId: 1,
    authUser: 1,
  };

  const output = await removeNurse(input.nurseId, input.authUser);

  const expectedOutput = {
    message: "Nurse details removed successfully!",
  };

  expect(output).toEqual(expectedOutput);
});
