import { Button, Card } from "@mui/material"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./profile.css"

export const Profile = () =>{
    return <div>
    <div style={{display:"flex", width:"100%"}}>
   
    <div style={{width:"25%", marginLeft:"20%"}}>
  <Card>
  <h4  style={{padding:"15px", color:"gray"}}>PROFILE</h4>
     <div style={{padding:"15px"}}>
     <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-profile-menu-70666577f1d7fbe6bba1f46ceacdb2e4abdbb2575014670cf9afbfbf35376c25.png" alt="test"/>
     <h6>Ravi prakash kumar</h6>
     <p>+91-98786756543</p>
     <p>pravi@gamil.com 🖋</p>
     <span>Available Travel Credits : 0</span>
     </div>
  </Card>  
     <br/>
  <Card>
  
      <div style={{padding:"15px"}}>
      <p>My Wallet Balance :0.0</p>
      <Button style={{background:"#FFC600", color:"black", width:"100%"}} variant="contained" size="medium">
       check my wallet
       </Button>
       </div>
  
    </Card>
    </div>


    <Card  style={{width:"40%", marginLeft:"3%"}}>
    <h4  style={{padding:"15px", color:"gray"}}>UPLOAD DOCUMENTS</h4>
    <br/>
    <div style={{ padding:"15px"}}>
    <p style={{color:"gray", fontSize:"13px"}}>Driving License</p>
    
   <div style={{display:"flex"}} >

   <div>
    <input className="upload" type="file" style={{color:"transparent", border:"1px solid gray", width:"20%",height:"60px"}} name="photo" id="upload-photo" accept="image/*" />
    <p style={{color:"gray", fontSize:"13px"}}>Front side</p>
     </div>

     <div style={{marginLeft:"-35%"}}>
     <input className="upload"  type="file" style={{color:"transparent", border:"1px solid gray", width:"20%",height:"60px", }} name="photo" id="upload-photo" accept="image/*" />
     <p style={{color:"gray", fontSize:"13px"}}>Back side</p>
    </div>

    </div>

 
    <p style={{color:"gray", fontSize:"13px"}}>ID Proof</p>
    
   <div style={{display:"flex"}} >

   <div>
    <input className="upload" type="file" style={{color:"transparent", border:"1px solid gray", width:"20%",height:"60px"}} name="photo" id="upload-photo" accept="image/*" />
    <p style={{color:"gray", fontSize:"13px"}}>Front side</p>
     </div>

     <div style={{marginLeft:"-35%"}}>
     <input className="upload"  type="file" style={{color:"transparent", border:"1px solid gray", width:"20%",height:"60px", }} name="photo" id="upload-photo" accept="image/*" />
     <p style={{color:"gray", fontSize:"13px"}}>Back side</p>
    </div>

    </div>
     <button style={{border:"none", padding:"10px", borderRadius:"6px", background:"#D9D7F1", color:"gray"}}>
     <b>UPLOAD</b>
     </button>
    </div>
    
    <div style={{ padding:"15px",color:"gray"}}>
      <h4>Account Status</h4>
      <input type="radio"/>
      <snap> Awaiting document upload</snap>
    </div>
    <Card style={{background:"#D9D7F1"}}>
    <h6 style={{ padding:"15px",color:"gray"}}>Guidelines to Follow</h6>
      <div  style={{ padding:"15px", fontSize:"15px",color:"gray"}}>
      <ul>
      <li>Upload both sides of the DL in appropriate fields.</li>
      <li>Make sure the photocopy of the original DL is uploaded.</li>
      <li> ID proof can be Adhaar card or Passport.</li>
      <li> Make sure photos are clear and visible.</li>
      <li>Passport is mandatory for hiring superbikes.</li>
      <li> If you have signed up on Royal brothers platform from a different phone 
           number than the phone number used for your Aadhaar card, then 
           please upload any of the following documents
       additionally - Voter ID, Bank passbook or statement, Passport. (PFA)</li>
       <li> Original Driving license is to be deposited before picking up the vehicle and the
        same will be returned once the vehicle is dropped.</li>
    </ul>
      </div>
    
    </Card>
    
    </Card>

    </div>
    
    
    </div>
}