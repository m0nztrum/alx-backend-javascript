/*
 * Retrives students in a given location
 * @param students - The list of students
 * @param city - The location of the student
 */

export default function getStudentByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
