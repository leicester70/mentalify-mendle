import { Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
export default function () {

    const [clientViewTab, setClientViewTab] = useState("dashboard")

    return (
        <Container maxWidth='x1' sx={{
            backgroundColor: 'rgba(255, 255, 255)',
            minHeight: 1000,
        }}>
            <Container disableGutters maxWidth='lg' sx={{
                paddingTop: 10,
                paddingBottom: 25,
            }}>
                <Tabs
                    centered
                    indicatorColor="secondary"
                    textColor="secondary"
                    // value={roleValue.index}
                    // onChange={handleRoleTabChange}
                    aria-label="icon position tabs example"
                    textAlign='center'
                >
                    <Tab label="Dashboard" />
                    <Tab label="Conversations" />
                    <Tab label="Send Report" />
                </Tabs>
            </Container>
        </Container>
    );
}