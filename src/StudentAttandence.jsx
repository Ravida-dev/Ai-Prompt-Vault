import React, { useState } from 'react';

export default function StudentAttendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", present: true },
    { id: 2, name: "Sara", present: false },
    { id: 3, name: "Ahmed", present: true },
    { id: 4, name: "Ayesha", present: false }
  ]);

  const markAttendance = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>2. Student Attendance System</h2>
      <table border="1" style={{ width: '500px', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Status</th>
            <th style={{ padding: '10px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={{ padding: '10px' }}>{student.name}</td>
              <td style={{ padding: '10px', color: student.present ? 'green' : 'red', fontWeight: 'bold' }}>
                {student.present ? "Present" : "Absent"}
              </td>
              <td style={{ padding: '10px' }}>
                <button onClick={() => markAttendance(student.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>
                  Mark Attendance
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}