import { Container } from "@mui/material";
import { getRole } from "../../Util/Helper";
export default function () {

    let role = getRole()
    setInterval(() => {
        {
            window.location.replace(`/${role}`);
        }
    }, 2000);
    return (
        <Container maxWidth='x1' disableGutters sx={{
            backgroundColor: 'rgba(255, 255, 255)',
        }}>
            <img width="100%" src="/singpass/singpassBanner.png" />
        </Container>
    );
}