const { createUser } = require("../services/userService");
const { userResponseData } = require("../constants/unitTest");

jest.mock("../models/UserModel.ts");

describe("Create User", () => {
  test("Should create a new user", async () => {
    const input = {
      first_name: "Abhigyan",
      last_name: "Dhakal",
      contact: "9829839827",
      email: "test@gmail.com",
      password: "password",
    };

    const output = await createUser(input);

    const expectedOutput = {
      data: userResponseData,
      message: "User Added Successfully!",
    };

    expect(output).toEqual(expectedOutput);
  });
});
