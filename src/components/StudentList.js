import React from "react";
import Student from "./Student";

function StudentList(props) {
  return (
    <div className="class-list">
      <h1>Hogwarts Students:</h1>
      {console.log(props)}
      {props.studentList.map((student, i) => (
        <Student key={i} student={student} />
      ))}
      {/* {props.studentList.map((student, i) => (
        <Student key={i} student={student} />
      ))} */}
    </div>
  );
}

export default StudentList;
