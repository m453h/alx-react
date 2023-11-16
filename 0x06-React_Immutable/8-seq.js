import { Seq, fromJS } from 'immutable';

export default function printBestStudents(object) {
  const studentsSeq = Seq(fromJS(object));
  const bestStudents = studentsSeq
    .filter(function(student) {
      return student.get('score') >= 70;
    })
    .map(function(student) {
      return student
        .update('firstName', function(firstName) {
          return firstName.charAt(0).toUpperCase() + firstName.slice(1);
        })
        .update('lastName', function(lastName) {
          return lastName.charAt(0).toUpperCase() + lastName.slice(1);
        });
    })
    .toJS();

  console.log(bestStudents);
}
