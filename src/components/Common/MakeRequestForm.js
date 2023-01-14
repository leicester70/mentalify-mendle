import { useState, useEffect } from "react"
import { Box, Button, Container, Typography, Divider, FormControl, TextField, Select, InputLabel, MenuItem } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { getEmployeeData } from "../../data/DataHelper";

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
            <FormControl sx={{ width: "100%", maxWidth: { md: 600 } }}>
                <TextField mt={4} sx={{ flexGrow: 1, mb: 2 }} label={'Subject'} value={String(getEmployeeData().firstName + getEmployeeData().lastName).toLowerCase() + "@email.com"} />
                <Select aria-label="test" sx={{ mb: 2, textAlign: 'left' }}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        doctorFormDropSelect.map((value) => {
                            return <MenuItem value={value}>{value.toLowerCase()}</MenuItem>
                        })
                    }
                </Select>
                <TextField inputProps={{ style: { height: 200 } }} sx={{ flexGrow: 1, mb: 4 }} multiline label={'Message'} placeholder='Let us hear from you!' />
                <Button variant="contained" color="info" sx={{ height: 65, mb: 2 }}>Submit</Button>
            </FormControl>
        </Box>

    // Buddy Form
    const buddyForm =
        <Container>
            <Box textAlign='center' py={5}>
                <Typography variant="subtitile1" fontStyle='italic'>you have selected...</Typography>
                <Typography mt={3} variant="h4" fontWeight='bold'>{headingText.toLowerCase()}</Typography>
                <Divider sx={{ my: 3, backgroundColor: 'grey', opacity: '35%' }} />
            </Box>
        </Container>

    useEffect(() => {
        switch (selectedForm) {
            case "psychologist":
                setSelectedFormElement(doctorForm)
                setHeadingText("Request Psychologist")
                setLottieSrc("https://assets1.lottiefiles.com/private_files/lf30_of3skn6w.json")
                break;

            case "buddies":
                setSelectedFormElement(buddyForm)
                setHeadingText(headingText)
                setLottieSrc("https://assets6.lottiefiles.com/packages/lf20_YVgFFr.json")
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
            minHeight: 2000,
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
                    <Typography mt={3} variant="h4" fontWeight='bold'>{headingText}</Typography>
                    <Divider sx={{ my: 3, backgroundColor: 'grey', opacity: '35%' }} />
                </Box>
                <Typography mb={8} width='md' textAlign='center' paragraph>Help us pair you up with a psychologist best suited for you by completing the form below</Typography>
                {selectedFormElement}
            </Container>
        </Container>
    )
}