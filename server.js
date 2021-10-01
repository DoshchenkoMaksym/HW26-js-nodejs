const student = require('./student');
const teacher = require('./teacher');

let newStudent = new student.Student('Nik', 23, 'male', 'Like sport');
let newTeacher = new teacher.Teacher('Vasya', 33, 'male', 'Like football', 'Programming');
console.log(newStudent, newTeacher)
