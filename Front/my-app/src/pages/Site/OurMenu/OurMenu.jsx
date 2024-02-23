import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'
import "./OurMenu.scss"
const OurMenu = () => {
  const {filter,addBasket}=useContext(MainContext)
  const [activeButton, setActiveButton] = useState('ALL');
  const handleClick = (button) => {
    setActiveButton(button);
  };
  const {all}=useContext(MainContext)
  const [activeButtonn, setActiveButtonn] = useState('FIRST');
  const handleClickk = (button) => {
    setActiveButtonn(button);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Our Products
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
              Our Products
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</section>
{/* 
<div className='aspop'>
  <button onClick={() => handleClick('ALL')}>ALL</button>
  <button  onClick={() => handleClick('Pants')}>Pants</button>
  <button onClick={() => handleClick('Sneakers')}>SneakersS</button>
  <button onClick={() => handleClick('T-Shirt')}>T-Shirt</button>
  <button onClick={() => handleClick('Accesuarry')}>Accesuarry</button>
</div> */}
{/* <div className='aspop'>
  <button className='poas' style={{backgroundColor: activeButton === 'ALL' ? 'orange' : 'inherit',color: activeButton === 'ALL' ? 'white' : 'inherit'}} onClick={() => handleClick('ALL')}>ALL</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'Pants' ? 'orange' : 'inherit',color: activeButton === 'Pants' ? 'white' : 'inherit' }} onClick={() => handleClick('Pants')}>Pants</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'Sneakers' ? 'orange' : 'inherit' ,color: activeButton === 'Sneakers' ? 'white' : 'inherit'}} onClick={() => handleClick('Sneakers')}>SneakersS</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'T-Shirt' ? 'orange' : 'inherit',color: activeButton === 'T-Shirt' ? 'white' : 'inherit'}} onClick={() => handleClick('T-Shirt')}>T-Shirt</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'Accesuarry' ? 'orange' : 'inherit',color: activeButton === 'Accesuarry' ? 'white' : 'inherit',}} onClick={() => handleClick('Accesuarry')}>Accesuarry</button>
</div> */}
<div className='aspop'>
      <button
        className={activeButton === 'ALL' ? 'active' : ''}
        onClick={() => handleClick('ALL')}
      >
        ALL
      </button>
      <button
        className={activeButton === 'Pants' ? 'active' : ''}
        onClick={() => handleClick('Pants')}
      >
        Pants
      </button>
      <button
        className={activeButton === 'Sneakers' ? 'active' : ''}
        onClick={() => handleClick('Sneakers')}
      >
        Sneakers
      </button>
      <button
        className={activeButton === 'T-Shirt' ? 'active' : ''}
        onClick={() => handleClick('T-Shirt')}
      >
        T-Shirt
      </button>
      <button
        className={activeButton === 'Accesuarry' ? 'active' : ''}
        onClick={() => handleClick('Accesuarry')}
      >
        Accesuarry
      </button>
    </div>

<div className='card2'>
   
  {activeButton === 'ALL' && (
          filter.map((item, index) => {
            if(item.brand=="all"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                addBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}
        {activeButton === 'Sneakers' && (
          filter.map((item, index) =>{
            if(item.brand=="Sneakers"){
     return(
            <div className='card2__card' key={index}>
            <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
             <img className='il' src={item.image} alt="" />
           </Link>
           <div className='card2__tp'>
             <p className='p1'>{item.title}</p>
             <p className='p2'>${item.price}.00</p>
           </div>
           <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
           <div className='card2__desc'>{item.desc}</div>
           <div class="btt menu-item-order snipcss-DQMsl">
<a onClick={()=>{
                addBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
 <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
 Order Now
</a>
</div>
         </div>
          )}
            }
          )
      
        )}
         {activeButton === 'Pants' && (
          filter.map((item, index) => {
            if(item.brand=="Pants"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                addBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}
         {activeButton === 'T-Shirt' && (
          filter.map((item, index) => {
            if(item.brand=="T-Shirt"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                addBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}
         {activeButton === 'Accesuarry' && (
          filter.map((item, index) => {
            if(item.brand=="Accesuarry"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                addBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}


</div>


    
<section class="feeddback-part position-r mb-150 overflow-h snipcss0-0-0-1 snipcss-aaBv9">
  <div class="feeddback-vacter wow fadeInLeft animation-delay-5 animated snipcss0-1-1-2 style-5AFpT" id="style-5AFpT">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/leaf.png" alt="Vacter Image" class="snipcss0-2-2-3"/>
  </div>
  <div class="container snipcss0-1-1-4">
    <div class="section-heading wow fadeInUp animated snipcss0-2-4-5 snipcss0-0-0-1 style-334PJ" id="style-334PJ">
      <h5 class="sub-title snipcss0-3-5-6 snipcss0-1-1-2">
        Customer Feedback
      </h5>
      <h2 class="snipcss0-3-5-7 snipcss0-1-1-3">
        Client Testimonials
      </h2>
    </div>
    <div>

     
<div className='card5'>
{activeButtonn === 'FIRST' && (
          all.map((item, index) => {
            if(item.brand=="first"){
               return(
            <div className='card5__card' key={index}>
               <div className='ma'>
                <img className='il' src={item.image} alt="" />
              </div>
              <div className='card5__tp'>
                <p className='p1'>{item.title}</p>
               
              </div>
              <div className='card5__desc'>{item.desc}</div>
              <div className='card5__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              
              <div class="btt menu-item-order snipcss-DQMsl">
  
</div>
            </div>
          )}
            }
           )
        )}
        {activeButtonn === 'TWO' && (
          all.map((item, index) =>{
            if(item.brand=="two"){
     return(
            <div className='card5__card' key={index}>
            <div className='ma'>
             <img className='il' src={item.image} alt="" />
           </div>
           <div className='card5__tp'>
             <p className='p1'>{item.title}</p>
             
           </div><div className='card5__desc'>{item.desc}</div>
           <div className='card5__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
           
           <div class="btt menu-item-order snipcss-DQMsl">

</div>
         </div>
          )}
            }
          )
      
        )}

</div>


    </div>
    <div class="testimonials-slider scr owl-carousel wow fadeInUp owl-loaded owl-drag animated snipcss0-2-4-8 style-zc9cR" id="style-zc9cR">
     
      <div class="owl-nav snipcss0-3-8-331">
        <button type="button" role="presentation" class="owl-prev snipcss0-4-331-332"className={activeButtonn === 'TWO' ? 'active' : ''}
        onClick={() => handleClickk('TWO')} >
        
        <i style={{color:'white'}} class="fa-solid fa-chevron-right"></i>
        </button>
        <button type="button" role="presentation" class="owl-next snipcss0-4-331-334" className={activeButtonn === 'FIRST' ? 'active' : ''}
        onClick={() => handleClickk('FIRST')}>
        
        <i style={{color:'white'}} class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <div class="owl-dots disabled snipcss0-3-8-336">
      </div>
    </div>
  </div>
</section>

    


     


    </div>
  )
}

export default OurMenu