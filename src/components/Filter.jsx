const Filter = ({ showAll, setShowAll }) => {
  return (
    <div>
      <button onClick={() => setShowAll((currentValue) => !currentValue)}>
        show {showAll ? "important" : "all"}
      </button>
    </div>
  );
};

export default Filter;
