import React, { useState, useEffect } from "react";
// import the route and link component
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import students from "./data";
// import components for the routes

import "./styles.css";

export default function App() {
  // usestate hook
  const [studentList, setStudentList] = useState([]);
  // useEffect hook
  useEffect(() => {
    axios
      .get(students)
      .then(res => {
        console.log(res.config.url);
        const list = res.config.url;
        setStudentList(list);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addStudent = student => {
    setStudentList([...studentList, student]);
  };
  // function to add student
  // const addStudent = student => {
  //   setStudentList([...studentList, student]);
  // };

  console.log("rendering");
  return (
    <div className="App">
      <NavLink exact to="/" className="links">
        Student List
      </NavLink>
      />
      <NavLink to="/form" className="links">
        Add New Student
      </NavLink>
      {/* <Route exact path="/" component={StudentList} /> */}
      <Route
        exact
        path="/"
        render={() => <StudentList studentList={studentList} />}
      />
      <Route
        path="/form"
        render={props => (
          <StudentForm
            {...props} //allows for match, history, and push
            setStudentList={setStudentList}
            addStudent={addStudent}
          />
        )}
      />
      {/* <Route path="/form" component={StudentForm} /> */}
      {/* need a route to get to the student list component make sure to pass the student list data you will need it */}
      {/* need another route to the form and pass the props with function to add students */}
    </div>
  );
}
