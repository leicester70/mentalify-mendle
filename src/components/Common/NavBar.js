import React, { useEffect } from "react";
import { AppBar, Link, Toolbar, Typography, Box, Button, Avatar, IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import { Container, display } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu"
import { capitalizeWords, getRole } from "../../Util/Helper";
import { getAvatarNumber } from "../../data/DataHelper";

export default function ({ appPathSetter, role }) {

    // we will change this later, for now it will be either blank, or static icon
    let pages, settings = []
    const [avatarSelect, setAvatarSelect] = React.useState(getAvatarNumber());
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    switch (role) {
        // NOTE: All spaces in the string contained in arrays will be hypennated. E.g, "make request" > "make-request"
        case "employee":
            pages = ["conversations", "make request", "promotions", "articles"]
            pages = ["make request", "promotions", "articles"]
            settings = [`view ${role} profile`]
            break

        case "corporate":
            pages = ["help", "about"]
            settings = [`view ${role} profile`]
            break

        case "doctor":
            // pages = ["conversations", "cases", "help", "about"]
            pages = []
            // settings = [`view ${role} profile`]
            break

    }

    // Event Handlers for Icon Button to open and close menu fro Avatar
    const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
    const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
    const handleCloseNavMenu = () => { setAnchorElNav(null); };
    const handleCloseUserMenu = () => { setAnchorElUser(null); };

    return (
        <AppBar position="relative" className='classes.appBar'>
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
                                let pagePath = String(page).replace(" ", "-")
                                return (
                                    <Link underline='none' ><MenuItem key={page} onClick={() => { handleCloseUserMenu(); appPathSetter(`${role}/${pagePath}`) }}><Typography textAlign="center">{capitalizeWords(page)}</Typography></MenuItem></Link>)
                            })}
                        </Menu>
                    </Box>
                    <Link underline='none' sx={{ flexGrow: 1 }} href={`/${role}`} color='inherit'><Typography variant="h5">Mendle{getRole() === "doctor" ? " - Doctor's Portal" : <></>}</Typography></Link>
                    <Box sx={{ flexGrow: 15, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => {
                            let pagePath = String(page).replace(" ", "-")
                            return <Button Button
                                key={page}
                                onClick={() => { handleCloseUserMenu(); appPathSetter(`${role}/${pagePath}`) }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {capitalizeWords(page)}
                            </Button>
                        })}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar src={`/avatars/${avatarSelect}.jpg`} />
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
                                return <Link underline='none' href={`/${getRole()}/profile`}><MenuItem key={setting} onClick={handleCloseUserMenu}> <Typography textAlign="center">{capitalizeWords(setting)}</Typography></MenuItem></Link>
                            })}
                            <Link underline='none' onClick={() => { appPathSetter("contact-us") }} ><MenuItem onClick={handleCloseUserMenu}><Typography textAlign="center">Contact Us</Typography></MenuItem></Link>
                            <Link underline='none' onClick={() => { appPathSetter("/") }}> <MenuItem onClick={handleCloseUserMenu}><Typography textAlign="center">Sign Out</Typography></MenuItem></Link>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}