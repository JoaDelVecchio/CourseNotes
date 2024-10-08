import "./App.css";
import { useState } from "react";
import Course from "./components/Course.jsx";
import Note from "./components/Note.jsx";
import Form from "./components/Form.jsx";
import Filter from "./components/Filter.jsx";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotes = [...notes, { id: notes.length, note: newNote }];
    setNotes(newNotes);
    setNewNote("");
  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  return (
    <div>
      <h1>Web development curriculum</h1>
      <h2>Courses</h2>
      <ul>
        {courses.map((course, i) => (
          <Course key={i} course={course} />
        ))}
      </ul>
      <h2>Notes</h2>
      <ul>
        {notes
          .filter((note) => (showAll ? true : note.important))
          .map((note) => (
            <Note key={note.id} note={note} />
          ))}
      </ul>
      <Form
        addNote={handleSubmit}
        handleNoteChange={handleNoteChange}
        newNote={newNote}
      />
      <Filter showAll={showAll} setShowAll={setShowAll} />
    </div>
  );
};

export default App;
