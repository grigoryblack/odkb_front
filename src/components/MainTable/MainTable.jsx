import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';


/*fetch("http://localhost:8080/api/data/getChildrensDataFromNewbornTable", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "get",
})
    .then((response) => {
        console.log(response)
    });*/


export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontFamily: ['Montserrat']}}>ФИО ребенка:</TableCell>
                        <TableCell align="center" sx={{fontFamily: ['Montserrat']}}>Дата рождения:</TableCell>
                        <TableCell align="center"sx={{fontFamily: ['Montserrat']}}>Идентификационный номер:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rows.map((row) => (*/}
                        <TableRow
                           /* key={row.name}*/
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{fontFamily: ['Montserrat']}}>
                               <Link className="table_link" to = "/Children"> Иванов И.И. </Link>
                            </TableCell>
                            <TableCell align="center" sx={{fontFamily: ['Montserrat']}}><Link className="table_link" to = "/Children"> 22.04.2015 </Link></TableCell>
                            <TableCell align="center" sx={{fontFamily: ['Montserrat']}}><Link className="table_link" to = "/Children"> 5649845</Link></TableCell>
                        </TableRow>
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
}