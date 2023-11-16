import { Seq, fromJS } from 'immutable';

export default function printBestStudents(object) {
  const studentsSeq = Seq(fromJS(object));
  const bestStudents = studentsSeq.filter((student) => student.get('score') >= 70);
  const formattedBestStudents = bestStudents.map((student) => student
    .update('firstName', (firstName) => firstName.charAt(0).toUpperCase() + firstName.slice(1))
    .update('lastName', (lastName) => lastName.charAt(0).toUpperCase() + lastName.slice(1))
  )
    .toJS();
  console.log(formattedBestStudents);
}
