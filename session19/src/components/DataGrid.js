import React from 'react';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import EditIcon from '@mui/icons-material/Edit';
import HttpsIcon from '@mui/icons-material/Https';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      usernameSearch: '',
      userState: 'any',
      selectedRows: [],
    };
  }

  getRowData = (e) => {
    this.props.togglemodalWithData(e.row);
  };

  searchUsersByAnyKey = (e) => {
    const search = e.target.value;
    this.setState({ search });
    this.props.filterUsers(search, this.state.usernameSearch, this.state.userState);
  };

  handleSearchByUsername = (e) => {
    const usernameSearch = e.target.value;
    this.setState({ usernameSearch });
    this.props.filterUsers(this.state.search, usernameSearch, this.state.userState);
  };

  handleUserStateChange = (e) => {
    const userState = e.target.value;
    this.setState({ userState });
    this.props.filterUsers(this.state.search, this.state.usernameSearch, userState);
  };

  deleteDataOfUsers = () => {
    console.log(this.state.selectedRows);
    this.props.deleteUsers(this.state.selectedRows);
  };

  handleSelectionChange = (newSelection) => {
    this.setState({ selectedRows: newSelection });
  };

  handleDeselectAll = () => {
    this.setState({ selectedRows: [] });
  };

  render() {
    const columns = [
      { field: 'name', headerName: 'Name', width: 270 },
      { field: 'username', headerName: 'User Name', width: 230 },
      { field: 'email', headerName: 'Email Address', width: 350 },
      { field: 'group', headerName: 'Group', width: 220 },
      { field: 'status', headerName: 'Status', width: 170 },
      { field: 'createdOn', headerName: 'Created On', width: 170 },
    ];

    const theme = createTheme({
      components: {
        MuiDataGrid: {
          styleOverrides: {
            cell: {
              fontSize: '17px',
            },
            columnHeader: {
              fontSize: '17px',
              color: '#8c97ad',
            },
            columnHeaders: {
              backgroundColor: '#f8fafb',
            },
          },
        },
      },
    });

    return (
      <div style={{ height: 'fit-content', width: '100%' }}>
        <Box sx={{ bgcolor: 'white', border: '1px solid #dee1e8', borderRadius: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px 0 0px 20px' }}>
            <TextField
              size="small"
              variant="outlined"
              onChange={this.searchUsersByAnyKey}
              value={this.state.search}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ marginLeft: '18px' }}
              size="small"
              variant="outlined"
              placeholder="User Name"
              value={this.state.usernameSearch}
              onChange={this.handleSearchByUsername}
            />

            <Box sx={{ minWidth: 160, marginLeft: '18px' }}>
              <FormControl fullWidth>
                <Select value={this.state.userState} size="small" onChange={this.handleUserStateChange}>
                  <MenuItem selected value="any">
                    Any
                  </MenuItem>
                  <MenuItem value="locked">Locked</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <LocalizationProvider sx={{ paddingTop: '0px' }} dateAdapter={AdapterDayjs}>
              <DemoContainer sx={{ marginLeft: '18px', paddingTop: '0px' }} components={['DatePicker']}>
                <DatePicker slotProps={{ textField: { size: 'small' } }} label={'All Time'} />
              </DemoContainer>
            </LocalizationProvider>

            <Typography sx={{ color: 'blue', marginLeft: '18px' }}>All Filters</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px', paddingLeft: '20px' }}>
              <Typography variant="p" sx={{ marginRight: '10px' }}>{`${this.state.selectedRows.length} selected`}</Typography>
              <Typography variant="p" sx={{ marginRight: '10px' }}>|</Typography>

              <IconButton sx={{ borderRadius: '5px', color: '#51576d', bgcolor: '#e7e9ef', marginRight: '10px' }} variant="contained" color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={this.deleteDataOfUsers} sx={{ borderRadius: '5px', color: '#51576d', bgcolor: '#e7e9ef', marginRight: '10px' }} variant="contained" color="secondary">
                <DoDisturbAltIcon />
              </IconButton>
              <IconButton sx={{ borderRadius: '5px', color: '#51576d', bgcolor: '#e7e9ef', marginRight: '10px' }} variant="contained" color="secondary">
                <HttpsIcon />
              </IconButton>
              <Button sx={{ color: '#51576d', bgcolor: '#e7e9ef', textTransform: 'capitalize', marginRight: '10px' }}>Assign to Profile</Button>
              <Button sx={{ color: '#51576d', bgcolor: '#e7e9ef', textTransform: 'capitalize', marginRight: '10px' }}>Assign to Group</Button>
              <IconButton sx={{ borderRadius: '5px', color: '#51576d', bgcolor: '#e7e9ef', marginRight: '10px' }} variant="contained" color="secondary">
                <MoreVertIcon />
              </IconButton>
              <Typography onClick={this.handleDeselectAll} variant="p" sx={{ margin: '0', marginRight: '10px', textDecoration: 'underline', cursor: 'pointer' }}>Unselect all</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px', paddingLeft: '20px' }}>
              <IconButton sx={{ borderRadius: '5px', color: '#51576d', bgcolor: '#e7e9ef', marginRight: '10px' }} variant="contained" color="secondary">
                <FileDownloadIcon />
              </IconButton>
            </Box>
          </Box>

          <ThemeProvider theme={theme}>
            <DataGrid
              rows={this.props.data}
              columns={columns}
              disableColumnMenu
              pageSizeOptions={[5, 10]}
              onRowClick={this.getRowData}
              checkboxSelection
              rowSelectionModel={this.state.selectedRows}
              onRowSelectionModelChange={this.handleSelectionChange}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
            />
          </ThemeProvider>
        </Box>
      </div>
    );
  }
}

export default DataTable;
