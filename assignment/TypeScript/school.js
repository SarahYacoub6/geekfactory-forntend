"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    Person.prototype.getRole = function () {
    };
    Person.prototype.getInfo = function () {
        return "My name is " + this.name + ". I am a " + this.getRole() + ".";
    };
    return Person;
}());
exports.Person = Person;
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.getRole = function () {
        return 'Student';
    };
    return Student;
}(Person));
exports.Student = Student;
var Staff = (function (_super) {
    __extends(Staff, _super);
    function Staff(name) {
        return _super.call(this, name) || this;
    }
    Staff.prototype.getRole = function () {
        return 'Staff';
    };
    Staff.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this);
    };
    return Staff;
}(Person));
exports.Staff = Staff;
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.subject = subject;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.getRole = function () {
        return _super.prototype.getRole.call(this);
    };
    Teacher.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (" I teach " + this.subject + ".");
    };
    return Teacher;
}(Staff));
exports.Teacher = Teacher;
