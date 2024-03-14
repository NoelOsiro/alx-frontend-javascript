import getListStudents from '../0x03-ES6_data_manipulation/0-get_list_students';

/**
 * Retrieve a list of students.
 * @returns {Array} An array of student objects.
 */
describe('getListStudents function', () => {
  it('returns an array', () => {
    expect.hasAssertions();
    const result = getListStudents();
    expect(Array.isArray(result)).toBe(true);
  });

  it('returns an array of objects', () => {
    expect.hasAssertions();
    const result = getListStudents();
    expect.assertions(result.length);
    result.forEach((item) => {
      expect(typeof item).toBe('object');
    });
  });

  it('returns objects with correct attributes', () => {
    expect.hasAssertions();
    const result = getListStudents();
    result.forEach((item) => {
      expect(item).toMatchObject({
        id: expect.any(Number),
        firstName: expect.any(String),
        location: expect.any(String),
      });
    });
  });

  it('returns objects in the correct order', () => {
    expect.hasAssertions();
    const expectedOrder = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
    const result = getListStudents();
    expect(result).toStrictEqual(expectedOrder);
  });
});
