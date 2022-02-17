import React, { useEffect } from "react"
import { useState } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CreditCard } from "./CreditCaard"
import { DebitCard } from "./DebitCard"
import { Netbanking } from "./Netbanking"
import "./paymentpage.css"
import { Paytm } from "./Paytm"
import { useParams } from "react-router-dom"
import { Zesto } from "./Zesto"
import { Upi } from "./Upi"
// import StripeCheckout from 'react-stripe-checkout';
export const Paymentpage = () =>{

    const [show, setShow] = useState("")
    console.log('show:', show)
    // const [data, setData] = useState("")
    

    let {total} = useParams()
    
    const amount = +total
    console.log('amount:', amount)

    return <div style={{paddingTop:"8%"}}>
    
    <div style={{display:"flex"}}>
    
    <div className="card main-card">
               <div className="card-header fw-bolder">
                  CHOOSE PAYMENT METHOD
               </div>
         
       <div style={{display:"flex"}}>
       <div>
       
       <div className="card child-card">
       <div className="text-alignment">
       <br/>
       <a  onClick={()=> setShow("creditcard")} className="credit-card" href="#">Cradit Card</a>
      
       <hr/>
       <br/>
       <a  onClick={()=> setShow("debitcard")} className="credit-card" href="#">Debit Card</a>
       <hr/>
       <br/>
       <a onClick={()=>setShow("netbanking")} className="credit-card" href="#">Net Banking</a>
       <hr/>
       <br/>
       <a onClick={()=>setShow("upi")} className="credit-card" href="#">UPI Payment</a>
       <hr/>
       <br/>
       <img  onClick={()=>setShow("zesto")} style={{width:"60%",paddingLeft:"35%"}} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/zest-ba7b00f2280b8dccaf218f9583ac1fce72183ccf866769d548bfe887bdb877ae.png" alt="test"/>
       <br/>
       <hr/>
       <br/>
       
       <img  onClick={()=>setShow("paytm")}  style={{width:"60%",paddingLeft:"35%"}} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/paytm_logo-fa816f9adc5494b20bd1d42dde2a740ecf907e3514f3a3ffab3f680fe0e80256.png" alt="test" />
       <br/>
       <hr/>
       </div>
       </div>

       
       </div>

       {show==="creditcard"?<CreditCard />:show==="debitcard"?<DebitCard/>:show==="paytm"?<Paytm/>:show==="zesto"?<Zesto/>:show==="upi"?<Upi/>:show==="netbanking"?<Netbanking/>:<CreditCard />}

       </div>
       
      </div>


      <div className="card secondry-card" >
      <div className="card-header fw-bolder">
      SUMMERY
   </div>
       <div className="secandry-child">
       <span>Total Payable Amount</span>
       <h6><b>₹{amount}.00</b></h6>
       </div>
      </div>
     
      
    </div>

    <div style={{padding:"3%"}}>
    <p><b>NOTE:</b>
    Making Payments on RoyalBrothers.com is 100% safe. Your transaction is processed through a secure 
    https internet connection based on secure socket layer technology. 
    Your payment details are only used for processing the transaction and never stored.
    </p>
    
    </div>
    
    
    
    </div>
}