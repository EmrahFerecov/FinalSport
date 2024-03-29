import React, { useContext } from 'react'
import "./HomeCard1.scss"
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'
const HomeCard1 = () => {
    const {filter,addBasket}=useContext(MainContext)
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    
  return (
    <div className='homecard1'>
      <div class="section-heading wow yaz fadeInLeft animated snipcss-oPLvb style-bOlRR" id="style-bOlRR">
  <h5 class="sub-title">
    Popular Products
  </h5>
  <h2>
  Check out our site
  </h2>
</div>



<div className='card1'>
    {filter.map((item,index)=>{
      if(item.brand=="pizza"){
        return(
            <div className='card1__card' key={index}>
              <Link  onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card1__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card1__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card1__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                addBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cristiano_Ronaldo_Al-Nassr_2023.jpg/250px-Cristiano_Ronaldo_Al-Nassr_2023.jpg" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>


            </div>
        )
    }
      }
        )}

</div>


    </div>
  )
}

export default HomeCard1