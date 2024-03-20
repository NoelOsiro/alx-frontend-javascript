/**
 * Represents a classroom with a maximum number of students.
 */
export default class ClassRoom {
  /**
   * Create a new ClassRoom instance.
   * @param {number} maxStudentsSize - The maximum number of students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    /**
     * The maximum number of students allowed in the classroom.
     * @type {number}
     * @private
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
