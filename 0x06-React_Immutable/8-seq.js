import { Seq, fromJS } from 'immutable';

export default function printBestStudents(object) {
  const studentsSeq = Seq(fromJS(object));

  const bestStudents = studentsSeq
    .filter((student) => {
      return student.get('score') >= 70;
    })
    .map((student) => {
      return student
        .update('firstName', (firstName) => {
          return firstName.charAt(0).toUpperCase() + firstName.slice(1);
        })
        .update('lastName', (lastName) => {
          return lastName.charAt(0).toUpperCase() + lastName.slice(1);
        });
    }).toJS();

  console.log(bestStudents);
}
