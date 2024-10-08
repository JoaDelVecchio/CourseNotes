const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map((part, index) => (
        <li key={index}>
          {part.name} {part.exercises}
        </li>
      ))}
      <p>
        total of {course.parts.reduce((acum, part) => acum + part.exercises, 0)}{" "}
        exercises
      </p>
    </div>
  );
};

export default Course;
