class Person {
    constructor(name, age, gendor, interests) {
        this.name = name;
        this.age = age;
        this.gendor = gendor;
        this.interests = interests;
    }
};

class Student extends Person {
};

class Teacher  extends Person {
    constructor(name, age, gendor, interests, subject) {
        super(name, age, gendor, interests);
        this.subject = subject;
    };
};

exports.Student = Student;
exports.Teacher = Teacher;
