import React from 'react'
import './Subheader.css'
import Button from '@mui/material/Button';

function Subheader() {
  return (
      <div className="Subheader">
    <div className="Buttons">
        <Button className="Button">Predict</Button>
        <Button className="Button middle">Analytics View</Button>
        <Button className="Button">Advanced Search</Button>
    </div>
   
     <input className="Customer-Id" placeholder='Search for Customer ID'/>
 
    <div className="Buttons">
        <Button className="Button">Add</Button>
        <Button className="Button middle">Edit</Button>
        <Button className="Button">Delete</Button>
    </div>
    </div>
  )
}

export default Subheader