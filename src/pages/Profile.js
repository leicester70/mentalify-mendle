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
                        {/* <IconButton onClick={() => { setOpenAvatarList(true) }}>
                            <Avatar sx={{ width: 165, height: 165, boxShadow: 5 }} src="/avatars/1.jpg"></Avatar>
                            <Modal
                                aria-labelledby="modal-title"
                                aria-describedby="modal-desc"
                                open={openAvatarList}
                                onClose={() => setOpenAvatarList(false)}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Sheet variant="outlined" sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg', }}>
                                    <ModalClose variant="outlined"
                                        sx={{
                                            top: 'calc(-1/4 * var(--IconButton-size))', right: 'calc(-1/4 * var(--IconButton-size))', boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)', borderRadius: '50%',
                                            bgcolor: 'background.body',
                                        }}
                                    />
                                    <Typography component="h2" id="modal-title" level="h4" textColor="inherit" fontWeight="lg" mb={1}>
                                        This is the modal title
                                    </Typography>
                                    <Typography id="modal-desc" textColor="text.tertiary">
                                        Make sure to use <code>aria-labelledby</code> on the modal dialog with an
                                        optional <code>aria-describedby</code> attribute.
                                    </Typography>
                                </Sheet>
                            </Modal>
                        </IconButton> */}
                    </Tooltip>
                </Box>
                <Typography variant="h2" textAlign='center'>{user.firstName} {user.lastName}</Typography>
            </Container>
        </Container >
    );
}