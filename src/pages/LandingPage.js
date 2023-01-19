import { Box, Container, Typography, Divider, Link, Grid, Button, Tabs, Tab } from "@mui/material";
import { getRole, randomMinMax } from "../Util/Helper";
import { getEmployeeData } from "../data/DataHelper";
import SingpassLoginButton from "../components/SimpleComponents/SingpassLoginButton";
import { useState, useEffect } from "react";
import HailIcon from '@mui/icons-material/Hail';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Footer from "../components/Common/Footer";



export default function () {
    const [roleValue, setRoleValue] = useState({ index: 0, roleStr: "employee" });

    useEffect(() => {
        window.sessionStorage.clear()
    }, [])

    const handleRoleTabChange = (event, value) => {
        let roles = ["employee", "doctor", "organization"]
        setRoleValue({ index: value, roleStr: roles[value] });
    };

    function handleRedirect(role) {
        if (!!window.sessionStorage.getItem("data")) { return }
        let avatarNumber = undefined
        let randomNumber = randomMinMax(1, 100)
        let employee = getEmployeeData(randomNumber)
        if (employee.gender == "Female") { avatarNumber = randomMinMax(1, 3) } else { avatarNumber = randomMinMax(4, 6) }
        window.sessionStorage.setItem("data", JSON.stringify({
            role: role,
            avatarNumber: avatarNumber,
            employeeNumber: randomNumber
        }))
    }

    return (
        <>
            <Container disableGutters sx={{ my: 32 }}>
                <Grid container rowSpacing={10}>
                    <Grid container item md={8} sx={12}>
                        <Container>
                            <Box sx={{ p: 6, pt: 10, backgroundColor: "rgba(30,30,30,0.85)", color: 'white' }}>
                                <Container disableGutters>
                                    <Typography textAlign='left'>
                                        <Typography variant="h4">Welcome to,</Typography>
                                        <Typography variant="h1" my={2}>Mendle</Typography>
                                        <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 2 }}>Semi-Anonymous Matchmaking between Employees & Therapists</Typography>
                                    </Typography>
                                </Container>
                            </Box>
                            <Box sx={{ mt: 10, p: 6, backgroundColor: "rgba(30,30,30,0.85)", color: 'white' }}>
                                <Typography fontStyle='italic' variant="h4" sx={{ mt: 5, mb: 2 }}>What is Mendle?</Typography>
                                <Typography variant="subtitle1">
                                    We are dedicated to providing employees with the support and resources they need to maintain a healthy and productive work environment. Our system delivers comprehensive mental health services, including assessment, diagnosis, treatment, and ongoing support, in order to promote wellness and reduce the risk of mental health issues. We strive to provide a safe and supportive environment for employees to access the care they need. Through our system, we are committed to helping employees achieve optimal mental health and well-being. Contact us today to learn more about our services and how we can help.
                                </Typography>
                            </Box>
                        </Container>

                    </Grid>
                    <Grid container item md={4} sx={12}>
                        <Container>
                            <Box
                                sx={{
                                    padding: 4,
                                    bgcolor: 'background.paper',
                                    boxShadow: 2
                                }}>
                                <Typography variant="h4" align="center">Sign In</Typography>
                                <Divider sx={{ pb: 2 }} />
                                <Typography
                                    pt={6}
                                    variant="subtitle1"
                                    fontStyle='italic'
                                    textAlign='center'>continue as,
                                </Typography>
                                <Grid container direction='column' alignContent='center' rowGap={2} paddingTop={2}>
                                    <Tabs
                                        centered
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        value={roleValue.index}
                                        onChange={handleRoleTabChange}
                                        aria-label="icon position tabs example"
                                        textAlign='center'
                                    >
                                        <Tab icon={<HailIcon fontSize="large" />} label="Employee" />
                                        <Tab icon={<MedicalInformationIcon fontSize="large" />} label="Doctor" />
                                    </Tabs>
                                    <Box mt={1}>
                                        <Button padding={0} href="/singpass-login" onClick={() => { handleRedirect(roleValue.roleStr) }}>
                                            <SingpassLoginButton role={roleValue.roleStr} />
                                        </Button>

                                    </Box>
                                </Grid>
                            </Box >
                        </Container>
                    </Grid>
                </Grid >
            </Container >
            <Footer />
        </>
    );
}