import React from 'react';
import { useState} from 'react';
import './Contactus.css';



   export default function Contact() {
     const [fname, setFname] = useState('');
     const [lname, setLname] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] = useState('');
     const [msg, setMsg] = useState('');
     const [sentmsg, setSentmsg] = useState('');
     const [errmsg, setErrmsg] = useState('');
     
    const handleSubmit= async (e) => {
         e.preventDefault();
        // console.log(fname,lname,email,phone,msg);
        if(phone.isInteger==true && phone.length == 10 && msg.length>0){
          setErrmsg('');
          const data = {
            First : fname,
            Last: lname,
            Email: email,
            Phone: phone,
            Message: msg
          }
          //console.log(data);
          await axios.post('https://sheet.best/api/sheets/3b8be3b7-7951-40a7-b60d-8887214ed480',data).then((resp)=>{
            console.log(resp);
            setFname('');
            setLname('');
            setEmail('');
            setPhone('');
            setMsg('');
            setSentmsg("Your message has been sent successfully! We'll get back to you soon.");
          })
        }
        else{
          setErrmsg("Fill the form properly")
        }
      
     
    }

     return (
      <section class="footer_get_touch_outer">
        <div class="container contact-us-bg">
          <div class="footer_get_touch_inner grid-70-30 row">
            <div class="colmun-70 get_form">
              <div class="get_form_inner">
                <div class="get_form_inner_text">
                  <h3>Get In Touch</h3>
                  <h3 className="contact-err-msg">{errmsg}</h3>
                </div>
                <form action="#" onSubmit={handleSubmit}>
                  <div class="grid-50-50">
                    <input type="text" placeholder="First Name" onChange={(e)=> setFname(e.target.value)} value={fname}/>
                    <input type="text" placeholder="Last Name" onChange={(e)=> setLname(e.target.value)} value={lname}/>
                    <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    <input type="tel" placeholder="Phone/Skype" onChange={(e)=> setPhone(e.target.value)} value={phone}/>
                  </div>
                  <div class="grid-full">
                    <textarea placeholder="Your Message" cols="30" rows="10" onChange={(e)=> setMsg(e.target.value)} value={msg}></textarea>
                    <input type="submit" value="Submit" />
                    <h3 className="contact-sent-msg">{sentmsg}</h3>
                  </div>
                </form>
              </div>
            </div>

            <div class="colmun-30 get_say_form">
              <h5>Say Hi!</h5>
              <ul class="get_say_info_sec">
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="mailto:">info@AlyazyehPearls.com</a>
                </li>
                <li>
                  <i class="fa fa-whatsapp"></i>
                  <a href="tel:">+971 544444210</a>
                </li>
                <li>
                  <i class="fa fa-skype"></i>
                  <a href="#">ALYAZYEH FOR PEARLS & PRECIOUS STONES TRADING CO. L.L.C, Office G/05, Owned by FAHAD AHMAD ABDULKARIM ALZAROUNI, Hor Al Anz</a> 
                </li>
              </ul>  
              <ul class="get_say_social-icn">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              </ul>          
            </div>        
          </div>
        </div>
    </section>
  );
}