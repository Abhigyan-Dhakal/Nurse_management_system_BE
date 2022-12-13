const { generateToken } = require("../services/tokenService");
const { userResponseData } = require("../constants/unitTest");

beforeAll(() => {
  process.env.ACCESS_TOKEN_SECRET = "accesstokentest";
  process.env.REFRESH_TOKEN_SECRET = "refreshtokentest";
});

test("Should generate a new token", async () => {
  const input = {
    refreshToken: "refreshToken",
    userId: 1,
  };

  const output = await generateToken(input.refreshToken, input.userId);

  const expectedOutput = {
    data: {
      access: "randomString",
      refresh: "randomString",
      user_id: userResponseData.user_id,
    },
    message: "Token Regenerated!",
  };

  expect(output).toEqual(expectedOutput);
});
