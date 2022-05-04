import React from 'react'
import AddDialogBox from '../CustomDialog/Add'
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import EditDialogBox from '../CustomDialog/Edit'
import DeleteDialog from '../CustomDialog/Delete'
import AdvDialogBox from '../CustomDialog/AdvancedSearch'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import axios from 'axios'
import RefreshIcon from '@mui/icons-material/Refresh';
import './Subheader.css';
import { useRef, useState } from 'react'







function Subheader({ data, setData, getData, count }) {
  const [open, setOpen] = useState({
    add: false,
    edit: false,
    adv: false,
    delete: false
  });
  const handleClose = (key) => {
    setOpen({ ...open, [key]: false })
  }

  function checkDeletePop() {
    if (count < 1) {
      alert("Select atleast one row")
      return
    }
    setOpen({ ...open, delete: true })
  }
  /** For search by customer id */

  async function handleSearch(e) {
    if (e.target.value === "") {
      getData();
      return;
    }

    const url = `http://localhost:8080/HRC-project/search?cust_number=${e.target.value}`


    try {

      const response = await axios.get(url);
      setData(response.data)
      // alert("Data found successfully");

    }
    catch (err) {
      // alert("Error adding the details: " + err);
      console.log(err);
    }
  }
  async function Deletebyslno(sl) {
    const url = `http://localhost:8080/HRC-project/delete?sl_no=${sl}`


    try {
      const response = await axios.post(url);
      alert("Data deleted successfully");

    }
    catch (err) {
      alert("Error adding the details: " + err);
      console.log(err);
    }
  }

  function handleEdit() {
    if (count !== 1) {
      alert("Please select only 1 row")
      return
    }
    setOpen({ ...open, edit: true });
  }

  function handleDelete() {
    if (count < 1) {
      alert("Select atleast one row")
      return
    }
    data.forEach((v) => {
      if (v.check) {
        console.log(v)

        Deletebyslno(v.sl_no)
      }
    })

    getData();
  }
  return (
    <>
      <AddDialogBox open={open.add} handleClose={handleClose} getData={getData} />
      <EditDialogBox open={open.edit} handleClose={handleClose} data={data} getData={getData} />
      <AdvDialogBox open={open.adv} handleClose={handleClose} setData={setData} />
      <DeleteDialog open={open.delete} handleClose={handleClose} data={data} getData={getData} />
      <div className="Subheader">
        <div className="Buttons">
          <Button className="Button"><OnlinePredictionIcon fontSize="small"/>&nbsp;Predict</Button>
          <Button className="Button middle"><AnalyticsIcon fontSize="small" />&nbsp;Analytics</Button>
          <Button className="Button" onClick={() => setOpen({ ...open, adv: true })}><SearchIcon fontSize="small" />&nbsp;Advanced Search</Button>
          {/* <Button className="Button">Advanced Search</Button> */}
        </div>

        <Button onClick={getData} className="refresh"><RefreshIcon /></Button>

        <input className="Customer-Id" onChange={handleSearch} placeholder='🔍 &nbsp;Search for Customer ID' />

        <div className="Buttons">
          <Button className="Button" onClick={() => setOpen({ ...open, add: true })}><AddIcon fontSize="small" />&nbsp;Add</Button>
          <Button className="Button middle" onClick={handleEdit}><ModeEditIcon fontSize="small" />&nbsp;Edit</Button>
          <Button className="Button" onClick={checkDeletePop}><DeleteIcon fontSize="small" />&nbsp;Delete</Button>
        </div>
      </div>
    </>
  )
}

export default Subheader