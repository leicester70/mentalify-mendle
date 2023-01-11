import { Container, Typography, Divider, Link, Grid, Button, Tabs, Tab } from "@mui/material";
import { getRole, randomMinMax } from "../Util/Helper";
import { getEmployeeData } from "../data/DataHelper";
import SingpassLoginButton from "../components/SimpleComponents/SingpassLoginButton";
import { useState } from "react";
import HailIcon from '@mui/icons-material/Hail';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';


function handleRedirect(value) {
    let roles = ["employee", "doctor"]
    if (!!window.sessionStorage.getItem("data")) { return }
    let avatarNumber = undefined
    let randomNumber = randomMinMax(1, 100)
    let employee = getEmployeeData(randomNumber)
    if (employee.gender == "Female") { avatarNumber = randomMinMax(1, 3) } else { avatarNumber = randomMinMax(4, 6) }
    window.sessionStorage.setItem("data", JSON.stringify({
        role: roles[value],
        avatarNumber: avatarNumber,
        employeeNumber: randomNumber
    }))
}

export default function () {
    const [roleValue, setRoleValue] = useState(0);

    const handleRoleTabChange = (event, value) => {
        setRoleValue(value);
    };


    return (
        <Container
            maxWidth='sm'
            sx={{
                marginY: '15vh',
                padding: '10vh',
                bgcolor: 'background.paper',
                boxShadow: 2
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
            <Grid container direction='column' alignContent='center' rowGap={2} paddingTop={2}>
                <Tabs
                    centered
                    value={roleValue}
                    onChange={handleRoleTabChange}
                    aria-label="icon position tabs example"
                    textAlign='center'
                >
                    <Tab icon={<HailIcon />} label="Employee" />
                    <Tab icon={<MedicalInformationIcon />} label="Doctor" />
                </Tabs>
                <Button padding={0} href="/singpass-login" onClick={() => { handleRedirect(roleValue) }}>
                    <SingpassLoginButton role="employee" />
                </Button>
                {/* <Grid item>
                    <Button fullWidth variant="contained" color="primary" href="/employee" onClick={() => { handleRedirect("employee") }}>
                        <Typography fontSize={13} letterSpacing={2} variant="subtitle1">Inidividual/Employee</Typography>
                    </Button>
                </Grid> */}
                {/* <Grid item>
                    <Button fullWidth variant="contained" color="primary" href="/corporate" onClick={() => { handleRedirect("corporate") }}>
                        <Typography fontSize={13} letterSpacing={2} variant="subtitle1">Corporate Entity</Typography>
                    </Button>
                </Grid> */}
                {/* <Grid item>
                    <Button fullWidth variant="contained" color="primary" href="/doctor"
                        onClick={() => { handleRedirect("doctor") }}
                    ><Typography fontSize={13} letterSpacing={2} variant="subtitle1">Medical Professional</Typography></Button>
                </Grid> */}
            </Grid>
        </Container >
    );
}