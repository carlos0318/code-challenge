const Reader = require("../../lib/utils/Reader");
const StudentsController = require("../../lib/controllers/StudentsController");

describe("StudentsController", () => {
    test("getAllStudents", () => {
        const data = Reader.readJsonFile("data/visualpartners.json");
        const result = StudentsController.getAllStudents();
        expect(result).toEqual(data);
    });

    test("getStudentsByHaveCertification", () => {
        const result = StudentsController.getStudentsByHaveCertification();
        expect(result).not.toBeUndefined();
    });

    test("getStudentsBy500Credits", () => {
        const result = StudentsController.getStudentsBy500Credits();
        expect(result).not.toBeUndefined();
    });
});