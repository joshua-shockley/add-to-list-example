import React, { useState } from "react";

function StudentForm(props) {
  const [student, setStudent] = useState({
    name: "",
    identity: "",
    image: "",
    age: "",
    bestfriend: ""
  });

  const handleChanges = event => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("hello");
    const newStudent = {
      ...student,
      id: Date.now()
    };
    props.addStudent(newStudent);
    setStudent({
      name: "",
      identity: "",
      img: "",
      age: "",
      bestfriend: ""
    });
    props.history.push("/"); //this part pushes student to StudentList
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="name"
        value={student.name}
        onChange={handleChanges}
      />
      <input
        name="identity"
        placeholder="identity"
        value={student.identity}
        onChange={handleChanges}
      />
      <input
        name="image"
        placeholder="image"
        value={student.image}
        onChange={handleChanges}
      />
      <input
        name="age"
        placeholder="age"
        value={student.age}
        onChange={handleChanges}
      />
      <input
        name="bestfriend"
        placeholder="bestfriend"
        value={student.bestfriend}
        onChange={handleChanges}
      />
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default StudentForm;
