import { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { getEmployeeData } from "../../data/DataHelper";
import InboxIcon from '@mui/icons-material/Inbox';
import { Container } from "@mui/system";
import { getRole } from "../../Util/Helper";

export const Dashboard = () => {
    const [notifCount, setNotifCount] = useState(3)

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const welcomeHeader = () => {
        switch (getRole()) {
            case "doctor":
                return (<>
                    <Typography variant="h5" fontWeight='none'>Hello,</Typography>
                    <Typography mb={6} variant="h3" fontWeight='bold'>Dr. {getEmployeeData().lastName}</Typography>
                </>)
            default:
                return (<>
                    <Typography variant="h5" fontWeight='none'>Hello,</Typography>
                    <Typography mb={6} variant="h3" fontWeight='bold'>{getEmployeeData().firstName}</Typography>
                </>)
                break;

        }

    }

    return (
        <Container disableGutters mb={0}>
            {welcomeHeader()}
            <Box mb={12}>
                {/* <Typography variant="h4">Overview</Typography> */}
                {/* <Divider sx={{ mt: 1, mb: 3, backgroundColor: 'grey', opacity: '15%' }} /> */}
                <Typography variant="h5">You have <span style={{ fontWeight: 'bold' }}>{notifCount}</span> notifications</Typography>
            </Box>
            {/* <Box mb={10}>
                <Typography variant="h4">Overview</Typography>
                <Divider sx={{ mt: 1, mb: 3, backgroundColor: 'grey', opacity: '15%' }} />
                <Typography variant="h5">You have {notifCount} notifications</Typography>
            </Box> */}
        </Container>
    );
}