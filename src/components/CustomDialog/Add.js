import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useRef, useState } from 'react'
import './Dialog.css'



function AddDialogBox({ open, handleClose, getData }) {
  const bcRef = useRef(null);
  const cnRef = useRef(null);
  const cdRef = useRef(null);
  const byRef = useRef(null);
  const docidRef = useRef(null);
  const pdRef = useRef(null);
  const dcdRef = useRef(null);
  const didRef = useRef(null);
  const invoicecurrRef = useRef(null);
  const dtRef = useRef(null);
  const pidRef = useRef(null);
  const toaRef = useRef(null);
  const bcdRef = useRef(null);
  const cptRef = useRef(null);
  const invoiceidRef = useRef(null);



  async function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:8080/HRC-project/insert"
    const body = {
      business_code: bcRef.current.value,
      cust_number: cnRef.current.value,
      clear_date: cdRef.current.value,
      buisness_year: byRef.current.value,
      doc_id: docidRef.current.value,
      posting_date: pdRef.current.value,
      document_create_date: dcdRef.current.value,
      due_in_date: didRef.current.value,
      invoice_currency: invoicecurrRef.current.value,
      document_type: dtRef.current.value,
      posting_id: pidRef.current.value,
      total_open_amount: toaRef.current.value,
      baseline_create_date: bcdRef.current.value,
      cust_payment_terms: cptRef.current.value,
      invoice_id: invoiceidRef.current.value,

    }
    //console.log(cnRef.current.value);
    const header = { headers: { 'Content-Type': 'application/json' } }
    //const header={headers:{'Content-Type':'multipart/form-data'}}
    try {
      const response = await axios.post(url, body, header);
      console.log(response);
      alert("Data added successfully");

    }
    catch (err) {
      alert("Error adding the details: " + err);
      console.log(err);
    }
    handleClose("add");
    getData();
  }
  return (

    <Dialog onClose={() => handleClose("add")} open={open} >
      <form onSubmit={handleSubmit} className="Pop-up">
        <div className="close-btn-div">
          <Button className="cross-btn" onClick={() => handleClose("add")}><CloseIcon /></Button>
        </div>
        <div className="add-columns">

          <span className="heading-dialog"> Business Code</span>
          <span className="heading-dialog"> Customer No.</span>
          <span className="heading-dialog"> Clear Date</span>
          <input ref={bcRef} className="form-contents" placeholder="Business Code" type="text" />
          <input ref={cnRef} className="form-contents" placeholder="Customer No." type="number" />
          <input ref={cdRef} className="form-contents" placeholder="Clear Date" type="date" />
          <span className="heading-dialog"> Business Year</span>
          <span className="heading-dialog"> Doc ID</span>
          <span className="heading-dialog"> Posting Date</span>
          <input ref={byRef} className="form-contents" placeholder="Business Year" type="text" />
          <input ref={docidRef} className="form-contents" placeholder="Doc ID" type="number" />
          <input ref={pdRef} className="form-contents" placeholder="Posting Date" type="date" />
          <span className="heading-dialog"> Document Create Date</span>
          <span className="heading-dialog">Due In Date</span>
          <span className="heading-dialog">Invoice Currency</span>
          <input ref={dcdRef} className="form-contents" placeholder="Document Create Date" type="date" />
          <input ref={didRef} className="form-contents" placeholder="Due In Date" type="date" />
          <input ref={invoicecurrRef} className="form-contents" placeholder="Invoice Currency" type="text" />
          <span className="heading-dialog"> Document Type</span>
          <span className="heading-dialog"> Posting Id</span>
          <span className="heading-dialog"> Total Open Amount</span>
          <input ref={dtRef} className="form-contents" placeholder="Document Type" type="text" />
          <input ref={pidRef} className="form-contents" placeholder="Posting Id" type="number" />
          <input ref={toaRef} className="form-contents" placeholder="Total Open Amount" type="number" step="0.01" />
          <span className="heading-dialog"> Baseline Create Date</span>
          <span className="heading-dialog"> Customer Payment Terms</span>
          <span className="heading-dialog">Invoice Id</span>
          <input ref={bcdRef} className="form-contents" placeholder="Baseline Create Date" type="date" />
          <input ref={cptRef} className="form-contents" placeholder="Customer Payment Terms" type="text" />
          <input ref={invoiceidRef} className="form-contents" placeholder="Invoice Id" type="number" />
        </div>
        <div className="add-but-outer-div">
          <Button className="Button add-pop " type="submit" >Add</Button>
        </div>

      </form>


    </Dialog>
  )
}
export default AddDialogBox