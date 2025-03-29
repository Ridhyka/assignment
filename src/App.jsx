import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
