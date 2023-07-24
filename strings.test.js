const functions = require ("./strings.js")

test ("reverse a word", () =>  {
    expect (functions.reverseThisWord("hello")).toBe("olleh")
})