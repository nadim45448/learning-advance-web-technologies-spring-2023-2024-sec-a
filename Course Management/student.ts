class Student {
    private name: string;
    public enrolledCourses: string[];
  
    constructor(name: string) {
      this.name = name;
      this.enrolledCourses = [];
    }
  
    enroll(course: string) {
      this.enrolledCourses.push(course);
      console.log(`${this.name} enrolled in ${course}`);
    }
  }
  
  export default Student;
  
