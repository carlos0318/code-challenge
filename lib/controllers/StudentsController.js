const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentsController {
    static getAllStudents() {
        const data = Reader.readJsonFile("data/visualstudents.json");
        return StudentService.getAllStudents(data);
    }

    static getStudentsByHaveCertification() {
        const data = Reader.readJsonFile("data/visualstudents.json");
        return StudentService.getStudentsByHaveCertification(data);
    }

    static getStudentsBy500Credits() {
        const data = Reader.readJsonFile("data/visualstudents.json");
        return StudentService.getStudentsBy500Credits(data);
    }
}

module.exports = StudentsController;