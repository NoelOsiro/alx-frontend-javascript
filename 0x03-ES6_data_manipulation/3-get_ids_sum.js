const getStudentIdsSum = (students) => (
  // Use the reduce function to calculate the sum of all student ids
  students.reduce((sum, student) => sum + student.id, 0)
);
export default getStudentIdsSum();
