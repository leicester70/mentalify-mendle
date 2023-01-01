import { Container } from "@mui/material";

export default function () {
    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 1200,
        }}>
            <Container maxWidth='lg' disableGutters sx={{
                paddingY: 10,
                bgcolor: 'white',
            }}>

            </Container>
        </Container>
    );
}