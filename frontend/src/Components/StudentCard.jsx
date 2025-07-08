

const StudentCard = ({ name, email, enrolled }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Status: {enrolled ? "Enrolled " : "Not Enrolled "}</p>
    </div>
  );
};


export default StudentCard;
