// Import the function
import getListStudentIds from "./getListStudentIds.js";

// Test cases
describe("getListStudentIds function", () => {
    // Test case 1: when the input is an array of objects
    it("should return an array of ids when the input is an array of objects", () => {
        const students = [
            { id: 1, firstName: "Guillaume", location: "San Francisco" },
            { id: 2, firstName: "James", location: "Columbia" },
            { id: 5, firstName: "Serena", location: "San Francisco" }
        ];
        expect(getListStudentIds(students)).toEqual([1, 2, 5]);
    });

    // Test case 2: when the input is not an array
    it("should return an empty array when the input is not an array", () => {
        expect(getListStudentIds("not an array")).toEqual([]);
    });

    // Test case 3: when the input is an empty array
    it("should return an empty array when the input is an empty array", () => {
        expect(getListStudentIds([])).toEqual([]);
    });
});
