# Notes and Curriculum App

This React application allows users to view a list of notes and a web development curriculum. Users can add new notes and filter between viewing all notes or just the important ones.

## Features

- **Notes Management:** Add new notes, filter between all and important notes.
- **Curriculum Display:** Displays a list of web development courses, including the number of exercises per part.
- **State Management:** Uses React's `useState` hook to manage the state of notes and filtering functionality.

## Components

### `App.jsx`

The main component that renders the courses and notes, manages state for notes, and includes the filtering mechanism.

### `Filter.jsx`

A component that toggles between showing all notes and only important notes. The toggle button dynamically changes its label based on the current state.

```jsx
const Filter = ({ showAll, setShowAll }) => {
  return (
    <div>
      <button onClick={() => setShowAll((currentValue) => !currentValue)}>
        show {showAll ? "important" : "all"}
      </button>
    </div>
  );
};
```
