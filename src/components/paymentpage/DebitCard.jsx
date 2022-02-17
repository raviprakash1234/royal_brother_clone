import { Button } from "@mui/material"
import { useState } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CreditCard } from "./CreditCaard"
import "./paymentpage.css"

export const DebitCard = () =>{
    return <div>
    <div>
   
    <div style={{marginLeft:"5%"}}>
      <span>Enter your debit card details</span><br/>
      <br/>
      <select  style={{border:"1px solid gray"}}>
        <option>Choose your debit card type</option>
        <option>Visa card</option>
        <option>Master card</option>
        <option>SBI meastro</option>
        <option>Rupay card</option>
      </select>
      
    </div>
    <br/>
    <div className="card card-header credit-card-model">
       <label>Card Number</label>
       <input type="text" className="credit-card-inp" placeholder="Enter your card number"/>
       <br/>
       <label>Name on the card</label>
       <input type="text" className="credit-card-inp" placeholder="Enter Name on the card"/>
       <br/>
    
       <div>
          <div>
               <label>Expire</label>
              <lable style={{marginLeft:"30%"}}>CVV</lable><br/>
              
              <input type="text"  maxLength={2} placeholder="M" className="month" />
              <input type="text" maxLength={2} placeholder="Y" className="year" />
              <input type="text" maxLength={3} placeholder="CVV" className="cvv"/>
          </div>
       
       </div>
     
    
       </div>
       <br/>
       <button class="btn btn-warning"  style={{marginLeft:"5%"}} variant="contained" size="medium">
       Make Payment
    </button>
    
    </div>
    </div>
}