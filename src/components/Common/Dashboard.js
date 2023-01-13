import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getEmployeeData } from "../../data/DataHelper";
import InboxIcon from '@mui/icons-material/Inbox';

export const Dashboard = () => {
    const [role, setRole] = useState("")
    const [messageCount, setMessageCount] = useState(0)

    useEffect(() => {
    })

    return (
        <Box ml={2} mb={5}>
            <Typography mb={3} variant="h4" fontWeight='bold'>Hello, {getEmployeeData().firstName}</Typography>
            <Typography variant="h4">You have {messageCount} messages</Typography>
        </Box>
    );
}