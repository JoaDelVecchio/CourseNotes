const Form = ({ addNote, handleNoteChange, newNote }) => {
  return (
    <div>
      <form onSubmit={addNote}>
        <div>
          Add new note{" "}
          <input type="text" value={newNote} onChange={handleNoteChange} />
        </div>
        <button type="submit" onClick={addNote}>
          Add note
        </button>
      </form>
    </div>
  );
};

export default Form;
