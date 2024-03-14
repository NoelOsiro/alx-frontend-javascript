// Write a function named getStudentsByLocation that returns an array of students who are located in a specific city.
const getStudentsByLocation = (students, city) => (
  students.filter((student) => student.location === city));
export default getStudentsByLocation;
