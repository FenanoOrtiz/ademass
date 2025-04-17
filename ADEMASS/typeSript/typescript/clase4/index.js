"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
}
class Teacher extends User {
    constructor(name, course) {
        super();
        this.isDirector = true; //readonly permite que ese valor
        this.role = 'teacher';
        this.name = name;
        this.course = course;
    }
    // asignado a isDirector no se pueda cambiar
    getDataUser() {
        console.log(Object.assign({}, this //muestra toda la informacion
        ));
    }
}
class Student extends User {
    constructor(name) {
        super();
        this.courses = [];
        this.role = 'student';
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    getDataUser() {
        console.log(Object.assign({}, this));
    }
}
const Profe = new Teacher('Fernando', 'Electro');
Profe.getDataUser();
const newStudent = new Student('JUAN ANDRES ');
newStudent.addCourse('Matematicas');
newStudent.getDataUser();
newStudent.addCourse('Sociologia');
newStudent.getDataUser();
newStudent.addCourse('Física');
newStudent.getDataUser();
