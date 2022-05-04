
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react'
import './Dialog.css'


function DeleteDialog({ open, handleClose, getData, data }) {

    function Deletebyslno(sl) {
        const url = `http://localhost:8080/HRC-project/delete?sl_no=${sl}`       
            const response =  axios.post(url);
            return response
    }

    async function handleDelete() {
        let array=[]
        data.forEach((v) => {
            if (v.check) {
                console.log(v)
                array.push( Deletebyslno(v.sl_no))
               
            }
        })
        try{
            const response=await Promise.all(array)
            alert("Succesfully Deleted")
        }
        catch(e){
            alert("Error deleting records")
            console.log(e)
        }
        handleClose("delete");
        getData();
    }
    return (

        <Dialog onClose={() => handleClose("delete")} open={open} >
            <div className="Pop-up unset">
                {/* <div className="close-btn-div">
          <Button className="cros
          s-btn" onClick={() => handleClose("delete")}><CloseIcon/></Button>
        </div> */}
                <h3 style={{ color: "#fff", textAlign: "center" }}>Delete Records?</h3>

                <p style={{ color: "#fff", textAlign: "center", padding: "10px" }}>Are you sure you want to delete this record (s) ?</p>
                <div className="add-columns del">


                    <Button className="Button add-pop yesopt" onClick={() => handleClose("delete")}>No</Button>

                    <Button className="Button add-pop yesopt" onClick={handleDelete} >Yes</Button>
                </div>

            </div>


        </Dialog>
    )
}
export default DeleteDialog

