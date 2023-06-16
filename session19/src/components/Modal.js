import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, MenuItem, Select, Typography, styled } from '@mui/material';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      group: '',
      id: 12,
      status: '',
    };
  }

  componentDidMount() {
    const { editMode, dataToEdit } = this.props;
    if (editMode) {
      this.setState({
        name: dataToEdit.name,
        username: dataToEdit.username,
        email: dataToEdit.email,
        group: dataToEdit.group,
        status: dataToEdit.status,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { editMode, modalValue, dataToEdit } = this.props;
    if (editMode !== prevProps.editMode || modalValue !== prevProps.modalValue) {
      if (editMode) {
        this.setState({
          group: dataToEdit.group,
          status: dataToEdit.status,
        });
      } else {
        this.setState({
          group: '',
          status: '',
        });
      }
    }
  }

  resetState = () => {
    this.setState({
      username: '',
      name: '',
      email: '',
      group: ' ',
      status: ' ',
    });
  };

  saveUserEdit = () => {
    const { editUser, handleEditMode, toggleModal, dataToEdit } = this.props;
    const { name, username, email, group, status } = this.state;

    const newUserData = {
      name,
      username,
      email,
      group,
      id: dataToEdit.id,
      status,
      createdOn: dataToEdit.createdOn,
    };

    editUser(newUserData);
    handleEditMode();
    toggleModal();
  };

  addUser = () => {
    const { addNewUser, toggleModal } = this.props;
    const { name, username, email, group, id, status } = this.state;

    const userObj = {
      name,
      username,
      email,
      group,
      id,
      status,
      createdOn: `${new Date()}`.slice(4, 15),
    };

    this.resetState();
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));

    addNewUser(userObj);
    toggleModal();
  };

  handleClose = () => {
    const { handleEditMode, toggleModal, editMode } = this.props;
    toggleModal();
    this.resetState();

    if (editMode) {
      handleEditMode();
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { modalValue, editMode } = this.props;
    const { name, username, email, group, status } = this.state;

    const BlackTextButton = styled(Button)(({ theme }) => ({
      color: '#000',
      border: `1px solid ${theme.palette.grey[500]}`,
      margin: '20px 20px 10px 0',
      fontSize: '17px',
      textTransform: 'capitalize',
      fontWeight: 'bold',
    }));

    return (
      <div>
        <Dialog sx={{ minHeight: 'fit-content' }} open={modalValue} onClose={this.handleClose}>
          {!editMode ? (
            <DialogTitle sx={{ bgcolor: '#050e2d', color: 'white', fontSize: '26px', padding: '24px', marginBottom: '25px' }}>Add New User</DialogTitle>
          ) : (
            <DialogTitle sx={{ bgcolor: '#050e2d', color: 'white', fontSize: '26px', padding: '24px', marginBottom: '25px' }}>Edit User</DialogTitle>
          )}
          <DialogContent sx={{ bgcolor: '#f8fafb', borderBottom: '1px solid #dbdee6' }}>
            <FormControl fullWidth>
              <Typography variant="h6" style={{ color: 'black' }}>
                Full Name
              </Typography>
              <TextField onChange={this.handleChange} value={name} required id="name" placeholder="Enter full name" sx={{ width: '100%', mt: '5px' }} />
            </FormControl>

            <FormControl fullWidth sx={{ mt: '20px' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                User Name
              </Typography>
              <TextField required value={username} onChange={this.handleChange} id="username" placeholder="Enter username" sx={{ width: '100%', mt: '5px' }} />
            </FormControl>

            <FormControl fullWidth sx={{ mt: '20px' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                Email Address
              </Typography>
              <TextField required id="email" value={email} onChange={this.handleChange} placeholder="Email Address" sx={{ width: '100%', mt: '5px' }} />
            </FormControl>

            <FormControl fullWidth sx={{ mt: '20px' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                User Group
              </Typography>
              <Select value={group} onChange={this.handleChange} required defaultValue="User Group">
                <MenuItem disabled value=" ">
                  <Typography sx={{ opacity: '0.5' }}>Choose User Group</Typography>
                </MenuItem>
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Head Office">Head Office</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: '20px', mb: '20px' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                Assign Profile
              </Typography>
              <Select value={status} onChange={this.handleChange} required>
                <MenuItem disabled value=" ">
                  <Typography sx={{ opacity: '0.5' }}>Choose Profile</Typography>
                </MenuItem>
                <MenuItem value="locked">Locked</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ cursor: 'pointer' }} onClick={this.resetState}>
              <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline', marginLeft: '20px', fontSize: '18px' }}>Reset Fields</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <BlackTextButton onClick={this.handleClose} variant="outlined">
                Cancel
              </BlackTextButton>
              {!editMode ? (
                <Button
                  size="large"
                  sx={{
                    '&:hover': { backgroundColor: '#22a565' },
                    margin: '20px 20px 10px 0',
                    fontSize: '17px',
                    color: 'white',
                    bgcolor: '#22a565',
                    textTransform: 'capitalize',
                  }}
                  onClick={this.addUser}
                >
                  Add User
                </Button>
              ) : (
                <Button
                  size="large"
                  sx={{
                    '&:hover': { backgroundColor: '#22a565' },
                    margin: '20px 20px 10px 0',
                    fontSize: '17px',
                    color: 'white',
                    bgcolor: '#22a565',
                    textTransform: 'capitalize',
                  }}
                  onClick={this.saveUserEdit}
                >
                  Edit User
                </Button>
              )}
            </Box>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Modal;
