import React from 'react';
import { 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <Card className="user-card" elevation={3}>
      <Box className="user-card-media-container">
        <CardMedia
          component="img"
          className="user-card-media"
          image={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
        />
      </Box>
      <CardContent className="user-card-content">
        <Typography variant="h6" component="div" className="user-card-name">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="user-card-email">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="user-card-id">
          ID: {user.id}
        </Typography>
      </CardContent>
      <CardActions className="user-card-actions">
        <Button 
          size="small" 
          color="primary" 
          startIcon={<EditIcon />}
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button 
          size="small" 
          color="error" 
          startIcon={<DeleteIcon />}
          onClick={onDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;