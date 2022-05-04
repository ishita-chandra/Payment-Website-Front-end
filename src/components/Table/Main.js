import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import * as React from 'react';
import TableSortLabel from '@mui/material/TableSortLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState, useEffect } from 'react'
import axios from 'axios'

import './Main.css'



export default function DenseTable({ data, setData, setCount, count }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const[count,setCount]=useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };





  const start_index = data.length < page * rowsPerPage ? 0 : page * rowsPerPage;

  const end_index = data.length < page * rowsPerPage + rowsPerPage ? data.length : page * rowsPerPage + rowsPerPage;
  function handleAllClicks() {
    let newData = [...data]
    if (count === data.length) {
      newData.forEach((v) => {
        v.check = false;
      })
      setData(newData);
      setCount(0)
    }
    else {
      newData.forEach((v) => {
        v.check = true;
      })
      setData(newData);
      setCount(newData.length)

    }


  }
  const [sortby, setSortby] = useState({
    name: "",
    sortByAsc: true
  })

  function getSortedArray(name, orderAsc) {
    let sortedArray = [...data]
    if (name === "") {
      return sortedArray
    }
    sortedArray.sort(function (a, b) {
      return a[name] - b[name]
    })
    if (!orderAsc) {
      sortedArray.reverse()
    }
    return sortedArray
  }

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper} className="TableContainer">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell ><Checkbox onChange={handleAllClicks} checked={count === data.length} type="checkbox"
                sx={{
                  padding: '0',
                  color: '#fff !important',
                }} /></TableCell>
              <TableCell >Serial No.</TableCell>
              <TableCell align="right">Business Code</TableCell>
              <TableCell align="right">Customer No.</TableCell>
              <TableCell align="right">Clear Date</TableCell>
              <TableCell align="right">Business Year</TableCell>
              <TableCell align="right">Doc ID</TableCell>
              <TableCell align="right">Posting Date</TableCell>
              <TableCell align="right">Document Create Date</TableCell>
              <TableCell align="right">Due in Date</TableCell>
              <TableCell align="right">Invoice Currency</TableCell>
              <TableCell align="right">Document Type</TableCell>
              <TableCell align="right">Posting ID </TableCell>
              <TableCell className="sort-col sort" align="right" onClick={() => setSortby({ name: "total_open_amount", sortByAsc: !sortby.sortByAsc })}>
                Total Open Amount
             {sortby.sortByAsc && sortby.name === "total_open_amount" ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
              </TableCell>
              <TableCell align="right">Baseline Create Date</TableCell>
              <TableCell align="right">Customer Payment Terms</TableCell>
              <TableCell align="right">Invoice ID</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {getSortedArray(sortby.name, sortby.sortByAsc).slice(start_index, end_index).map((row) => (
              <TableRow
                key={row.sl_no}

                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >
                  <Checkbox

                    sx={{
                      padding: '0',
                      color: '#fff !important',
                    }}

                    onChange={() => {
                      const newData = [...data];
                      const index = newData.findIndex((val) => {
                        return val.sl_no === row.sl_no;
                      })
                      console.log(index);

                      newData[index].check = !newData[index].check;
                      console.log(newData[index]);
                      setCount(newData[index].check ? count + 1 : count - 1);

                      setData(newData);
                    }}
                    type="checkbox" checked={row.check}
                  /></TableCell>
                <TableCell component="th" scope="row">
                  {row.sl_no}
                </TableCell>
                <TableCell align="right">{row.business_code}</TableCell>
                <TableCell align="right">{row.cust_number}</TableCell>
                <TableCell align="right">{row.clear_date}</TableCell>
                <TableCell align="right">{row.buisness_year}</TableCell>
                <TableCell align="right">{row.doc_id}</TableCell>
                <TableCell align="right">{row.posting_date}</TableCell>
                <TableCell align="right">{row.document_create_date}</TableCell>
                <TableCell align="right">{row.due_in_date}</TableCell>
                <TableCell align="right">{row.invoice_currency}</TableCell>
                <TableCell align="right">{row.document_type}</TableCell>
                <TableCell align="right">{row.posting_id}</TableCell>
                <TableCell align="right">{row.total_open_amount}</TableCell>
                <TableCell align="right">{row.baseline_create_date}</TableCell>
                <TableCell align="right">{row.cust_payment_terms}</TableCell>
                <TableCell align="right">{row.invoice_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TablePagination
              rowsPerPageOptions={[2, 10, 25]}
              colSpan={3}
              count={data.length}
             rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
             //ActionsComponent={TablePaginationActions}
            /> */}

        </Table>

      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          color: '#fff !important',
        }}
      />
    </Box>
  );
}
