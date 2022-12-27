import React from "react";
import { AppBar, Link, Toolbar, Typography, Box, Button, Avatar, IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import { Container, display } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu"
import { capitalizeWords } from "../helper/FirstLetterCaps";

export default function (props) {

    // we will change this later, for now it will be either blank, or static icon
    let avatarSrc

    let { pages, settings } = []
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    switch (props.role) {
        case "employee":
            pages = ["conversations", "make request"]
            settings = [`view ${props.role} profile`]
            break

        case "corporate":
            pages = ["help", "about"]
            settings = [`view ${props.role} profile`]

            break

        case "doctor":
            pages = ["conversations", "cases", "help", "about"]
            settings = [`view ${props.role} profile`]

            break

    }

    // Event Handlers for Icon Button to open and close menu fro Avatar
    const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
    const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
    const handleCloseNavMenu = () => { setAnchorElNav(null); };
    const handleCloseUserMenu = () => { setAnchorElUser(null); };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                        {/* Mobile Hamburger Menu */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, }}
                        >
                            {pages.map((page) => {
                                let pagePath = String(page).replace(" ", "")
                                return <MenuItem href={`/${props.role}/${pagePath}`} key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{capitalizeWords(page)}</Typography>
                                </MenuItem>
                            })}
                        </Menu>
                    </Box>
                    <Link sx={{ flexGrow: 1 }} href={`/${props.role}`} color='inherit' underline='none'><Typography variant="h5">Mendle</Typography></Link>
                    <Box sx={{ flexGrow: 15, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {capitalizeWords(page)}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => {
                                return <MenuItem key={setting} onClick={handleCloseUserMenu} > <Typography textAlign="center">{capitalizeWords(setting)}</Typography></MenuItem>
                            })}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}