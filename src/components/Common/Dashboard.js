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
            <Typography mb={8} variant="h3" fontWeight='bold'>Hello, {getEmployeeData().firstName}</Typography>
            <Box mb={10}>
                <Typography variant="h4">Overview</Typography>
                <Divider sx={{ mt: 1, mb: 3, backgroundColor: 'grey', opacity: '15%' }} />
                <Typography variant="h5">You have {notifCount} notifications</Typography>
            </Box>
            <Box mb={10}>
                <Typography variant="h4">Overview</Typography>
                <Divider sx={{ mt: 1, mb: 3, backgroundColor: 'grey', opacity: '15%' }} />
                <Typography variant="h5">You have {notifCount} notifications</Typography>
            </Box>
        </Container>
    );
}