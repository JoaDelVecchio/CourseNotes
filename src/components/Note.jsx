const Note = ({ note, toggleImportanceOf }) => {
  const label =
    note.important == true ? "Make it not important" : "Make it important";
  return (
    <div>
      <li>
        {note.content}{" "}
        <button onClick={() => toggleImportanceOf(note.id)}>{label}</button>
      </li>
    </div>
  );
};

export default Note;
