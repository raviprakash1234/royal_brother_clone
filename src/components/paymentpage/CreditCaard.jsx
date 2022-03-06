import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./paymentpage.css"


export const CreditCard = ()=>{

   const [payment, setPayment] = useState({
      card:"",
      name:"",
      m:"",
      y:"",
      cvv:""
  })

  const [error, setError] = useState("")

  const {card, name, m, y, cvv} = payment

  const history = useNavigate()
  
  const handleSubmit = (e) =>{
   e.preventDefault()

   if(!card || !name || !m || !y ||!cvv){
       setError("Please Fill All Input Box😢")
   }
   else if(card.length !== 16 || typeof card=="number"){
      setError("Please fill 16 digits valid card numbers❌")
   }
   else if(cvv.length !== 3|| typeof y ==="number"){
      setError("Invalid CVV❌")
   }
   else{
      alert("YOUR PAYMENT IS SUCCESSFUL😍")
      history("/")
   }
}


  const handleInputChange = (e)=>{
   let  {name, value} = e.target
   setPayment({...payment, [name]:value}) 
}


    return<div>

          <div>
          
          
    <div>   
           
    <div style={{display:"flex"}} className="credit-card-logo" >
    <input  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <img className="credit-card-img"  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/visa_mastercard-24e2ffa5d62a09351fa66b54c1cac94070b87ee181ec12ff35b7f67e573973a0.png" 
    alt="test"/>
    <input style={{marginLeft:"4%"}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <img className="credit-card-img" src="https://d36g7qg6pk2cm7.cloudfront.net/assets/american_express-6d3a29aa70d346eea440f529b26c328a70cb3174956fbcedf3dad366d4100b9c.png" 
    alt="test"/>
    <input style={{marginLeft:"4%"}}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <img className="credit-card-img" src="https://d36g7qg6pk2cm7.cloudfront.net/assets/diners_club-f9e57f98657b6d134bb600710e4c43c35f798acc621552e8d9cf168fb4a25988.png" 
    alt="test"/>
    </div>


  <div className="card card-header credit-card-model">
  {error && <span style={{color:"red"}}>{error}</span>}
     <label>Card Number</label>
     <input name="card" value={card} onChange={handleInputChange} type="text"  maxLength={16} className="credit-card-inp"  placeholder="Enter your card number"/>
     <br/>
     <label>Name on the card</label>
     <input name="name" value={name} onChange={handleInputChange} type="text"  className="credit-card-inp" placeholder="Enter Name on the card"/>
     <br/>
  
     <div>
        <div>
             <label>Expire</label>
            <lable style={{marginLeft:"30%"}}>CVV</lable><br/>
            
            <input name="m" value={m} onChange={handleInputChange} type="text" maxLength={2} placeholder="M" className="month" />
            <input name="y" value={y} onChange={handleInputChange} type="text" maxLength={2} placeholder="Y" className="year" />
            <input name="cvv" value={cvv} onChange={handleInputChange} type="text" maxLength={3} placeholder="CVV" className="cvv" />
        </div>
     
     </div>
   
  
     </div>
     <br/>
     <button class="btn btn-warning" onClick={handleSubmit} style={{marginLeft:"5%"}} variant="contained" size="medium">
     Make Payment
  </button>
  
  </div>

          
          </div>
      
        </div>
    
    
    
    
}