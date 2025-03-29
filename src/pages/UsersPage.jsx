import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Pagination, 
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserCard from '../components/UserCard';
import EditUserModal from '../components/EditUserModal';
import DeleteUserModal from '../components/DeleteUserModal';
import { getUsers } from '../services/api';
import '../styles/UsersPage.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const fetchUsers = async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getUsers(pageNum);
      setUsers(response.data.data);
      setFilteredUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = users.filter(user => 
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchTerm, users]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    ));
    setNotification({
      open: true,
      message: 'User updated successfully!',
      severity: 'success'
    });
    setIsEditModalOpen(false);
  };

  const handleUserDeleted = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
    setNotification({
      open: true,
      message: 'User deleted successfully!',
      severity: 'success'
    });
    setIsDeleteModalOpen(false);
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container maxWidth="lg" className="users-container">
      <Box className="users-header">
        <Typography variant="h4" component="h1" className="users-title">
          User Management
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search users..."
          className="search-field"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {error && (
        <Alert severity="error" className="users-alert">
          {error}
        </Alert>
      )}

      {loading ? (
        <Box className="loading-container">
          <CircularProgress />
        </Box>
      ) : (
        <>
          {filteredUsers.length === 0 ? (
            <Box className="no-users-container">
              <Typography variant="h6">
                No users found. Try adjusting your search.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3} className="users-grid">
              {filteredUsers.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <UserCard 
                    user={user} 
                    onEdit={() => handleEditClick(user)}
                    onDelete={() => handleDeleteClick(user)}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          <Box className="pagination-container">
            <Pagination 
              count={totalPages} 
              page={page} 
              onChange={handlePageChange} 
              color="primary" 
              size="large"
            />
          </Box>
        </>
      )}

      {selectedUser && (
        <>
          <EditUserModal
            open={isEditModalOpen}
            user={selectedUser}
            onClose={() => setIsEditModalOpen(false)}
            onUpdate={handleUserUpdated}
          />
          <DeleteUserModal
            open={isDeleteModalOpen}
            user={selectedUser}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={() => handleUserDeleted(selectedUser.id)}
          />
        </>
      )}

      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UsersPage;