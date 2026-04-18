import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Student ID: {id}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default StudentDetails;