import { Link } from 'react-router-dom';
// import '/styles/styles.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="notfound-button">Go Home</Link>
    </div>
  );
}
