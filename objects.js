// function that merges two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}


// takes an object and returns true if the object is emptyCells: 
function isPersonEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// takes object as input and returns an array of its keys 
function getObjectKeys(obj) {
    return Object.keys(obj);
}
module.exports.mergeObjects = mergeObjects;
module.exports.isPersonEmpty = isPersonEmpty;
module.exports.getObjectKeys = getObjectKeys;
