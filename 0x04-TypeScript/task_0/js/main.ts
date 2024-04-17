/**
 * Write an interface named Studentthat accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */

const Student1: Student = {
  firstName: 'Elvis',
  lastName: 'Jones',
  age: 20,
  location: 'Paris',
};

const Student2: Student = {
  firstName: 'Joseph',
  lastName: 'Franklyn',
  age: 31,
  location: 'New York',
};

const studentsList: Array<Student> = [Student1, Student2];

/**
 * Displays information about students in a table
 * @param studentsList The list of students to display
 */

export const displayTable = (studentsList: Array<Student>): void => {
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  for (const student of studentsList) {
    const studentRow = document.createElement('tr');
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }
  document.body.insertAdjacentElement('beforeend', table);
};

displayTable(studentsList);
