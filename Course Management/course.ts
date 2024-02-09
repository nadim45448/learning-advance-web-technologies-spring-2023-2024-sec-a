class Course {
    private courses: string[];
  
    constructor() {
      this.courses = [];
    }
  
    addCourse(course: string) {
      this.courses.push(course);
      console.log(`Course added: ${course}`);
    }
  }
  
  export default Course;
  
