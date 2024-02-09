import Student from './student';

class Teacher {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: string) {
    console.log(`${this.name} added course: ${course}`);
  }

  seeStudentInfo(student: Student) {
    console.log(`Student: ${student}`);
    console.log(`Enrolled Courses: ${student.enrolledCourses}`);
  }
}

export default Teacher;
