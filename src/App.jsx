import { useContext, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)
  setLocalStorage()

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: admin}))
    } else if (authData && authData.employees) {
      const employeesArray = Array.isArray(authData.employees)
        ? authData.employees
        : Object.values(authData.employees);
      const employee = employeesArray.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("Employee")
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: employee}))
      }
    }
     else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUser}  /> : null)}
    </>
  );
}

export default App;
