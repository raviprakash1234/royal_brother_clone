import { Button } from "@mui/material"

export const Netbanking = ()=>{
    return<div>
    
       <div>
       <div style={{display:"flex"}} className="credit-card-logo" >
       <input   className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
       <img className="credit-card-img"  src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png" 
       alt="test"/>
       <input style={{marginLeft:"4%"}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
       <img className="credit-card-img" src="https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.png" 
       alt="test"/>
       <input style={{marginLeft:"4%"}}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
       <img className="credit-card-img" src="https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png" 
       alt="test"/>
       <br/>
       </div>
       
       <div style={{padding:"3%"}}>
       <p>or select any other Bank:</p>
       <select style={{border:"1px solid gray"}}>
         <option style={{}}>Select Bank</option>
         <option value="Punjab & Sind Bank">Punjab & Sind Bank</option>
         <option value="UCO Bank">UCO Bank</option>
         <option value="Canara Bank">Canara Bank</option>
         <option value="IDBI Bank Limited">IDBI Bank Limited</option>
       </select>
       <br/>
       <br/>
       <br/>
       <p style={{fontSize:"15px"}}><b>NOTE:</b>In the next step you will we redirected to your bank's website to verify yourself</p>
        <br/>
       <button class="btn btn-warning"  style={{ marginLeft:"30%"}} variant="contained" size="medium">
       pay Now
    </button>

       </div>

       </div>

    </div>
}

