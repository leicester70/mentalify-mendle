// Import Dependencies
import React, { useEffect, useState } from "react";
import { Avatar, Tooltip, Container, IconButton, Typography, Grid, Chip, Switch } from "@mui/material";
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
    const [buddySearchMode, setBuddySearchMode] = useState("Not Searching for Buddies ❌")

    // Data
    let employee = getEmployeeData()
    useEffect(() => {

    })

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

    // Handler
    function onBuddySearchSwitchChange(e, value) {
        console.log(value)
        if (value) {
            setBuddySearchMode("Open to new buddies ✅")
        } else {
            setBuddySearchMode("Not Searching for Buddies ❌")
        }
    }

    // Render
    return (
        <Container disableGutters maxWidth="x1" sx={{
            backgroundColor: "white",
            minHeight: 1200,
            pb: 20
        }}>
            <Container sx={{
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
                <Container maxWidth='sm'>
                    {/* Name */}
                    <Typography variant="subtitle2" textAlign='center' fontStyle='italic'>Full Name</Typography>
                    <Typography variant="h4" textAlign='center' fontWeight='bold'>{employee.firstName} {employee.lastName}</Typography>
                    {/* Gender */}
                    <Box my={4} mb={15} textAlign='center'>
                        <Typography mb={1} variant="subtitle2" textAlign='center' fontStyle='italic'>Gender</Typography>
                        <GenderBubble gender={employee.gender} />
                    </Box>
                    <Typography variant="h4">Employment Details</Typography>
                    <Divider mt={2} />
                    <Grid container display='table-row' rowSpacing={5}>
                        <Grid item>
                            <Typography variant="subtitle2" fontStyle='italic'>Company</Typography>
                            <Typography variant="h5" fontWeight='bold'>{employee.company}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" fontStyle='italic'>Job Title</Typography>
                            <Typography variant="h5" fontWeight='bold'>{employee.jobTitle}</Typography>
                        </Grid>
                    </Grid>
                    <Typography mt={10} variant="h4">Options</Typography>
                    <Divider mt={2} />
                    <Grid container display='table-row' rowSpacing={5}>
                        <Grid item>
                            <Typography variant="subtitle2" fontStyle='italic'>Buddy Search Mode</Typography>
                            <Switch onChange={onBuddySearchSwitchChange} color="success" /><Typography paragraph fontWeight='bold'>{buddySearchMode}</Typography>
                        </Grid>
                        {/* <Grid item>
                            <Typography variant="subtitle1" fontStyle='italic'>Job Title</Typography>
                            <Typography variant="h5" fontWeight='bold'>{employee.jobTitle}</Typography>
                        </Grid> */}
                    </Grid>
                </Container>

            </Container>
        </Container >
    );
}