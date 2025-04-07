import React from "react";
import styled from "styled-components";
import heroImage from "./tb2.png"; // Replace with your own image
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

    const pages = ["Products", "Pricing", "Blog"];
    const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
            <AppBar position="static" sx={{ backgroundColor: "#7c0a02" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                {/* LOGO on the LEFT side */}
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                    <img
                        src={smallLogo}
                        alt="Burnt & Cream Logo"
                        style={{ height: "70px", marginRight: "8px" }}
                    />
                    {/* If you still want text next to the logo: */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ fontWeight: 700, letterSpacing: ".1rem" }}
                    >
                    </Typography>
                </Box>

                {/* Mobile: menu icon & site title */}
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    {/* Menu icon (hamburger) on mobile */}
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>

                    {/* Mobile Menu (dropdown) */}
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
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
                    Burnt & Cream
                </Typography>

                {/* Desktop: top-level buttons */}
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ color: "white", display: "block" }}
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

const HomePage = () => {
  return (
    <HomeContainer>
      {/* ---------- NAVIGATION / APP BAR ---------- */}
      <ResponsiveAppBar />
      {/* Hero Section */}
      <HeroSection>
        <Overlay />
        <HeroContent>
          <HeroTitle>Private Chef <br /> Experience, <br /> Where Everyone <br /> Has a Seat At the <br />
          <em>Table</em>
          </HeroTitle>
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <AboutHeading>Our Story</AboutHeading>
        <AboutText>
          la la la la la la la 
        </AboutText>
      </AboutSection>

      {/* Highlights / Features Section */}
      <HighlightsSection>
        <HighlightCard>
          <CardTitle>Farm-Fresh Ingredients</CardTitle>
          <CardText>
            Every dish begins with locally sourced produce and sustainably
            raised meats.
          </CardText>
        </HighlightCard>
        <HighlightCard>
          <CardTitle>Bold Flavors</CardTitle>
          <CardText>
            Our chefs blend modern techniques with global inspirations to bring
            unforgettable tastes to your plate.
          </CardText>
        </HighlightCard>
        <HighlightCard>
          <CardTitle>Elegant Ambiance</CardTitle>
          <CardText>
            Enjoy the warmth of burnt red accents and soft lighting for the
            perfect dining experience.
          </CardText>
        </HighlightCard>
      </HighlightsSection>

      {/* Call-to-Action / Footer */}
      <FooterSection>
        <FooterHeading>Indulge in Our Seasonal Specials</FooterHeading>
        <FooterButton>View Menu</FooterButton>
      </FooterSection>
    </HomeContainer>
  );
};

export default HomePage;

/* --------------------------------- STYLES --------------------------------- */

const HomeContainer = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #fef3d8; /* Cream-ish background */
  color: #000;              /* Black text */
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  background: url(${heroImage}) no-repeat;
  background-size: 50%;
  background-position: 52.5% 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*background-color: rgba(139, 0, 0, 0.3);  Burnt red overlay with 0.3 opacity TAKEN OUT */
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-family: "Gudea", sans-serif;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-top: 33rem;
  color: #000000;
  margin-bottom: 0;
`;

const Tablestyled = styled.h2`
    margin-top:0 ;
`;

const HeroSubtitle = styled.h2`
  font-size: 3.3rem;
  font-weight: 300;
  margin-bottom: 2rem;
  margin:0
`;

const HeroButton = styled.button`
  background-color: #8b0000; /* Burnt red */
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #640000; /* Darker burnt red on hover */
  }
`;

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const AboutHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #8b0000; /* Burnt red accent for headings */
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #000;
`;

const HighlightsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #d2b48c; /* Tan background for contrast */
`;

const HighlightCard = styled.div`
  background: #fff;
  max-width: 300px;
  padding: 2rem;
  border-radius: 4px;
  text-align: center;
  flex: 1 1 250px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #8b0000; /* Burnt red accent */
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const FooterSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #000; /* Black background */
  color: #f5f1e6;        /* Cream text on black */
`;

const FooterHeading = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const FooterButton = styled.button`
  background-color: #d2b48c; /* Tan button */
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: #000;
  transition: 0.3s;
  &:hover {
    background-color: #8b0000; /* Burnt red on hover */
    color: #fff;
  }
`;
