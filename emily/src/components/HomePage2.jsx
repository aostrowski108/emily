import React from 'react';
import './HomePage2.css';

// Import your photos (ensure these paths match your project structure)
import photo1 from './tomato.JPG';
import photo2 from './drawbutnot.JPG';
import photo6 from './foods.JPG';
import photo4 from './salad.JPG';
import photo5 from './beaut.JPG';
import photo3 from './bread.JPG';
import photo7 from './corn.JPG';

const HomePage2 = () => {
  return (
    <div className="landing-page">
      {/* Collage Background Images */}
      <img src={photo1} className="background-image image1" alt="background" />
      <img src={photo7} className="background-image image2" alt="background" />
      <img src={photo3} className="background-image image3" alt="background" />
      <img src={photo4} className="background-image image4" alt="background" />
      <img src={photo5} className="background-image image5" alt="background" />
      <img src={photo6} className="background-image image6" alt="background" />
    </div>
  );
};

export default HomePage2;





// import React from 'react';
// import './HomePage2.css';
// import smallLogo from './small_logo2.png';

// // MUI components
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

// const pages = ["About", "Past Menus", "Newsletter"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       {/* ---------- NAVIGATION / APP BAR ---------- */}
//       <ResponsiveAppBar />
//       <div className="above-hero-text">
//         <h1>
//           Take a seat at <span className="cursive-word">your</span>
//         </h1>
//         <h1 className="table-styled">Table</h1>
//       </div>
//       {/* Other content can go here */}
//     </div>
//   );
// };

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="fixed" sx={{ backgroundColor: "#7c0a02", zIndex: 1201 }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* LOGO on the LEFT side */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               mr: 2,
//               cursor: { xs: "pointer", md: "default" },
//             }}
//             onClick={(e) => {
//               if (window.innerWidth < 900) {
//                 handleOpenNavMenu(e);
//               }
//             }}
//           >
//             <img
//               src={smallLogo}
//               alt="Burnt & Cream Logo"
//               style={{ height: "70px", marginRight: "8px" }}
//             />
//           </Box>

//           {/* Mobile: menu icon & site title */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               onClick={handleOpenNavMenu}
//               sx={{ cursor: "pointer", pl: 2 }}
//             >
//             </Typography>

//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//                 "& .MuiPaper-root": {
//                   boxShadow: "none",
//                 },
//                 "& .MuiListItemIcon-root": {
//                   display: "none",
//                 },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Small screens: show logo text in the center (optional) */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="div"
//             sx={{
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontWeight: 700,
//               letterSpacing: ".1rem",
//             }}
//           >
//           </Typography>

//           {/* Desktop: top-level buttons */}
//           <Box className="nav-links">
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 className="nav-button"
//                 color="inherit"
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* -- Right Side Icons -- */}
//           <IconButton
//             size="large"
//             aria-label="main navigation"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "right",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//           >
//             {pages.map((page) => (
//               <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">{page}</Typography>
//               </MenuItem>
//             ))}
//           </Menu>

//           {/* Right Section: user settings (avatar) */}
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="User Avatar" src="" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default HomePage;