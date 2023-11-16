import { Seq } from 'immutable';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function printBestStudents(object) {
  const studentsSeq = Seq(object);
  const filtered = studentsSeq
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName)
    }))
    .toJS();

  console.log(filtered);
}
