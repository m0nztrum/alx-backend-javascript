/*
 * returns the sum of ids of a list of students
 */

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (preStudent, curStudent) => preStudent.id || preStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
