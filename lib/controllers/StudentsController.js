const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentsController {
    static getAllStudents() {
        const data = Reader.readJsonFile("data/visualpartners.json");
        return StudentService.getAllStudents(data);
    }

    static getAllEmail() {
        const data = Reader.readJsonFile("data/visualpartners.json");
        return StudentService.getStudentsByHaveCertification(data);
    }

    static getStudentsBy500Credits() {
        const data = Reader.readJsonFile("data/visualpartners.json");
        return StudentService.getStudentsBy500Credits(data);
    }
}

module.exports = StudentsController;