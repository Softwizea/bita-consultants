// import * as React from "react";
// import { Link } from "react-router-dom";

// import {
//   Grid,
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   Container,
//   MenuItem,
//   Tooltip,
//   InputBase,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";

import logo from "../../assets/Logob.png";
import profile from "../../assets/profile.png";
// import cart from "../../assets/cart.png";

import "./Navbar.css";

// const pages = [
//   { name: "Home", link: "/" },
//   { name: "Services", link: "/category" },
//   { name: "Blogs", link: "/gallery" },
//   { name: "Contact Us", link: "/contactus" },
//   { name: "About Us", link: "/aboutus" },
// ];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function Navbar() {
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
//     <>
//       <Grid
//         sx={{
//           background: "linear-gradient(180deg, #239ff3 0%, #1f6487 100%)",
//           height: "58px",
//           display: "grid",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "white",
//         }}
//       >
//         Any Suitable Text
//       </Grid>
//       <AppBar position="static" sx={{ backgroundColor: "#252121" }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               <img src={logo} width="140px" height="90px" />
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                   justifyContent: "center",
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                     <Link
//                       to={page.link}
//                       textAlign="center"
//                       className="nav-links-mobile"
//                     >
//                       {page.name}
//                     </Link>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>

//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href=""
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               <img src={logo} width="100px" height="88px" />
//             </Typography>
//             <Box
//               sx={{
//                 flexGrow: 0.85,
//                 display: { xs: "none", md: "flex" },
//                 justifyContent: "center",
//               }}
//             >
//               {pages.map((page) => (
//                 <Link
//                   // key={page.name}
//                   // onClick={handleCloseNavMenu}
//                   to={page.link}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                   className="nav-links"
//                 >
//                   {page.name}
//                 </Link>
//               ))}
//             </Box>

//             <Box
//               sx={{
//                 flexGrow: 0.1,
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               {/* <Grid className="searchbar">
//                 <InputBase
//                   sx={{ ml: 1, flex: 1,color:"white",opacity:"1"}}
//                   placeholder="What are you looking for?"
//                   inputProps={{ "aria-label": "What are you looking for?" }}
//                 />
//                 <IconButton
//                   type="submit"
//                   sx={{ p: "10px" }}
//                   aria-label="search"
//                 >
//                   <SearchIcon sx={{ color: "#ffff" }} />
//                 </IconButton>
//               </Grid> */}
//               <Grid>
//                 <Tooltip title="Open settings">
//                   <IconButton
//                     onClick={handleOpenUserMenu}
//                     sx={{ p: 0.5, mb: 0.3 }}
//                   >
//                     <img src={profile} width="28px" />
//                   </IconButton>
//                 </Tooltip>
//                 <Tooltip>
//                   <IconButton sx={{ p: 0.4 }}>
//                     <Link to="/cart">
//                       <img src={cart} width="28px" />
//                     </Link>
//                   </IconButton>
//                 </Tooltip>
//               </Grid>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </>
//   );
// }
// export default Navbar;
import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    // height: '40px',
    marginRight: "10px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorElNav(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Grid
        sx={{
          background: "linear-gradient(180deg, #239ff3 0%, #1f6487 100%)",
          height: "58px",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography> Welcome To Bita Consultants</Typography>
      </Grid>
      <AppBar position="static" sx={{ backgroundColor: "#252121" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
                width: "140px",
              }}
            >
              <img src={logo} width="100%" />
            </Box>
            <Box
              sx={{
                flexGrow: 0.85,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Link
                // key={page.name}
                // onClick={handleCloseNavMenu}
                to="/"
                sx={{ my: 2, color: "white", display: "block" }}
                className="nav-links"
              >
                Home
              </Link>
              <Link
                // key={page.name}
                // onClick={handleCloseNavMenu}
                to="#"
                sx={{ my: 2, color: "white", display: "block" }}
                className="nav-links"
                onClick={handleMenuClick}
              >
                Countries <ArrowDropDownIcon />
              </Link>
              <Menu
                id="services-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                className="menu-services"
              >
                <Grid
                  sx={{  padding: "1rem" }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Typography color="white">
                      Uk
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Typography color="white">
                      Australia
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Typography color="white">Canada</Typography>
                  </MenuItem>
                </Grid>
               
              </Menu>
              <Link
                // key={page.name}
                // onClick={handleCloseNavMenu}
                to="/gallery"
                sx={{ my: 2, color: "white", display: "block" }}
                className="nav-links"
              >
                Gallery
              </Link>
              <Link
                // key={page.name}
                // onClick={handleCloseNavMenu}
                to="/services"
                sx={{ my: 2, color: "white", display: "block" }}
                className="nav-links"
              >
                Services
              </Link>
              {/* <Link
                // key={page.name}
                // onClick={handleCloseNavMenu}
                to="/contactus"
                sx={{ my: 2, color: "white", display: "block" }}
                className="nav-links"
              >
                Contact Us
              </Link> */}
              <Link
                // key={page.name}
                // onClick={handleCloseNavMenu}
                to="/aboutus"
                sx={{ my: 2, color: "white", display: "block" }}
                className="nav-links"
              >
                About Us
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  justifyContent: "center",
                }}
              >
                <MenuItem>
                  <Link to="/" textAlign="center" className="nav-links-mobile">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    textAlign="center"
                    className="nav-links-mobile-serv"
                    onClick={handleMenuClick}
                  >
                    Countries <ArrowRightIcon />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/gallery"
                    textAlign="center"
                    className="nav-links-mobile"
                  >
                    Gallery
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/services"
                    textAlign="center"
                    className="nav-links-mobile"
                  >
                    Services
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/contactus"
                    textAlign="center"
                    className="nav-links-mobile"
                  >
                    Contact Us
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/aboutus"
                    textAlign="center"
                    className="nav-links-mobile"
                  >
                    About Us
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                textDecoration: "none",
                width: "140px",
              }}
            >
              <img src={logo} width="100px" />
            </Box>
            <IconButton
              color="inherit"
              aria-label="Profile"
              className="prop-btn-nav"
            >
              <Link to="/contactus" className="link">
                Get A proposal
              </Link>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
