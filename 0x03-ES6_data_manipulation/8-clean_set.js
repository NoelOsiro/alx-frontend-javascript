// Exercise: 8
// Description: Write a function named cleanSet that takes a Set and a 
// string as arguments and returns a string that contains only the values from the Set that
// start with the specified string. The values should be separated by a hyphen (-).
const cleanSet = (set, startString) => {
    // Filter the set to get values that start with the specified string
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
    
    // Join the filtered values into a single string separated by "-"
    return filteredValues.join("-");
}

