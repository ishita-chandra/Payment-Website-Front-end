import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {useRef,useState} from 'react'
import './Dialog.css'



function EditDialogBox({open,handleClose,data,getData}){
    
    const invoicecurrRef=useRef(null);
    
    const cptRef=useRef(null);
    
  
  
  async function handleSubmit(e) {
    e.preventDefault();
    const url="http://localhost:8080/HRC-project/edit"
    const obj=data.find((v)=>{return v.check    
    })
    const body ={
      sl_no:obj.sl_no,
      invoice_currency: invoicecurrRef.current.value,
     
      cust_payment_terms: cptRef.current.value,
 
     
    }
    //console.log(cnRef.current.value);
    const header={headers:{'Content-Type':'application/json'}}
    //const header={headers:{'Content-Type':'multipart/form-data'}}
    try{
      const response=await axios.post(url,body,header);
      alert("Data edited successfully");
    
    }
    catch(err){
      alert("Error editing the details: " + err);
      console.log(err);
    }
    handleClose("edit");
    getData();

  }
    return(
      
      <Dialog onClose={() =>handleClose("edit")} open={open} >
        <form onSubmit={handleSubmit} className="Pop-up">
        <div className="close-btn-div">
            <Button className="cross-btn" onClick={() =>handleClose("edit")}><CloseIcon/></Button>
          </div>
        <div className="adv">
        
        <span className="heading-dialog"> Invoice Currency</span>
        <span className="heading-dialog"> Customer Payment Terms</span> 
        
        <input ref={invoicecurrRef} className="form-contents"  placeholder="Invoice Currency" type="text"/>
        
        <input ref={cptRef} className="form-contents" placeholder="Customer Payment Terms" type="text"/>
       </div>
        <div className="add-but-outer-div">
        <Button className="Button add-pop " type="submit" >Edit</Button>
        </div>
       
        </form>
       
  
      </Dialog> 
    )
  }
  export default EditDialogBox
