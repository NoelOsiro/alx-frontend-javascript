const getListStudentIds = (students) => {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }
  // Map over the array of objects and extract the ids
  return students.map((student) => student.id);
};
export default getListStudentIds();
