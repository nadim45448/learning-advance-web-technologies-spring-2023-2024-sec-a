"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.enrolledCourses = [];
    }
    Student.prototype.enroll = function (course) {
        this.enrolledCourses.push(course);
        console.log("".concat(this.name, " enrolled in ").concat(course));
    };
    return Student;
}());
exports.default = Student;
