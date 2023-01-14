import { useState, useEffect } from "react"
import { Box, Button, Container, Typography, Divider, FormControl, TextField, Select, InputLabel, MenuItem } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { getEmployeeData } from "../../data/DataHelper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const MakeRequestForm = () => {    // Doctor Form
    const selectedForm = window.sessionStorage.getItem("selectedForm");
    const [selectedFormElement, setSelectedFormElement] = useState(null);
    const [headingText, setHeadingText] = useState("");
    const [lottieSrc, setLottieSrc] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const doctorFormDropSelect = [
        "suicidal ideation",
        "intrusive thoughts",
        "anxiety issues",
        "eating disorder",
        "inability to focus",
        "workplace stress",
        "toxic environment",
        "imposter syndrome",
        "others"
    ]

    const doctorForm =
        <Box textAlign='center'>
            <Typography mb={5} width='md' textAlign='center' paragraph>Help us pair you up with a psychologist best suited for you by completing the form below</Typography>
            <FormControl fullWidth sx={{ maxWidth: { md: 600 }, mt: 4 }}>
                {/* <TextField sx={{ flexGrow: 1, mb: 2 }} label={'Subject'} value={String(getEmployeeData().firstName + getEmployeeData().lastName).toLowerCase() + "@email.com"} /> */}
                <FormControl>
                    <InputLabel id="concern">Concern</InputLabel>
                    <Select labelId="concern" sx={{ mb: 2, textAlign: 'left' }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        {doctorFormDropSelect.map((value) => { return <MenuItem value={value}>{value.toLowerCase()}</MenuItem> })}
                    </Select>
                </FormControl>
                <TextField inputProps={{ style: { height: 200 } }} sx={{ flexGrow: 1, mb: 4 }} multiline label={'Message'} placeholder='Let us hear from you!' />
                <Button variant="contained" color="info" sx={{ height: 65, mb: 2 }}>Submit</Button>
                <Button startIcon={<ArrowBackIcon />} variant="outlined" href="javascript:history.back()" sx={{ height: 45, fontWeight: 'light' }}>Cancel and return to Mendle</Button>

            </FormControl>
        </Box>

    // Buddy Form
    const buddyForm =
        <Container>
            <Box textAlign='center' py={5}>
                <Typography variant="subtitile1" fontStyle='italic'>you have selected...</Typography>
                <Typography mt={3} variant="h4" fontWeight='bold'>{headingText.toLowerCase()}</Typography>
            </Box>
        </Container>

    useEffect(() => {
        switch (selectedForm) {
            case "psychologist":
                setSelectedFormElement(doctorForm)
                setHeadingText("Request Psychologist")
                setLottieSrc("https://assets1.lottiefiles.com/private_files/lf30_of3skn6w.json")
                break;

            case "buddy":
                setSelectedFormElement(buddyForm)
                setHeadingText("Workplace Buddies")
                setLottieSrc("https://assets6.lottiefiles.com/packages/lf20_tulr8tag.json")
                break;
            default:
                window.history.back()
                break;
        }
        window.sessionStorage.removeItem("selectedForm")
    }, [])

    return (
        <Container maxWidth="x1" sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 1000,
        }}>
            <Container disableGutters maxWidth='md' sx={{
                paddingTop: 10,
                paddingBottom: 25,
            }}>
                <Box width='md'>
                    <Player autoplay loop src={lottieSrc} style={{ height: 200 }}>
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </Box>
                {/* Form Heading */}
                <Box textAlign='center' py={5}>
                    <Typography variant="subtitile1" fontStyle='italic'>you have selected...</Typography>
                    <Typography mt={4} variant="h4" fontWeight='bold'>{headingText}</Typography>
                    {/* <Divider sx={{ my: 3, backgroundColor: 'grey', opacity: '35%' }} /> */}
                </Box>
                {selectedFormElement}
            </Container>
        </Container>
    )
}