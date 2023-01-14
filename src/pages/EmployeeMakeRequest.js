import { Container, Grid } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Typography, Divider, FormControl, Box, TextField, Button } from "@mui/material";
import { getEmployeeData } from "../data/DataHelper";
import Employee from "./Employee";
import RequestBodyContent from "../components/SimpleComponents/RequestBodyContent";
import { useEffect } from "react";

const issuesCategories = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export default function () {

    useEffect(() => {
        window.sessionStorage.removeItem("selectedForm")
    }, [])

    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 1200,
        }}>
            <Container maxWidth='md' disableGutters sx={{
                paddingBottom: 25,
                bgcolor: 'white',
                textAlign: 'center'
            }}>
                <Player autoplay loop src="https://assets10.lottiefiles.com/packages/lf20_ot5gqdfc.json" style={{ height: "50vh" }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <Box mt={4} mb={12}>
                    <Typography variant="h2" sx={{ my: 2 }}>Make a Request</Typography>
                    <Typography variant="subtitle1">
                        Describe your situation and let us know your struggles.<br />Mendle will do it's best to connect you and bring you the assistance that
                        best fits your needs.
                    </Typography>
                </Box>
                <Divider sx={{ marginY: 8 }}></Divider>

                <RequestBodyContent
                    lottieSrc="https://assets2.lottiefiles.com/packages/lf20_1ef7g2lw.json" lottiePlayerSize="220pt"
                    headingText="Pair up with a Psychologist"
                    bodyText="Sample Text Body"
                    buttonText="Receive Assistance"
                    formSelection="psychologist"
                >
                </RequestBodyContent>
                <Divider sx={{ marginY: 8 }}></Divider>
                <RequestBodyContent
                    lottieSrc="https://assets6.lottiefiles.com/packages/lf20_tulr8tag.json" lottiePlayerSize="200pt"
                    headingText="Workplace Buddies"
                    bodyText="Match with Buddies"
                    buttonText="Find a Buddy"
                    formSelection="buddy"
                >
                </RequestBodyContent>
            </Container>
        </Container>
    );
}