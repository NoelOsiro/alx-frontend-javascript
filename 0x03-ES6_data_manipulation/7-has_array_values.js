// Exercise: 7
// Description: Write a function named hasValuesFromArray that takes a Set and an array as arguments and returns true if the Set contains all the elements of the array, and false otherwise.
const hasValuesFromArray = (set, array) => (array.every(element => set.has(element)));
export default hasValuesFromArray;
