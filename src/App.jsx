import { BrowserRouter, Route, Routes, Link, useLocation, redirect, Navigate } from "react-router";
import "./App.css";
import AutomationForTasks from "./AutomationForTasks"; // Adjust path if needed
import ProfileQuestionAutomation from "./ProfileQuestion";
import IndependenceFormAutomation from "./IndependenceQuestion";

// Sidebar Component
const Sidebar = () => {
  const location = useLocation(); // Get current route

  const menuItems = [
    { path: "/tasks", label: "Task Automation" },
    { path: "/profile-questions", label: "Profile Questions" },
    { path: "/independence-questions", label: "Independence Questions" },
  ];

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Automation Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.path} style={{ marginBottom: "15px" }}>
            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: location.pathname === item.path ? "#007bff" : "#555",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                display: "block",
                padding: "10px",
                backgroundColor: location.pathname === item.path ? "#e9ecef" : "transparent",
                borderRadius: "4px",
                transition: "all 0.3s",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div
          style={{
            marginLeft: "250px", // Match sidebar width
            padding: "20px",
            width: "calc(100% - 250px)",
            minHeight: "100vh",
            backgroundColor: "#fff",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/tasks" replace />} />
            <Route path="/tasks" element={<AutomationForTasks />} />
            <Route path="/profile-questions" element={<ProfileQuestionAutomation />} />
            <Route path="/independence-questions" element={<IndependenceFormAutomation />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
