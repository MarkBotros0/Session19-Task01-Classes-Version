import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Badge, Collapse, InputAdornment, TextField } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../images/Screenshot 2023-06-14 102815.png'
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import Clock from './Clock.js';

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MyLayout(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [list1Open, setList1Open] = React.useState(false);
    const [list2Open, setList2Open] = React.useState(false);
    const [list3Open, setList3Open] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ backgroundColor: 'white', color: 'black' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: "flex" }}>
                        <Typography
                            variant="p"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: "bold", marginRight: "10px" }}
                        >
                            Good Morning!
                        </Typography>

                        <Typography
                            variant="p"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            <Clock />
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: "center" } }}>
                        <IconButton size="large" color="inherit">
                            <HelpOutlineIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <Badge badgeContent={"9+"} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Typography
                            variant="p"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, marginRight: "10px" }}
                        >
                            Nader Amer
                        </Typography>
                        <Typography
                            variant="p"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, borderRadius: "50%", bgcolor: "#bac3ce", padding: "5px" }}
                        >
                            NA
                        </Typography>
                        <IconButton size="large" color="inherit">
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    </Box>


                </Toolbar>
            </AppBar>


            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: "#050e2d"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton sx={{ color: "white" }} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Box sx={{ justifyContent: "center", display: "flex", marginBottom: "30px" }}>
                    <img src={Logo} style={{ width: "60%", }} alt='logo' />
                </Box>

                <Box sx={{ pl: "10px", pr: '10px ' }}>
                    <TextField
                        id="search"
                        type="search"
                        placeholder="Quick Access"
                        value={searchTerm}
                        onChange={setSearchTerm}
                        sx={{ width: '100%', backgroundColor: "white", borderRadius: '20px' }}
                        size='small'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box sx={{ display: "flex", marginTop: "20px", marginLeft: "20px", alignItems: "center" }}>
                    <DashboardIcon sx={{ color: "#838897" }} />
                    <Typography sx={{ marginLeft: "20px", color: "#838897", fontSize: "20px" }}>Dashboard</Typography>
                </Box>

                <Typography sx={{ color: "#838897", margin: "30px 0px 0px 20px", opacity: "0.7", textTransform: "uppercase", fontSize: "14px" }}>Settings</Typography>
                <List>
                    <Box sx={{ pr: "7px", pl: '7px' }}>
                        <ListItemButton onClick={() => setList1Open(!list1Open)}
                            sx={{
                                '&:hover': { backgroundColor: "#22a565" },
                                '&:hover .MuiListItemText-primary': { color: 'white' },
                                bgcolor: list1Open ? "#22a565" : "#050e2d", color: list1Open ? "white" : "#838897"
                            }}>
                            <ListItemText sx={{}} primary={'ATM Settings'} />
                            {list1Open ? <ExpandLess sx={{ color: list1Open ? "white" : "#838897" }} /> : <ExpandMore sx={{ color: list1Open ? "white" : "#838897" }} />}
                        </ListItemButton>
                        <Collapse in={list1Open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding sx={{ bgcolor: list1Open ? "#1e2642" : "#838897" }}>
                                <Link style={{ textDecoration: "none" }} to='/'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Users" />
                                    </ListItemButton>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to='/profiles'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Profiles" />
                                    </ListItemButton>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to='/groups'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Groups" />
                                    </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>
                    </Box>
                    <Box sx={{ pr: "7px", pl: '7px' }}>
                        <ListItemButton onClick={() => setList2Open(!list2Open)}
                            sx={{
                                '&:hover': { backgroundColor: "#22a565", color: "white" },
                                '&:hover .MuiListItemText-primary': { color: 'white' },
                                bgcolor: list2Open ? "#22a565" : "#050e2d", color: list2Open ? "white" : "#838897"
                            }}>
                            <ListItemText sx={{ color: "#838897" }} primary={'Business Setup'} />
                            {list2Open ? <ExpandLess sx={{ color: list1Open ? "white" : "#838897" }} /> : <ExpandMore sx={{ color: list1Open ? "white" : "#838897" }} />}
                        </ListItemButton>
                        <Collapse in={list2Open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link style={{ textDecoration: "none" }} to='/'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Users" />
                                    </ListItemButton>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to='/profiles'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Profiles" />
                                    </ListItemButton>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to='/groups'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Groups" />
                                    </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>
                    </Box>

                    <Box sx={{ pr: "7px", pl: '7px' }}>
                        <ListItemButton onClick={() => setList3Open(!list3Open)}
                            sx={{
                                '&:hover': { backgroundColor: "#22a565" },
                                '&:hover .MuiListItemText-primary': { color: 'white' },
                                bgcolor: list3Open ? "#22a565" : "#050e2d", color: list3Open ? "white" : "#838897"
                            }}>
                            <ListItemText sx={{ color: "#838897" }} primary={'User Management'} />
                            {list3Open ? <ExpandLess sx={{ color: list1Open ? "white" : "#838897" }} /> : <ExpandMore sx={{ color: list1Open ? "white" : "#838897" }} />}
                        </ListItemButton>
                        <Collapse in={list3Open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link style={{ textDecoration: "none" }} to='/'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Users" />
                                    </ListItemButton>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to='/profiles'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Profiles" />
                                    </ListItemButton>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to='/groups'>
                                    <ListItemButton sx={{ pl: 4, textDecoration: "none" }}>
                                        <ListItemText sx={{ color: "#838897" }} primary="Groups" />
                                    </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>
                    </Box>
                    <Box sx={{ pr: "7px", pl: '7px' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ color: "#838897" }} primary={'License Management'} />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </List>      </Drawer>
            <Main open={open} sx={{ bgcolor: "#f8fafb" }}>
                <DrawerHeader />
                {props.children}
            </Main>
        </Box>
    );
}
