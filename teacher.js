let person = require('./script');

class Teacher extends person.Person {
    constructor(name, age, gendor, interests, subject) {
        super(name, age, gendor, interests);
        this.subject = subject;
    };
};


exports.Teacher = Teacher;