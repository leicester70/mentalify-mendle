// Import Dependencies
import React, { useState } from "react";
import { Avatar, Tooltip, Container, IconButton, Typography, Grid, Chip } from "@mui/material";
import Divider from "../components/SimpleComponents/CustomDivider";
import { Box } from "@mui/system";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

// Import Data
import { getAvatarNumber, getEmployeeData } from "../data/DataHelper";

export default function () {

    // States
    const [openAvatarList, setOpenAvatarList] = useState(false);
    const [singpassStep, setSingpassStep] = useState(0);

    // Data
    let employee = getEmployeeData()

    // Dynamic Media
    const genderSymbol = { Female: "🌸", Male: "🍆" }
    const bannerSrc = {
        employee: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&",
        corporate: "",
        doctor: ""
    }

    function GenderBubble(props) {
        const { gender } = props
        let color;
        let icon;
        switch (gender) {
            case "Female":
                color = "pink"
                icon = <FemaleIcon color="white" />
                break;
            case "Male":
                color = "dodgerBlue"
                icon = <MaleIcon color="white" />
                break;
            default:
                color = "gray"
                icon = <QuestionMarkIcon color="white" />
                break;
        }
        return <Chip sx={{ flex: 1, color: 'white', backgroundColor: color }} size='medium' icon={icon} label={gender} />
    }

    // Render
    return (
        <Container disableGutters maxWidth="x1" sx={{
            backgroundColor: "white",
            minHeight: 1200,
        }}>
            <Container disableGutters sx={{
                paddingY: { md: 10, sx: 0 },
                minHeight: 'fit-content'
            }}>
                {/* <Box margin={"auto"} maxWidth="md" sx={{ filter: "blur(10px)", display: "flex", backgroundImage: `url(${bannerSrc[getRole()]})`, backgroundSize: "cover", backgroundPosition: "bottom", height: '350pt' }}>
                </Box> */}
                {/* <Box textAlign='center' marginTop={-25} paddingBottom={10}> */}
                <Box textAlign='center' py={5}>
                    <Tooltip title="Change Avatar" >
                        <IconButton onClick={() => { setOpenAvatarList(true); console.log(openAvatarList) }}>
                            <Avatar sx={{ width: 250, height: 250, boxShadow: 5 }} src={`/avatars/${getAvatarNumber()}.jpg`}></Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Container maxWidth='md'>
                    {/* Name */}
                    <Typography variant="subtitle1" textAlign='center' fontStyle='italic'>Full Name</Typography>
                    <Typography variant="h3" textAlign='center'> {employee.firstName} {employee.lastName}</Typography>
                    {/* Gender */}
                    <Box my={2} textAlign='center'>
                        <GenderBubble gender={employee.gender} />

                    </Box>
                    <Divider mt={8} mb={5} />
                    <Grid container textAlign={'center'}>
                        <Grid item flexGrow={1} mb={5}>
                            <Grid>
                                <Typography variant="subtitle1" textAlign='center' fontStyle='italic'>Company</Typography>
                                <Typography variant="h4" textAlign='center'>{employee.company}</Typography>
                                {/* <Typography variant="h2" textAlign='center'>{parseRole(getRole())}</Typography> */}
                            </Grid>
                        </Grid>
                        <Grid item flexGrow={1} mb={5}>
                            <Typography variant="subtitle1" textAlign='center' fontStyle='italic'>Job Title</Typography>
                            <Typography variant="h4" textAlign='center'>{employee.jobTitle}</Typography>
                        </Grid>
                    </Grid>
                </Container>
                <></>
                <Box my={10} boxShadow={5} borderRadius={10} overflow='hidden'>
                </Box>
            </Container>
        </Container>
    );
}