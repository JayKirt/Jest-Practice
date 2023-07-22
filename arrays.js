// returns an array of numbers as their total. 
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    };
    console.log(total)
    };
    sumArray([1,2,3,4,5,6,7,8,9,10])

    // returns the highest number in an array
    function highestNumber(arr) {
        let highest = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > highest) {
                highest = arr[i]
            }
        };
        console.log(highest)
        }
        highestNumber([1,2,3,4,5,6,7,8,9,10])

        //returns only evens from an array 
        function evensOnlyArray(arr) {  
            let evens = [];
            for (let i = 0; i < arr.length; i++){
                if (arr[i] % 2 === 0) {
                    evens.push(arr[i])
                }
            }   
            console.log(evens)
            }
            evensOnlyArray([1,2,3,4,5,6,7,8,9,10])

            module.exports.sumArray = sumArray;
            module.exports.highestNumber = highestNumber;
            module.exports.evensOnlyArray = evensOnlyArray;