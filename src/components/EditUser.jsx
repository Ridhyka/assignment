import { useState } from 'react';
import axios from 'axios';
import '../styles/EditUser.css';

export default function EditUser({ user, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://reqres.in/api/users/${user.id}`, formData)
      .then((response) => {
        onUpdate(response.data);
        onClose();
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  return (
    <div className="edit-user-modal">
      <div className="edit-user-container">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <button type="submit" className="save-button">Save</button>
          <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
        </form>
      </div>
    </div>
  );
}