import React from 'react';
import styles from './homePageStyles';
import './HomePage.css';

import heroImage from "./nicetable.png"; // Replace with your own image
import smallLogo from './small_logo2.png'

// MUI compononets
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ["About", "Past Menus", "Newsletter"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HomePage = () => {
    return (
        <div className="landing-page">

        {/* ---------- NAVIGATION / APP BAR ---------- */}
        <ResponsiveAppBar />
        <div className="above-hero-text">
        <h1>
            Take a seat at <span className="cursive-word">your</span>
        </h1>
        <h1 className="table-styled">Table</h1>
        </div>
  
        {/* ---------- HERO SECTION ---------- */}
          <div className="hero-wrapper">
             <img src={heroImage} className="hero-img" />
          {/* <div className="hero-content">
            <h1 className="hero-title">
              Private Chef Experience<br /> Where Everyone<br />Has a Seat At the<br />
              <span className="table-word">Table</span>
            </h1>
          </div> */}
        </div>
        </div>
  
    );
  };


function ResponsiveAppBar() {
    // Remove `: null | HTMLElement` if using plain JavaScript
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);<ResponsiveAppBar />
      };
      
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#7c0a02", zIndex: 10 }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            {/* LOGO on the LEFT side */}
            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mr: 2,
                cursor: { xs: "pointer", md: "default" }, // pointer only on mobile
                }}
                onClick={(e) => {
                if (window.innerWidth < 900) {
                    // Only allow dropdown on mobile (< md breakpoint)
                    handleOpenNavMenu(e);
                }
                }}
            >
                <img
                    src={smallLogo}
                    alt="Burnt & Cream Logo"
                    style={{ height: "70px", marginRight: "8px" }}
                />
                {/* If you still want text next to the logo: */}
            </Box>

            {/* Mobile: menu icon & site title */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                {/* Clickable "Table" text to open mobile dropdown */}
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    onClick={handleOpenNavMenu}
                    sx={{ cursor: "pointer", pl: 2 }}
                >
                </Typography>

                {/* Mobile Menu */}
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiPaper-root": {
                        boxShadow: "none", // optional styling
                    },
                    // Remove unwanted dropdown icons globally within this Menu
                    "& .MuiListItemIcon-root": {
                        display: "none",
                    },
                    }}
                >
                    {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>

            {/* Small screens: show logo text in the center (optional) */}
            <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                }}
            >
            </Typography>

            {/* Desktop: top-level buttons */}
            <Box className="nav-links">
            {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                className="nav-button"
                color="inherit"
                >
                {page}
                </Button>
            ))}
            </Box>

            
            {/* -- Right Side Icons -- */}
            {/* Hamburger Menu */}
            <IconButton
                size="large"
                aria-label="main navigation"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ mr: 2 }}  // Add some margin-right so it’s not flush against the avatar
            >
                <MenuIcon />
            </IconButton>
            
            {/* Menu that opens when clicking Hamburger */}
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                ))}
            </Menu>

            {/* Right Section: user settings (avatar) */}
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}

export default HomePage;
