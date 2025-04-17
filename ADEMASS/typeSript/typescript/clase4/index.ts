import { v4 as uuidv4 } from 'uuid';

abstract class User{
    private id: string = uuidv4();
    protected name!: string;
    protected role!: 'teacher' | 'student'

    abstract getDataUser(): void
}

class Teacher extends User{
    
    private course!: string;
    constructor(name:string, course:string){
        super();
        this.role= 'teacher';
        this.name = name;
        this.course = course;
        
     }

    private readonly isDirector: boolean = false; //readonly permite que ese valor
     // asignado a isDirector no se pueda cambiar
    public getDataUser(): void {
            console.log({
           ...this  //muestra toda la informacion
        })
    }
}
class Student extends User{
    constructor(name:string  ){
        super()
        this.role = 'student'
        this.name = name;
    }
    private courses: Array<string> = [];

    public addCourse(course:string){
        this.courses.push(course);
    }
    getDataUser(): void {
        console.log({
            ...this
        })
    }
}

const Profe = new Teacher('Fernando', 'Electro')
Profe.getDataUser()

const newStudent = new Student('JUAN ANDRES ')
newStudent.addCourse('Matematicas')
newStudent.getDataUser();
newStudent.addCourse('Sociologia')
newStudent.getDataUser();
newStudent.addCourse('Física')
newStudent.getDataUser();