import {
    Container, Divider, FormControl, Box, Typography,
    TextField, Input, Grid, Button, TextareaAutosize
} from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function (props) {
    return (
        <Container maxWidth='x1' sx={{
            // paddingY: 20,
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 1200,
            textAlign: "center"
        }}>
            <Container disableGutters sx={{
                width: 'fit-content',
                minHeight: 400,
                // boxShadow: 15,
                padding: 10,
                bgcolor: 'white',
            }}>
                <Player autoplay loop src="https://assets5.lottiefiles.com/packages/lf20_twijbubv.json" style={{ height: 250 }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <Typography variant="h4" sx={{ my: 2 }}>Contact Us</Typography>
                <Typography variant="subtitle1">or give us a feedback. Let us know how we can help you.</Typography>
                <Divider sx={{ marginY: 4 }}></Divider>
                <FormControl>
                    <Box disableGutters sx={{ display: 'flex', mb: 2 }}>
                        <TextField sx={{ mr: 2 }} label={'First Name'} />
                        <TextField label={'Last Name'} />
                    </Box>
                    <TextField sx={{ flexGrow: 1, mb: 2 }} label={'Email Address'} />
                    <TextField sx={{ flexGrow: 1, mb: 4 }} multiline label={'Message'} />
                    {/* <Divider sx={{ marginY: 3 }}></Divider> */}
                    <Button variant="contained" color="info" sx={{ height: 65, mb: 2 }}>Submit</Button>
                    <Button variant="outlined" href="javascript:history.back()" sx={{ height: 45, fontWeight: 'light' }}>Return to Mendle</Button>
                </FormControl>
            </Container>
        </Container >
    );
}