
import StudentCard from "./Components/StudentCard";
import { students } from "../../backend/database/student"
import './App.css'

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      {students.map((student) => (
        <StudentCard
        key={student.id} 
        name={student.name} 
        email={student.email}
        enrolled={student.enrolled}

        />
      ))}

    </div>
  );
}




export default App
