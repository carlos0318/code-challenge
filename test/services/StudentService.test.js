const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentService");

describe("StudentService", () => {
    test("getAllStudents", () => {
        const data = Reader.readJsonFile("test/data/test.json");
        const students = StudentService.getAllStudents(data);
        expect(students.length).toBe(5);
    });

    test("getStudentsByHaveCertification", () => {
        const data = Reader.readJsonFile("test/data/test.json");
        const students = StudentService.getStudentsByHaveCertification(data);
        expect(students.length).toBe(4);
    });
});