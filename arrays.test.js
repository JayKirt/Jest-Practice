const functions = require('./arrays');

test ("add all elements of an Array and return a total", () => {
    expect (functions.sumArray([5, 2, 5, 4, 5, 6, 5, 8, 9, 10])).toBe(59);
})

test ("return highest number", () => {
    expect (functions.highestNumber ([20,40,1000000,12012234,203,1,-100,-19034345345698, 3,4,5,2,35,34,])).toBe(12012234);

})

test ("Even numbers only", () => {
    expect (functions.evensOnlyArray ([1,2,3,4,5,6,7,8,9,10,11,12345,2223454])).toEqual ([2,4,6,8,10,2223454])
})