import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./checkout.css"
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export const Checkout = () =>{

   let date = JSON.parse(localStorage.getItem("date"));
  let time = JSON.parse(localStorage.getItem("time"));
  let ddate = JSON.parse(localStorage.getItem("ddate"));
  let dtime = JSON.parse(localStorage.getItem("dtime"));
  

   const [product, setProduct] = useState("")
   const [coupan, setCoupan] = useState("")
   const [text, setText] = useState("")
   const [show, setShow] = useState("")
  
   const [helmate, setHelmate] = useState(false)
   
   // console.log('show:', show)
   

   let  x = Date.parse(date);
 
   let y = Date.parse(ddate);
   
   let hour1 = time;
   let hour2 = dtime;
   // change into minutes
   let hour1Min = hour1.split(":")[0];
   let hour2Min = hour2.split(":")[0];
   let ans = Math.abs(hour1Min - hour2Min);
   if (hour1Min !== hour2Min && hour1.split(":")[1] === hour2.split(":")[1]) {
     ans = ans + 1;
    
   }
  
  let t = Math.abs((x - y)/3600000)+ans
   


  
   const {id} = useParams()
   // console.log('id:', id)
   
   
   useEffect(()=>{
      fetch(`https://bikeapis.herokuapp.com/bikes/${id}`).then((d)=>d.json()).then((res)=>{
          console.log('res:', res)
          setProduct(res)
      }).catch((err)=>{
          console.log('err:', err)

      })
  },[id])

 

  const handleCoupan = (e)=>{
   e.preventDefault()
  

   if(coupan==="brothers40"){
      setText("brothers40")
      alert("Congratulations!🎉 Your Coupan Is Applied")
   }
   else{
      alert("Invalid Coupan😞")
   }
  }
  let total = 0
   let price = +product.hourPrice
  if(text==="brothers40"){
     total += Math.abs(price-Math.floor((price*40)/100)*t) 
  }
  else{
     total += (product.hourPrice)*t
  }
  
//   console.log("Total",Total)
//   console.log('product:', product.price)

useEffect(()=>{
   let helmateText = +show
      if(helmateText===2){
         setHelmate(true)
        
       }
       else{
          setHelmate(false)
          
       }
       
       
     },[show])
   //   console.log('helmate:', helmate)
  
  


    return (
        <div className="margin-left-in-card">
        <div className="card" style={{width: "45rem", padding:"20px"}}>
             <h4 style={{fontSize:"30px"}} className="summary"><b>SUMMERY</b></h4>
      
             <div className="dispaly">

            
             <div>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>

             
                <img className="img-width" src={product.image}
                alt="test"
                />
                <h5 className="honda">{product.name}</h5>
             </div>
             <div>
                   <div  className="display-left-item">
                      <div>
                      <span className="garage-title">{time}</span><br/>
                      <span style={{marginTop:"-20px"}} className="garage-title">{date}</span>
                      </div>

                   
                      <p className="to" >to</p>
                     

                      <div style={{marginLeft:"40%"}}>
                      <span className="garage-title">{dtime}</span><br/>
                      <span style={{marginTop:"-20px"}} className="garage-title">{ddate}</span>
                      </div>

                   </div>
                    <br/>
                   <hr/>
                   <hr style={{marginTop:"-10px"}}/>
                    <br/>
                  <div  className="display-price">

                       <div>
                          <span  className="garage-title">Weekday - 6 days *₹650.0/day</span>
                          <span style={{marginTop:"-20px"}} className="garage-title">Weekday - 6 days *₹650.0/day</span><br/>
                          <span style={{marginTop:"-20px"}} className="garage-title">Peak pricing</span>
                          <h6><b>Total</b></h6>
                         <div style={{paddingTop:"5%"}}>
                         <span>Number of Helmet (?)</span>
                         </div>
                       </div>

                       <div style={{marginLeft:"15%" }}>
                          <span className="garage-title">&#x20B9;5200.0</span>
                          <span style={{marginTop:"-20px"}} className="garage-title">&#x20B9;4550.0</span><br/>
                          <span style={{marginTop:"-20px"}} className="garage-title">&#x20B9;0.0</span>
                          <h6><b>&#x20B9;{total}.00</b></h6>
                           <div style={{paddingTop:"13%"}}>
                           <select onChange={(e)=>setShow(e.target.value)} style={{width:"100%", outline:"none"}} className="card">
                           <option  value="1">1</option>
                           <option value="2">2</option>
                        </select>
                           </div>
                       </div>
                  
                       
                  </div>
                  <br />
                  <br />
                 
                  

                <div>
                <div style={{display:"flex"}}>
                <input onChange={(e)=> setCoupan(e.target.value)} style={{width:"70%",verticalAlign:"bottom"}} className="col l8 m8 code_field no-outline" type="text" 
                placeholder="Coupan Code"
                />
                <button 
                class="btn btn-warning"
                variant="contained" size="medium"
                type="button"
                style={{width:"30%",height:"40px",marginTop:"12px"}}
                onClick={handleCoupan}
                >Apply</button>
                </div>

                <br/>
                <br/>
                

                <div>
                <span>Km limit (?)</span>
                <span style={{float:"right"}}>3434 km</span>
              </div>   
              
              <div >
              <span style={{marginTop:"-30px"}}>Excess km charges (?)</span>
              <span style={{float:"right"}}>4.0/km</span>
            </div>     
               
                
                </div>
             </div>
           </div>
         </div>
          
         <div className="card" style={{width: "25rem", padding:"20px", marginLeft:"2%", height:"50%"}}>
            <h4 style={{fontSize:"30px"}} className="summary"><b>CHECKOUT</b></h4>
             
            <div className="display-checkout">
                 <div>
                     <span  className="garage-title">Booking Fee</span>
                     <br/>
                     <br/>
                     <span className="garage-title">IGST (28%)</span>
                     <br/>
                     <br/>
                     <span style={{marginTop:"-80px"}} className="garage-title">Refundable Deposit</span>
                     <br/>
                     <br/>
                     <span style={{marginTop:"-80px"}} className="garage-title">{helmate?"Extra Helmet":null}</span>
                     <h6 className="garage-title"><b>Total Payable Amount</b></h6>
                 </div>

                 <div style={{marginLeft:"35%"}}>
                     <span>&#x20B9;{total}.00</span>
                     <br/>
                     <br/>
                     <span>&#x20B9;2850.00</span>
                     <br/>
                     <br/>
                     <span>&#x20B9;1500.00</span>
                     <br/>
                     <br/>
                     <span style={{marginTop:"5px"}}>{helmate?"₹"+700+".00":null}</span>
                     <h6 style={{marginTop:"13px"}}><b>₹{helmate?total+700+4350:total+4350}.00</b></h6>
                 </div>
            </div>
            <Link to={`/checkout/paymentpage/${helmate?total+700+4350:total+4350}`} style={{textDecoration:"none"}}>
            <button class="btn btn-warning" style={{width:"100%" }} variant="contained" size="medium">
            Make Payment
        </button>
            </Link>
         </div>        
      </div>


    )
}

