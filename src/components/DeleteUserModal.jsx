import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText,
  DialogActions, 
  Button, 
  CircularProgress,
  Alert,
  Box,
  Avatar,
  Typography
} from '@mui/material';
import { deleteUser } from '../services/api';
import '../styles/Modal.css';

const DeleteUserModal = ({ open, user, onClose, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await deleteUser(user.id);
      onDelete();
    } catch (err) {
      setError('Failed to delete user. Please try again.');
      console.error('Error deleting user:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle>Delete User</DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" className="modal-error">
            {error}
          </Alert>
        )}
        
        <Box className="modal-avatar-container">
          <Avatar
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            sx={{ width: 80, height: 80, mb: 2 }}
          />
        </Box>
        
        <Typography variant="h6" gutterBottom align="center">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
          {user.email}
        </Typography>
        
        <DialogContentText sx={{ mt: 3 }}>
          Are you sure you want to delete this user? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={onClose} color="primary" disabled={loading}>
          Cancel
        </Button>
        <Button 
          onClick={handleDelete} 
          color="error" 
          variant="contained" 
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserModal;