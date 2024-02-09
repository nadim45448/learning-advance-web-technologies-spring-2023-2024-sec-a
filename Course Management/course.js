"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course() {
        this.courses = [];
    }
    Course.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("Course added: ".concat(course));
    };
    return Course;
}());
exports.default = Course;
