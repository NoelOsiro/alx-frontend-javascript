/**
 * Represents a course offered by Holberton School.
 */
export default class HolbertonCourse {
  /**
   * Create a new HolbertonCourse instance.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - An array of strings representing the students enrolled in the course.
   * @throws {TypeError} If name is not a string, length is not a number, or students is not an array of strings.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    /**
     * The name of the course.
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * The length of the course in weeks.
     * @type {number}
     * @private
     */
    this._length = length;

    /**
     * An array of strings representing the students enrolled in the course.
     * @type {string[]}
     * @private
     */
    this._students = students;
  }

  /**
   * Get the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Get the length of the course in weeks.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Get the students enrolled in the course.
   * @returns {string[]} An array of strings representing the students.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the name of the course.
   * @param {string} name - The new name for the course.
   * @throws {TypeError} If name is not a string.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Set the length of the course.
   * @param {number} length - The new length for the course in weeks.
   * @throws {TypeError} If length is not a number.
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * Set the students enrolled in the course.
   * @param {string[]} students - An array of strings representing the students.
   * @throws {TypeError} If students is not an array of strings.
   */
  set students(students) {
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
