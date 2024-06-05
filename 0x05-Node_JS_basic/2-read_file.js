const fs = require('fs');
/*
 * Counts the students in a csv data file.
 * @param {string} dataPath - path to the csv file
 */

const countStudents = (dataPath) => {
  try {
    fs.readFileSync(dataPath, 'utf8');
  } catch (err) {
    throw new Error('cannot load the database');
  }

  const fileLines = fs.readFileSync(dataPath, 'utf8').trim().split('\n');

  const studentGroups = {};
  const dbFields = fileLines[0].split(',');
  const studentNames = dbFields.slice(0, dbFields.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }

    const studentEntries = studentNames.map((Name, idx) => [
      Name,
      studentValues[idx],
    ]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }
  const totalStudents = Object.values(studentGroups).reduce(
    (sum, group) => sum + group.length,
    0,
  );
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(
      `Number of students in ${field}: ${group.length}. List ${studentNames}`,
    );
  }
};

module.exports = countStudents;
