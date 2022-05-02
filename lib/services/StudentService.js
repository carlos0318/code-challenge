class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getStudentsByHaveCertification(students) {
        return students.filter(student => student.haveCertification);
    }

    static getStudentsBy500Credits(students) {
        return students.filter(student => student.credits >= 500);
    }
}

module.exports = StudentService;