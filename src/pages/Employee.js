import { Container } from "@mui/system";
import NavBar from "../components/NavBar";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Dashboard from "../components/Dashboard";

const Inbox = <></>

export default function () {
    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            paddingY: 10,
            minHeight: 1000,
        }}>
            <Container maxWidth='lg' disableGutters sx={{
                boxShadow: 15,
                bgcolor: 'white',
            }}>
                <Container>
                    <Typography padding={5} fontFamily='Lato' variant="h4" fontStyle='italic' paddingY={10}>Welcome, dear employee...</Typography>
                </Container>
                <Dashboard Messages={1} />
            </Container>
        </Container>

    );
}