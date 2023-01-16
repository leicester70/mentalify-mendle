import { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { getEmployeeData } from "../../data/DataHelper";
import InboxIcon from '@mui/icons-material/Inbox';
import { Container } from "@mui/system";

export const Dashboard = () => {
    const [role, setRole] = useState("")
    const [notifCount, setNotifCount] = useState(0)

    useEffect(() => {
    })

    return (
        <Container mb={0}>
            <Typography variant="h5" fontWeight='none'>Hello,</Typography>
            <Typography mb={12} variant="h3" fontWeight='bold'>Dr. {getEmployeeData().lastName}</Typography>
            <Box mb={12}>
                <Typography variant="h4">Overview</Typography>
                <Divider sx={{ mt: 1, mb: 3, backgroundColor: 'grey', opacity: '15%' }} />
                <Typography variant="h5">You have {notifCount} notifications</Typography>
            </Box>
            {/* <Box mb={10}>
                <Typography variant="h4">Overview</Typography>
                <Divider sx={{ mt: 1, mb: 3, backgroundColor: 'grey', opacity: '15%' }} />
                <Typography variant="h5">You have {notifCount} notifications</Typography>
            </Box> */}
        </Container>
    );
}