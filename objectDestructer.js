
var studentDetails = {
    name: "Taskin Asghar",
    id: 44,
    study: {
        university: "AIUB",
        subject: "EEE"
    },
    certificate: ["HTML", "CSS", "JS", "React Js", "Redux"]
}
let { name, id, study, certificate } = studentDetails;

console.log(name);
console.log(id);
console.log(study.subject);
console.log(certificate[3]);