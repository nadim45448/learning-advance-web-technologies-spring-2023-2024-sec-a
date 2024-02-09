import Course from './course';
import Student from './student';
import Teacher from './teacher';

const student = new Student("Nadim Bin Hossain");
const teacher = new Teacher("Al-Amin");
const course = new Course();

course.addCourse("Web technologies");
course.addCourse("Advance Web technologies");


student.enroll("Web technologies");
student.enroll("Advance Web technologies");

teacher.seeStudentInfo(student);
