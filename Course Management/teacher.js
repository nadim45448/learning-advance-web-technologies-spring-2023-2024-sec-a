"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype.addCourse = function (course) {
        console.log("".concat(this.name, " added course: ").concat(course));
    };
    Teacher.prototype.seeStudentInfo = function (student) {
        console.log("Student: ".concat(student));
        console.log("Enrolled Courses: ".concat(student.enrolledCourses));
    };
    return Teacher;
}());
exports.default = Teacher;
