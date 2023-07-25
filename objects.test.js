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

test ("object merging", () => {

  const obj1 = {
    fName :"Jay",
    lName: "kirtlan"
}

const obj2 = {
  feeling: "loves",
  perfectOne: "kath"
}

const expectedObj = {
  fName :"Jay",
    lName: "kirtlan",
    feeling: "loves",
    perfectOne: "kath"
  }

  const results = functions.mergeObjects (obj1, obj2)

  expect (results).toEqual(expectedObj)
})

test ("check if obj is empty", () => {
  const obj = {}
  const result = functions.isPersonEmpty(obj)
  expect (result).toEqual(result)
})
