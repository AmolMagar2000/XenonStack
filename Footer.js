import React, { useState } from 'react'
import './Footer.css'
import {AddContactus } from '../services/service';



function Footer() {

    const [formData,setFormData] = useState({});
    //console.log(props.pid);
    function handlechange(event){
        console.log(event.target.value);
        console.log(formData);
        setFormData({...formData,[event.target.name]:event.target.value});
    }

    async function handlesumbit(event){
        event.preventDefault();
        const data = await AddContactus(formData);
        console.log(data.data.message);
        

        if (data.data.message == "success") {

            document.getElementById('myform').reset();
      
            document.getElementById('success').innerHTML = "Successfully submitted.";
      
            // setTimeout(() => {
            //   document.getElementById('success').innerHTML = " ";
            // }, 6000);
      
          } else if (data.data.message == "error") {
      
            document.getElementById('failed').innerHTML = "Failed to submit. Please try again!"

          }
        
      
    }
  return (
    <section class="contact" id='footer'>
    <div class="content">
        <h2>Contact Us</h2>
        </div>
<div class="container">
    <div class="contactInfo">
        <div class="box">
            <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
            <div class="text">
                 <h3>Address</h3>
                <p>550 Civil lines,<br/>Near Indra Market<br/>485001</p>
            </div>      
        </div>
        <div class="box">
            <div class="icon"><i class="fa-solid fa-phone"></i></div>
            <div class="text">
                <h3>Phones</h3>
                <p>504-475-6066</p>
                <p>504-475-6067</p>
            </div>
        </div>
        <div class="box">
            <div class="icon"><i class="fa-solid fa-envelope"></i></div>
            <div class="text">
                <h3>Email</h3>
                <p>Aiahospital123@gmail.com</p>
            </div>
        </div>
    </div>
    <div class="contactForm">
        <form id="myform">
            <h2>Send Message</h2>
            <div class="inputBox">
                <input type="text" name="fullname" required="required" onChange={handlechange}/>
                <span>Full Name</span>
            </div>
            <div class="inputBox">
                <input type="text" name="email" required="required" onChange={handlechange}/>
                <span>Email</span>
            </div>
            <div class="inputBox">
                <textarea name="message" required="required" onChange={handlechange}></textarea>
                <span>Type your Message...</span>
            </div>
            <p id="success"></p>
            <p id="failed"></p>
            <div class="inputBox">
                <input type="submit" name="" value="Send" onClick={handlesumbit}/>
            </div>
        </form>
    </div>
</div>
</section>
    
  )
}
export default Footer