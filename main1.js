// InsertIntoArray([1,2,3,4,5]) -> [0,1,2,3,4,5]
function InsertIntoArray(array, variable) {
    let newArray = [variable];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray;
}
console.log(InsertIntoArray([1, 2, 3, 4], 5));