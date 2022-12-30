import { Container, Typography, Divider, ButtonGroup, Button, Grid } from "@mui/material";
import { getRole } from "../Util/Helper";

export default function () {
    return (
        <Container
            maxWidth='sm'
            sx={{
                marginY: '15vh',
                padding: '10vh',
                bgcolor: 'background.paper',
                boxShadow: 10
            }}>
            <Typography textAlign='center'>
                <Typography variant="h5">Welcome to,</Typography>
                <Typography variant="h1" marginTop={1} marginBottom={2}>Mendle</Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>Semi-Anonymous Matchmaking between Employees & Therapists</Typography>
            </Typography>
            <Divider sx={{ padding: '1vw' }} />
            <Typography
                marginTop='3vh'
                paragraph
                fontStyle='italic'
                textAlign='center'>continue as
            </Typography>
            <Grid container direction='column' alignContent='center' rowGap={1.75} paddingTop={2}>
                <Grid item>
                    <Button fullWidth variant="contained" color="primary" href="/employee"
                        onClick={() => { window.sessionStorage.setItem("data", { role: "employee" }) }}
                    ><Typography fontSize={13} letterSpacing={2} variant="subtitle1">Inidividual/Employee</Typography></Button>
                </Grid>
                <Grid item>
                    <Button fullWidth variant="contained" color="primary" href="/corporate"
                        onClick={() => { window.sessionStorage.setItem("data", { role: "corporate" }) }}
                    ><Typography fontSize={13} letterSpacing={2} variant="subtitle1">Corporate Entity</Typography></Button>
                </Grid>
                <Grid item>
                    <Button fullWidth variant="contained" color="primary" href="/doctor"
                        onClick={() => { window.sessionStorage.setItem("data", { role: "doctor" }) }}
                    ><Typography fontSize={13} letterSpacing={2} variant="subtitle1">Medical Professional</Typography></Button>
                </Grid>
            </Grid>
        </Container >
    );
}