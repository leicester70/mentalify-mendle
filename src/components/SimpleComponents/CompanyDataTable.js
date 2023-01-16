import { useState } from "react";
import { Container, Modal, Box, Typography, Table, TableContainer, TableHead, TableRow, TableBody, Paper, TableCell, Button, Grid } from "@mui/material";
import companyData from '../../data/doctorViewCompanyData.json'

export default function () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Company Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Company Address</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companyData.map((data) => {
                            return <TableRow key={data.id}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.companyName}</TableCell>
                                <TableCell>{data.address}</TableCell>
                                <TableCell align="center"><Button color="secondary" onClick={handleOpen}> Send Report</Button></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container sx={{
                    width: { sx: 12 },
                    maxHeight: '100%',
                    overflow: 'auto',
                    backgroundColor: 'white',
                    p: 2,
                }}>
                    <Typography id="modal-modal-title" variant="h4" mt={6} my={3}>Review</Typography>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item md={5} sx={12}>
                            <Box pb={2}>
                                <Typography variant="h5" fontWeight='bold'>Introduction</Typography>
                                <Typography paragraph>
                                    The purpose of this report is to provide an overview of the current
                                    state of mental health among employees at XYZ Company. The report
                                    includes data collected through employee surveys and interviews, as
                                    well as observations made by HR staff.
                                </Typography>
                            </Box>
                            <Box pb={2}>
                                <Typography variant="h5" fontWeight='bold'>Findings</Typography>
                                <Typography>
                                    <ol>
                                        <li>
                                            A significant number of employees reported feeling stressed
                                            and overwhelmed in the workplace

                                        </li>
                                        <li>
                                            Many employees reported feeling unsupported by their
                                            managers and colleagues

                                        </li>
                                        <li>
                                            A significant number of employees reported experiencing
                                            symptoms of depression and anxiety.
                                        </li>
                                        <li>
                                            There were also reports of employees experiencing bumout
                                            and high levels of job dissatisfaction

                                        </li>
                                    </ol>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={7} sx={12}>
                            <img style={{
                                display: 'block',
                                width: '100%',
                            }} src="/doctor/companyReport_graphOnly.jpg" />
                        </Grid>
                        <Grid item sx={12} my={3}>
                            <Typography variant="h5" fontWeight='bold'>Recommendations</Typography>
                            <Typography>
                                <ol>
                                    <li>
                                        Implement an employee assistance program (EAP) to provide
                                        confidential counseling and support services.
                                    </li>
                                    <li>
                                        Encourage managers to prioritize employee mental well-being
                                        and provide training on how to support their team members.
                                    </li>
                                    <li>
                                        Develop an open-door policy to encourage employees to voice
                                        concerns and feel heard
                                    </li>
                                    <li>
                                        Create a culture that prioritizes self-care and promotes healthy
                                        work-life balance.
                                    </li>
                                    <li>
                                        Regularly review and analyze the data collected to track the progress and effectiveness of the implemented
                                        recommendations.
                                    </li>
                                </ol>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box textAlign={'center'}>
                        <Button fullWidth sx={{ padding: 2, mt: 4, mb: 1 }} variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button fullWidth sx={{ padding: 4, mb: 10 }} color="success" variant="contained" onClick={handleClose}>Send</Button>
                    </Box>
                </Container>
            </Modal>
        </>
    );
}