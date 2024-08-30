const generatePassword = require("../index");

test("should generate a password of default length 12", () => {
  const password = generatePassword();
  expect(password).toHaveLength(12);
});

test("should generate a password of specified length", () => {
  const length = 16;
  const password = generatePassword(length);
  expect(password).toHaveLength(length);
});

test("should include characters from the charset", () => {
  const length = 20;
  const password = generatePassword(length);
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  for (let char of password) {
    expect(charset.includes(char)).toBe(true);
  }
});
