import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./BookNow.scss"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
const BookNow = () => {

  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")
  const [messag,setMessag] = useState("")
  const [subjec,setSubjec] = useState("")
  const [date,setDate] = useState("")
  
  const [guest,setGuest] = useState("")
  const sendMail = ()=>{
    
    axios.get("http://localhost:3000//",{

    params:{
      email,
      message,
      guest,
      date,
      subjec,
      messag

    }
    }).then(()=>{
      console.log("failure")
    }).catch(()=>{
      console.log("success")
      
      
    })
    

  }
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
          Book A Table
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="bread-crumb wow fadeInRight animated style-5pgFQ" id="style-5pgFQ">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              Book A Table
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</section>





<div className='now'>
  <div className='now__left'>
 <div class="section-heading section-heading-left wow fadeInLeft animated snipcss-oHnZ5 style-GVefp" id="style-GVefp">
   <h5 class="sub-title">
   Call we
  </h5>
  <h2>
  Call Us Or Visit Place
  </h2>
  <p>Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor incididunt labore et magna aliqua.</p>
   </div>


<div className='won'>

 
   <div className='now1'>
     <div className='n' >
          <h4 >
            Madrid
          </h4>
          <p >
            1614 E. Bell Rd #104.
            <br />
            Salerno, AZ 85022
            <br />
            (989) 867-1010
            <br />
            Open today 11AM-10PM0
          </p>
        </div>
      
      
        <div className='now1-1' >
          <h4 >
            London
          </h4>
          <p >
            204 E. 
            <br />
            Sorrento, AZ 85022
            <br />
            (989) 867-1010
            <br />
            Open today 11AM-10PM0
          </p>
        </div>
   </div>
       
       <div className='now2'>
        <div  className='now1-1'>
          <h4 >
          Milan
          </h4>
          <p >
            Vale Puglia 54
            <br />
            Torre Del Greco AZ 85022
            <br />
            (989) 867-1010
            <br />
            Open today 11AM-10PM0
          </p>
        </div>
     
      
        <div className='n'>
          <h4 >
         Istanbul
          </h4>
          <p >
            Corso Itali AA
            <br/>
            Naples, AZ 85022
            <br />
            (989) 867-1010
            <br />
            Open today 11AM-10PM0
          </p>
        </div>
       </div>
     
     
        
      
      

</div>
  
    


  </div>

 

<div className='now__right'><img src="https://img.freepik.com/premium-psd/sports-social-media-poster_474486-1273.jpg" alt="" /></div>
</div>
   


<div className='iframe' >
      <iframe
        title="Baku Location"
        style={{ width: '100%', height: '500px' }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.352571622814!2d49.8714482153162!3d40.40926367936324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307045d9a3a89b%3A0x7efc16b8105fb81!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1605814183695!5m2!1sen!2sus"
        
      ></iframe>
    </div>

    
<div className='mi im'>

<div>
    <img src="https://burrelles.com/wp-content/uploads/2022/08/social-media-marketing.jpg" alt="" />
  </div>
  <div>
<div class="section-heading section-heading-left wow fadeInLeft animated snipcss-oHnZ5 style-GVefp" id="style-GVefp">
  <h5 class="sub-title">
  Call us
  </h5>
  <h2>
  Take your place
  </h2>
</div>



<div>

  

     <div className='con'>


    <div className='int'>
      <input type="text" req placeholder='Name*' required onChange={(e)=>setMessag(e.target.value)} />
      <input type="text" placeholder='Phone*' required onChange={(e)=>setSubjec(e.target.value)}/>
    </div>
    <div className='int'>
    <input type="email" placeholder='Email*' required onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='Message*' required onChange={(e)=>setMessage(e.target.value)} />
    </div>
   
    
  </div>




  <div className='co'>
    <div className='con'>
       <div className='int'>
    <input type="text" placeholder='Date*' required onChange={(e)=>setDate(e.target.value)} />
    </div>
    <div className='int'>
    <input type="text" placeholder='Guest*' required onChange={(e)=>setGuest(e.target.value)}/>
    </div>
    </div>
   

   <button  onClick={sendMail} ><Link to="/">BOOK NOW</Link></button>
  </div>

 



</div>



  </div>


  


</div>


    </div>
    
  )
}

export default BookNow