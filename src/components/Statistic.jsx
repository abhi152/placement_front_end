import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Statistic = () => {


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));





    const [row, setrow] = useState([])

    const [loader, setloader] = useState(false)
    useEffect(() => {

        setloader(true)
        axios.get("https://placement-project-backend.vercel.app/getalldata").then((res) => {
            setrow(res.data)
            console.log(res.data)
            setloader(false)

        }).catch((res) => {
            console.log(res)
            setloader(false)
        })
    }, [0]);
    const rows = [
        {
            name: "ans",
            calories: "12",
            fat: "23",
            carbs: "455",
            protein: "67",
            temp: "56"
        },

        {
            name: "ans",
            calories: "12",
            fat: "23",
            carbs: "455",
            protein: "67",
            temp: "56"
        }
    ]
    var v = [1718, 1819, 1920, 2021]

    return (
        <div style={{ backgroundColor: "rgba(0 ,42,87)", fontFamily: "verdana" }}>
            <Container maxWidth="lg" style={{ fontFamily: "verdana" }}>

                <div style={{ backgroundColor: "rgba(0 ,42,87)" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} stickyHeader x>

                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Company</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="left">17-18</StyledTableCell>
                                    <StyledTableCell align="left">18-19</StyledTableCell>
                                    <StyledTableCell align="left">19-20</StyledTableCell>
                                    <StyledTableCell align="left">20-21</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {row.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.Name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right" component="th" scope="row">
                                            <StyledTableRow>
                                                <StyledTableCell align="right">CTC</StyledTableCell>


                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <StyledTableCell align="right">Student Placed</StyledTableCell>
                                            </StyledTableRow>
                                        </StyledTableCell>
                                        {
                                            v.map((e) => {
                                                return <StyledTableCell align="right" component="th" scope="row">
                                                    <StyledTableRow>
                                                        <StyledTableCell align="right">{eval(`row.Salary${e}`)}</StyledTableCell>


                                                    </StyledTableRow>
                                                    <StyledTableRow>
                                                        <StyledTableCell align="center">{eval(`row.N${e}`)}</StyledTableCell>
                                                    </StyledTableRow>
                                                </StyledTableCell>
                                            })
                                        }

                                    </StyledTableRow>


                                ))}
                            </TableBody>
                        </Table>
                        {

                            loader ? <Box className="my-5" sx={{ display: 'flex', justifyContent: "center" }}>
                                <CircularProgress />
                            </Box> : null
                        }
                    </TableContainer>
                </div>
            </Container>
        </div>

    )
}
export default Statistic;