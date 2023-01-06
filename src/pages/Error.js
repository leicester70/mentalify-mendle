import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Button, Container, Typography } from "@mui/material";
import { padding } from "@mui/system";

export default function (props) {
    const { role } = props
    console.log(role)
    let redirect = "";
    switch (role) {
        case "undefined":
            redirect = "/"
            break;

        default:
            redirect = `/${props.role}`
            break;
    }
    return (
        <Container maxWidth='X1' sx={{
            paddingY: 20,
            backgroundColor: 'white',
            boxShadow: 10,
            alignContent: 'center',
            textAlign: 'center'
        }}>
            <Typography variant="h3" textAlign='center' marginBottom={5}>We're Sorry</Typography>
            <Player autoplay loop
                src="https://assets1.lottiefiles.com/packages/lf20_k1rx9jox.json"
                style={{ width: 350 }}>
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <Typography marginY={5}>We can't find the page you've requested for...</Typography>
            <Button variant="contained" href={redirect} size='large'><Typography>Return to Mendle</Typography></Button>
        </Container>
    );
}