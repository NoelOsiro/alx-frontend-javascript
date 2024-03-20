/**
 * Represents a classroom with a max no. students.
 */
export default class ClassRoom {
  /**
   * Create a new ClassRoom instance.
   * @param {number} maxStudentsSize - The max no. students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    /**
     * The max no. students allowed in the classroom.
     * @type {number}
     * @private
     */
    this.maxStudentsSize = maxStudentsSize;
  }
}
