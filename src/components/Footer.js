import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function () {
    return (
        <Container disableGutters maxWidth sx={{
            bgcolor: '#171717',
            color: '#707070'
        }}>
            <Container
                maxWidth='lg'
                sx={{
                    paddingTop: 15,
                    paddingBottom: 30,
                }}>
                <Typography variant="h4">Developer Notes</Typography>
                <Typography paragraph>Yes, I know it wasn't a must to code this out but I really wanted to.</Typography>
            </Container>
        </Container>
    );
}