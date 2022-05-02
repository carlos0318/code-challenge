const Reader = require("../../lib/utils/reader");
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

    test("getStudentsBy500Credits", () => {
        const data = Reader.readJsonFile("test/data/test.json");
        const students = StudentService.getStudentsBy500Credits(data);
        expect(students.length).toBe(3);
    });
});