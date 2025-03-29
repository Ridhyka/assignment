import { Link } from 'react-router-dom';
// import '/styles/styles.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Reqres User Management</h1>
      <p>Manage users efficiently with authentication, CRUD operations, and more.</p>
      <Link to="/login" className="home-button">Get Started</Link>
    </div>
  );
}