const functions = require("./objects.js");

test("return Object Keys", () => {
  const obj = {
    nombre: "jay",
    age: "12",
    height: "10000",
  };

  const expectedKeys = ["nombre", "age", "height"];
  const result = functions.getObjectKeys(obj);

  expect(result).toEqual(expectedKeys);
});