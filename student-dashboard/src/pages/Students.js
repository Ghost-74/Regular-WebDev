import students from "../data/students.json";
import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h2>Students List</h2>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>
          <Link to={`/students/${student.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Students;