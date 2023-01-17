import { Container, Divider, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { Dashboard } from "../components/Common/Dashboard";
import Chat from '../components/Chat/Chat'
import CompanyDataTable from "../components/SimpleComponents/CompanyDataTable";
import { getRole } from "../Util/Helper";
export default function () {

    const tabs = ["Dashboard", "Conversations", "Send Report"]
    const tabElements = {
        Dashboard: <Dashboard role={getRole} />,
        Conversations: <Chat />,
        "Send Report": <CompanyDataTable />
    }
    const [clientViewTab, setClientViewTab] = useState({ index: 0, tab: "dashboard", element: tabElements[tabs[0]] });

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const handleTabChange = (event, value) => {
        setClientViewTab({ index: value, tab: tabs[value], element: tabElements[tabs[value]] });
    };

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
                    sx={{ backgroundColor: 'lightgrey', width: '100%', borderRadius: 2, mb: 12 }}
                    // centered
                    indicatorColor="primary"
                    textColor="primary"
                    value={clientViewTab.index}
                    onChange={handleTabChange}
                    aria-label="icon position tabs example"
                    textAlign='center'
                >
                    {tabs.map((str) => {
                        return <Tab label={str} />
                    })}
                </Tabs>
                {/* <Divider sx={{ marginTop: 6, marginBottom: 12, backgroundColor: 'grey', opacity: '25%' }} /> */}
                {clientViewTab.element}
            </Container>
        </Container>
    );
}