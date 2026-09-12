import React, { useState } from "react";
import RestaurantMenu from "./Resturant"; 
import StudentAttendance from "./StudentAttandence"; 

export default function App() {
 
  const [activeScreen, setActiveScreen] = useState("menu"); 

  return (
    <div style={{ 
      backgroundColor: "#ffe4e1", 
      minHeight: "100vh", 
      padding: "30px",
      fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive, sans-serif", // Cute girly font
      color: "#c2185b" 
    }}>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
        <button 
          onClick={() => setActiveScreen("menu")}
          style={{
            backgroundColor: activeScreen === "menu" ? "#e91e63" : "#f48fb1",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "2px 4px 8px rgba(233, 30, 99, 0.3)",
            transition: "0.3s"
          }}
        >
          🌸 Restaurant Menu
        </button>

        <button 
          onClick={() => setActiveScreen("attendance")}
          style={{
            backgroundColor: activeScreen === "attendance" ? "#e91e63" : "#f48fb1",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "2px 4px 8px rgba(233, 30, 99, 0.3)",
            transition: "0.3s"
          }}
        >
          🎀 Student Attendance
        </button>
      </div>

   
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "20px",
        maxWidth: "700px",
        margin: "0 auto",
        boxShadow: "0 10px 20px rgba(233, 30, 99, 0.15)",
        border: "2px dashed #f48fb1"
      }}>
        
        
        {activeScreen === "menu" ? <RestaurantMenu /> : <StudentAttendance />}
        
      </div>

    </div>
  );
}