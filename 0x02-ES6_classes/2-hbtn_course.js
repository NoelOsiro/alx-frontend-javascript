/**
 * Represents a course offered by ALX School.
 */
export default class HolbertonCourse {
  /**
   * Create a new HolbertonCourse instance.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - An array of str representing the students enrolled in the course.
   * @throws {TypeError} If name is not a str, len is not a no, or students is not an array of str.
   */
  constructor(name, length, students) {
    HolbertonCourse.validateString(name, 'Name');
    HolbertonCourse.validateNumber(length, 'Length');
    HolbertonCourse.validateArrayOfStrings(students, 'Students');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Existing getter and setter methods...

  /**
   * Validate that a value is a string.
   * @param {*} value - The value to validate.
   * @param {string} paramName - The name of the parameter being validated.
   * @throws {TypeError} If the value is not a string.
   */
  static validateString(value, paramName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${paramName} must be a string`);
    }
  }

  /**
   * Validate that a value is a number.
   * @param {*} value - The value to validate.
   * @param {string} paramName - The name of the parameter being validated.
   * @throws {TypeError} If the value is not a number.
   */
  static validateNumber(value, paramName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${paramName} must be a number`);
    }
  }

  /**
   * Validate that a value is an array of strings.
   * @param {*} value - The value to validate.
   * @param {string} paramName - The name of the parameter being validated.
   * @throws {TypeError} If the value is not an array of strings.
   */
  static validateArrayOfStrings(value, paramName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${paramName} must be an array of strings`);
    }
  }
}
