import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Fotter() {
  return (
    <div style={{background:"#121417"}}>
        <div className='background_footer'>
            <div className='first'>
                <h2>english<span style={{color:"#4DC274"}}>excellence.</span> </h2>
                <h3 style={{opacity:'.6',fontSize:'10px'}}>Phone number:</h3>
                <h4>+380 (68) 443-94-26</h4>
                <h3 style={{opacity:'.6',fontSize:'10px'}}>Address:</h3>
                <h5>32a M. Bazhana ave</h5>
            </div>
            <div className='second'>
                <ul>
                    <li>About us</li>
                    <li>Our lessons</li>
                    <li>Teachers</li>
                    <li>Reviews</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='third'>
                
            <FaFacebookF />
            <FaInstagramSquare />
            <FaYoutube />
                
            </div>
            
        </div>
        <hr />
        <div style={{display:"flex",alignItems:"end", justifyContent:"space-between", color:"#ffffff",marginLeft:"10px",marginRight:"10px"}}>
            <div>
                <p>©2023  English Excellence. All rights reserved.</p>
            </div>
            <div style={{display:"flex",alignItems:"end", gap:"10px"}}>
                <p>PrivacyPolicy</p>
                <p>Terms of Service</p>
            </div>
        </div> 
    </div>
    
  )
}

export default Fotter
