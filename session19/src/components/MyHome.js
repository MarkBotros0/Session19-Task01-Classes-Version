import React, { Component } from 'react';
import DataGrid from '../components/DataGrid';
import Modal from './Modal';
import { Box, Button, Typography } from '@mui/material';

class MyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      data: [
        { id: 1, name: 'Mark', username: 'marko', email: "marooka@hadasd.com", group: "Office", status: "locked", createdOn: "Dec 10 2022" },
        { id: 2, name: 'Essam', username: 'ezzo', email: "esammezzo@hadasd.com", group: "Manager", status: "active", createdOn: "Dec 10 2022" },
        { id: 3, name: 'Mofid', username: 'mofid11', email: "mofid223@hadasd.com", group: "Head Office", status: "inactive", createdOn: "Dec 10 2022" },
        { id: 4, name: 'Samer', username: 'samoor', email: "samoor@hadasd.com", group: "Office", status: "locked", createdOn: "Dec 10 2022" },
        { id: 5, name: 'Hany', username: 'hon', email: "hanoosh@hadasd.com", group: "Head Office", status: "active", createdOn: "Dec 10 2022" },
        { id: 6, name: 'Rady', username: 'aboreda', email: "aboreda@hadasd.com", group: "Office", status: "inactive", createdOn: "Dec 10 2022" },
        { id: 7, name: 'Kazem', username: 'kazooma', email: "kimzo@hadasd.com", group: "Manager", status: "active", createdOn: "Dec 10 2022" },
        { id: 8, name: 'Ramez', username: 'ramooz', email: "ramooza@hadasd.com", group: "Head Office", status: "active", createdOn: "Dec 10 2022" },
        { id: 9, name: 'Metwally', username: 'mito', email: "metwallymito@hadasd.com", group: "Manager", status: "inactive", createdOn: "Dec 10 2022" },
        { id: 10, name: 'Shaker', username: 'shokshok', email: "shakershokshok@hadasd.com", group: "Office", status: "active", createdOn: "Dec 10 2022" },
        { id: 11, name: 'Hamid', username: 'mido', email: "hamidmido@hadasd.com", group: "Head Office", status: "locked", createdOn: "Dec 10 2022" },
      ],
      filteredData: [],
      dataToEdit: {},
      editMode: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }));
  }

  deleteUsers = (indices) => {
    this.setState(prevState => ({
      data: prevState.data.filter(obj => !indices.includes(obj.id))
    }));
  }

  filterUsers = (searchValue, usernameFilter, userStatus) => {
    const { data } = this.state;
    const filteredArray = data.filter(obj =>
      (searchValue === '' || Object.values(obj).some(value => String(value).toLowerCase().includes(searchValue.toLowerCase()))) &&
      (usernameFilter === '' || obj.username.includes(usernameFilter)) &&
      (userStatus === 'any' || obj.status === userStatus)
    );
    this.setState({
      filteredData: filteredArray
    });
  }

  addNewUser = (newUser) => {
    this.setState(prevState => ({
      data: [...prevState.data, newUser]
    }));
  }

  editUser = (newUserData) => {
    const { data, dataToEdit } = this.state;
    const oldDataIndex = data.indexOf(dataToEdit);
    const newArray = data.map((value, index) => (index === oldDataIndex ? newUserData : value));
    this.setState({
      data: newArray
    });
  }

  togglemodalWithData = (data) => {
    const { editMode } = this.state;
    this.setState({
      openModal: true,
      dataToEdit: data,
      editMode: !editMode
    });
  }

  handleEditMode = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  }

  componentDidMount() {
    const { data } = this.state;
    this.setState({
      filteredData: data
    });
  }

  render() {
    const { openModal, filteredData, dataToEdit, editMode } = this.state;

    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px", marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: "bold" }} variant={"h4"}> User Management</Typography>
          <Button variant={'contained'} color={'success'} onClick={this.toggleModal}>+ Add New</Button>
        </Box>
        <DataGrid
          filterUsers={this.filterUsers}
          deleteUsers={this.deleteUsers}
          togglemodalWithData={this.togglemodalWithData}
          data={filteredData} />
        <Modal
          dataToEdit={dataToEdit}
          editUser={this.editUser}
          handleEditMode={this.handleEditMode}
          editMode={editMode}
          toggleModal={this.toggleModal}
          modalValue={openModal}
          addNewUser={this.addNewUser} />
      </>
    );
  }
}

export default MyHome;
