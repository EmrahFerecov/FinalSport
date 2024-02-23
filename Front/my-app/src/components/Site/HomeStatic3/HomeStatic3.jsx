import React, { useState } from 'react'
import "./HomeStatic3.scss"
import axios from "axios"
const HomeStatic3 = () => {
  
  const [email,setEmail] = useState()
  const [subject,setSubject] = useState()
  const [message,setMessage] = useState()
  const [messag,setMessag] = useState()
  const [subjec,setSubjec] = useState()
  const [date,setDate] = useState()
  
  const [guest,setGuest] = useState()
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
    <div className='pza'>
        <section class="reservation-part left-padding mb-150 position-r overflow-h snipcss-VHeQ9 style-BHslN" id="style-BHslN">
  <div class="row align-items-center">
    <div class="col-xl-5 col-lg-6 col-md-12">
      <div class="section-heading section-heading-left wow fadeInLeft animated style-x3AtK" id="style-x3AtK">
        <h5 class="sub-title">
          
        Shopping
        </h5>
        <h2>
        50% discount on the first 10 orders!
        </h2>
      </div>


      <div className='inim'>
<div>
<div className='rez'>
         <div>
            <input type="text" placeholder='Name*' onChange={(e)=>setMessag(e.target.value)}/> <br />
            <input type="text" placeholder='Phone*' onChange={(e)=>setSubjec(e.target.value)}/> <br />
            <input type="text" placeholder='Date*' onChange={(e)=>setDate(e.target.value)}/>
         </div>
         <div>
         <input type="text" placeholder='Email*' onChange={(e)=>setEmail(e.target.value)}/> <br />
            <input type="text" placeholder='Message*' onChange={(e)=>setMessage(e.target.value)}/><br />
            <input type="text" placeholder='Guest*' onChange={(e)=>setGuest(e.target.value)}/> 
         </div>
      </div>
        
        <div className='bnb'>

            <button onClick={sendMail}>BOOK NOW</button>
        </div>

      </div>
 <div class=" tc text-center">
      <div class="reservation-pizza position-r wow fadeInRight animated style-EkpjM" id="style-EkpjM">
        
        
        <img className='pz' src="https://cdn.geaflare.com/4388a2/263147/mockup/2021/10/27/mku891rotn/33.20.34.36.3.0.95.100/5a4659890d95a856c7a3e96b07a342c2/2022/11/07/thumbnail/bulk349891_GZroUl/jgp5-cool-soccer-lovers-player-football-goal-classic-t-shirt-2-front-navy-480px.png" class="position-r" alt="Pizza"/>
      </div>
    </div>

        
      </div>

      
      


      
    </div>


    
   
  </div>
  <div class="book-jamun wow fadeInRight animation-delay-5 animated style-Upv79" id="style-Upv79">
    <img src="https://t4.ftcdn.net/jpg/01/87/91/41/360_F_187914118_GYNR71jZ6seXtrFgKTbzfAFFVezesbwy.jpg" alt="Jamun"/>
  </div>
  <div class="book-leaf-big wow fadeInRight animation-delay-5 animated style-Q5yAj" id="style-Q5yAj">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/015/324/927/small/soccer-ball-cracked-wall-football-club-graphic-design-logos-or-icons-illustration-vector.jpg" alt="Leaf"/>
  </div>
</section>

    </div>
  )
}

export default HomeStatic3