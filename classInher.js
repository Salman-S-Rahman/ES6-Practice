
class Students {
    constructor(id, name) {
        this.studentId = id;
        this.studentName = name;
    }
}

// let student1 = new Students(1, "Mohib Jan");
// console.log(student1);

class Student extends Students {
    constructor(subject, name, id) {
        super(id, name)
        this.subjectName = subject;
    }
}


let student2 = new Student("EEE", "Taskin Asghar", 44);
console.log(student2);