const functions = require ("./strings.js")

test ("reverse a word", () =>  {
    expect (functions.reverseThisWord("hello")).toBe("olleh")
});

test( "capatlised word", () => {
    expect (functions.correctCapitals("hey there")).toBe ("Hey there")

});

test("find the vowels", () => {
    expect (functions.vowelCounter("hey how are you")).toBe (6)
})