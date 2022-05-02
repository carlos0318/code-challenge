const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/v1/students", (req, res) => {
    res.json(StudentsController.getAllStudents());
});

app.get("/v1/students/emails", (req, res) => {
    res.json(StudentsController.getStudentsByHaveCertification());
});

app.get("/v1/students/credits", (req, res) => {
    res.json(StudentsController.getStudentsBy500Credits());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});