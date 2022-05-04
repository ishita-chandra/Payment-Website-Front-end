import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import {useRef,useState} from 'react'
import './Dialog.css'



function AdvDialogBox({open,handleClose,setData}){
    
    const cnRef=useRef(null);
   
    const byRef=useRef(null);
    const docidRef=useRef(null);
    
    const invoiceidRef=useRef(null);
    
  
  
  async function handleSubmit(e) {
    e.preventDefault();
    const url=`http://localhost:8080/HRC-project/asearch?cust_number=${cnRef.current.value}&buisness_year=${encodeURIComponent(byRef.current.value)}&doc_id=${docidRef.current.value}&invoice_id=${invoiceidRef.current.value}`
    
    //console.log(cnRef.current.value);
    //const header={headers:{'Content-Type':'application/x-www-form-urlencoded'}}
    //const header={headers:{'Content-Type':'multipart/form-data'}}
    try{
      const response=await axios.get(url);
      console.log(response.data);
      setData(response.data);
      alert("Data found successfully");
       
    }
    catch(err){
      alert("Error adding the details: " + err);
      console.log(err);
    }
    handleClose("adv")
  }
    return(
      
      <Dialog onClose={() => handleClose("adv")} open={open} >
        <form onSubmit={handleSubmit} className="Pop-up">
        <div className="close-btn-div">
            <Button className="cross-btn" onClick={() => handleClose("adv")}><CloseIcon/></Button>
          </div>
          <h3 style={{ color: "#fff", textAlign: "center" ,paddingBottom:"10px",paddingTop:"-20px"}}>Advanced Search Option</h3>
        <div className=" adv">
        
       
        <span className="heading-dialog"> Customer No.</span>
        <span className="heading-dialog"> Business Year</span> 
        
       
        <input ref={cnRef} className="form-contents" placeholder="Customer No." type="number"/>
        <input ref={byRef} className="form-contents" placeholder="Business Year" type="text"/>
        <span className="heading-dialog"> Doc ID</span>
        <span className="heading-dialog">Invoice ID</span>
        
        <input ref={docidRef} className="form-contents" placeholder="Doc ID" type="number"/>
        
        
        
        <input ref={invoiceidRef} className="form-contents" placeholder="Invoice Id" type="number"/>
        </div>
        <div className="add-but-outer-div" >
        <Button className="Button add-pop" type="submit"  >Advanced Seach</Button>
        </div>
       
        </form>
       
  
      </Dialog> 
    )
  }
  export default AdvDialogBox