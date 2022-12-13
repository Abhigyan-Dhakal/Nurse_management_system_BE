const { login } = require("../services/loginService");
const { userResponseData } = require("../constants/unitTest");

jest.mock("../models/UserModel.ts");

beforeAll(() => {
  process.env.ACCESS_TOKEN_SECRET = "accesstokentest";
  process.env.REFRESH_TOKEN_SECRET = "refreshtokentest";
});

describe("Login user", () => {
  test("Should log in the user", async () => {
    const input = {
      email: "test@gmail.com",
      password: "test123",
    };

    const output = await login(input);

    const expectedOutput = {
      data: {
        access: "randomString",
        refresh: "randomString",
        user_id: userResponseData.user_id,
      },
      message: "User Logged In!",
    };

    expect(output).toEqual(expectedOutput);
  });
});
