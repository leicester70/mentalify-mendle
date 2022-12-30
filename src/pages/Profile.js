import React, { useState } from "react";
import { Modal, Sheet, ModalClose } from "@mui/joy";
import { Avatar, Tooltip, Container, IconButton, Typography } from "@mui/material";
import { getRole } from "../Util/Helper";
import { Box } from "@mui/system";
export default function () {

    const [openAvatarList, setOpenAvatarList] = useState(false);

    const bannerSrc = "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"

    let user = {
        avatar: 1,
        firstName: "John",
        lastName: "Doe",
        role: getRole(),
        company: "Lorem Ipsum"
    }

    return (
        < Container disableGutters maxWidth="x1" sx={{
            backgroundColor: "white",
            minHeight: 1200,
        }
        }>
            <Container disableGutters sx={{ paddingY: 10, md: { paddingY: 0 } }}>
                <Box sx={{ display: "flex", backgroundImage: `url(${bannerSrc})`, backgroundSize: "cover", backgroundPosition: "bottom", minHeight: 400 }}>
                </Box>
                <Box textAlign='center' marginTop={-15} paddingBottom={5}>
                    <Tooltip title="Change Avatar" >
                        <IconButton onClick={() => { setOpenAvatarList(true) }}>
                            <Avatar sx={{ width: 165, height: 165, boxShadow: 5 }} src="/avatars/1.jpg"></Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Typography variant="h2" textAlign='center'>{user.firstName} {user.lastName}</Typography>
            </Container>
        </Container >
    );
}