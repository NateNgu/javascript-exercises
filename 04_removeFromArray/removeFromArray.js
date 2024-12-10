const removeFromArray = function(array, ...num) {

    let newArray = []

    array.forEach(item => {
        if (!num.includes(item)) { // Put each element into the array unless an item is located in the arguments
            newArray.push(item)
        }

    })

    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
