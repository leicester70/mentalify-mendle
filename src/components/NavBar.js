import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";

export default function (props) {

    let { pages, settings } = []

    switch (props.role) {
        case "employee":
            pages = ["inbox", "make request"]
            settings = ["profile"]
            break

        case "corporate":
            break

        case "medical":
            break

    }

    return (
        <AppBar position='sticky'>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Typography variant="h5">Mendle</Typography>
                    {/* Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 5 }}>
                        {pages.map((page) => {
                            return <Button href={`/${props.role}/${String(page).replace(" ", "")}`} key={page} sx={{ marginY: 2, marginX: 1, color: "white" }}><Typography>{page}</Typography></Button>
                        })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}