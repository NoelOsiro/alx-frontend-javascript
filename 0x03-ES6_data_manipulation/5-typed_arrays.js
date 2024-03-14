// Exercise: 5 - Typed Arrays
// Create a new ArrayBuffer of the specified length
const createInt8TypedArray = (length, position, value) => {
    // Check if position is within range
    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }
    // Create a new ArrayBuffer of the specified length
    const buffer = new ArrayBuffer(length);
    // Create an Int8Array view of the buffer
    const int8Array = new Int8Array(buffer);
    // Set the value at the specified position
    int8Array[position] = value;

    return buffer;
}
