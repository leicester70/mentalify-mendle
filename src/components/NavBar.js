import React from "react";
import { AppBar, Link, Toolbar, Typography, Box, Button, Avatar, IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import { Container } from "@mui/system";

export default function (props) {

    // we will change this later, for now it will be either blank, or static icon
    let avatarSrc

    let { pages, settings } = []
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    switch (props.role) {
        case "employee":
            pages = ["inbox", "make request"]
            settings = ["view profile", "sign out"]
            break

        case "corporate":
            pages = ["company profile"]
            break

        case "doctor":
            pages = ["inbox", "cases"]
            break

    }

    // Event Handlers for Icon Button to open and close menu fro Avatar
    const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
    const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
    const handleCloseNavMenu = () => { setAnchorElNav(null); };
    const handleCloseUserMenu = () => { setAnchorElUser(null); };

    return (
        <AppBar position='sticky'>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Link href={`/${props.role}`} color='inherit' underline='none'><Typography variant="h5">Mendle</Typography></Link>
                    {/* Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '5%' }}>
                        {pages.map((page) => {
                            let pagePath = String(page).replace(" ", "")
                            return <Button href={`/${props.role}/${pagePath}`} key={page} sx={{ marginY: 2, marginX: 1, color: "white" }}><Typography>{page}</Typography></Button>
                        })}
                    </Box>
                    <Tooltip title="Settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, boxShadow: 3 }}><Avatar src={!!avatarSrc ? avatarSrc : `./logo192.png`}
                        /></IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '50px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar >
    );
}