"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from "@mui/material/useMediaQuery"; // Import useMediaQuery
import Select, { SelectChangeEvent } from "@mui/material/Select";

const pages = [
  {
    name: "Start Page",
    link: "/",
  },
  {
    name: "Simulation config",
    link: "/simulationconfig",
  },
  {
    name: "Landing Page config",
    link: "/landingpageconfigure",
  },
  {
    name: "Simulations",
    link: "/simulations",
  },
  {
    name: "Deployments",
    link: "/diployments",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [developmentMode, setDevelopmentMode] = React.useState(true);
  const [select, setSelect] = React.useState("");
  const [activePage, setActivePage] = React.useState(
    localStorage.getItem("activePage") || ""
  );
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };
  const toggleDevelopmentMode = () => {
    setDevelopmentMode((prevMode) => !prevMode);
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (pageName: any) => {
    setActivePage(pageName);
    handleCloseNavMenu();
    localStorage.setItem("activePage", pageName);
  };
  const isMobileView = useMediaQuery("(max-width:1200px)");
  React.useEffect(() => {
    setActivePage(localStorage.getItem("activePage") || "");
  }, []);
  return (
    <>
      <AppBar position="static" sx={{ display: "flex" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <Box>
              <Link href="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    mr: 2,
                    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                    fontWeight: 800,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Simulation
                </Typography>
              </Link>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: isMobileView ? "flex" : "none" },
                }}
              >
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
                {/* mobile menu */}
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
                    display: {
                      xs: isMobileView ? "block" : "none",
                      md: "block",
                    },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link key={page.name} href={page.link}>
                        {page.name}
                      </Link>{" "}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: isMobileView ? "flex" : "none" },
                flexGrow: 1,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              <Link href="/">Simulation</Link>{" "}
            </Typography>
            <Box
              sx={{
                flexGrow: "1",
                display: { xs: isMobileView ? "none" : "flex" },
                marginLeft: "4rem",
              }}
            >
              {pages.map((page, index) => (
                <Link key={page.name} href={page.link}>
                  <Button
                    key={page.name}
                    onClick={() => handleClick(page.name)}
                    sx={{
                      color: "white",
                      display: "block",
                      whiteSpace: "nowrap",
                      fontWeight: activePage === page.name ? "bold" : "normal",
                      textTransform: "none",
                    }}
                  >
                    {page.name}
                  </Button>{" "}
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 1,
              }}
            >
              {activePage !== "Start Page" && (
                <FormGroup>
                  <FormControlLabel
                    sx={{ whiteSpace: "nowrap" }}
                    control={
                      <Switch
                        checked={developmentMode}
                        onChange={toggleDevelopmentMode}
                        color="secondary"
                      />
                    }
                    label="Development Mode"
                  />
                </FormGroup>
              )}
              {activePage !== "Start Page" && (
                <FormControl
                  sx={{
                    minWidth: 95,
                    maxHeight: 35,
                    backgroundColor: "#D6D6D4",
                    borderRadius: "6px",
                    marginX: { md: "40px", sm: "20px" },
                  }}
                >
                  <Select
                    value={select}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ maxHeight: 38 }}
                  >
                    <MenuItem value="">IPL</MenuItem>
                    <MenuItem value={20}>HELL</MenuItem>
                    <MenuItem value={30}>ANT</MenuItem>
                  </Select>
                </FormControl>
              )}{" "}
            </Box>
            <Box sx={{ flexGrow: 0, xs: { display: "block" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/download.jpeg" />
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
            </Box>{" "}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
