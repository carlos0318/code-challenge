class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getStudentsByHaveCertification(students) {
        const studentsHaveCertification = students.filter(student => student.haveCertification);
        return studentsHaveCertification.map(student => ({name: student.name, email: student.email}));
    }

    static getStudentsBy500Credits(students) {
        return students.filter(student => student.credits >= 500);
    }
}

module.exports = StudentService;