import { Container, Grid } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Typography, Divider, FormControl, Box, TextField, Button } from "@mui/material";
import { getEmployeeData } from "../data/DataHelper";
import Employee from "./Employee";

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
                    <Typography variant="h1" sx={{ my: 2 }}>Make a Request</Typography>
                    <Typography variant="subtitle1">
                        Describe your situation and let us know your struggles.<br />Mendle will do it's best to connect you and bring you the assistance that
                        best fits your needs.
                    </Typography>
                </Box>
                <Divider sx={{ marginY: 4 }}></Divider>

                <Grid>
                    <Grid justifyContent='' container>
                        <Grid item>
                            <Player autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_1ef7g2lw.json" style={{ width: "15vw" }}>
                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>

                        </Grid>
                        <Grid flexGrow={1} item textAlign='left' padding={5}>
                            <Typography textAlign={"left"} variant="h4" sx={{ my: 2 }}>Make a Request</Typography>
                        </Grid>
                    </Grid>
                </Grid>


                <FormControl>
                    <TextField sx={{ flexGrow: 1, mb: 2 }} label={'Email Address'} value={String(getEmployeeData().firstName + getEmployeeData().lastName).toLowerCase() + `@${getEmployeeData().company.toLowerCase()}.com`} />
                    <TextField sx={{ flexGrow: 1, mb: 4 }} multiline label={'Message'} placeholder='Let us hear from you!' />
                    {/* <Divider sx={{ marginY: 3 }}></Divider> */}
                    <Button variant="contained" color="info" sx={{ height: 65, mb: 2 }}>Submit</Button>
                    <Button variant="outlined" href="javascript:history.back()" sx={{ height: 45, fontWeight: 'light' }}>Return to Mendle</Button>
                </FormControl>
            </Container>
        </Container>
    );
}