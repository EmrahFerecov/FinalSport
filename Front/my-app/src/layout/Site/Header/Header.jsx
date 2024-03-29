


import React, { useState, useEffect, useContext } from 'react';

import "./Header.scss";
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Offcanvas } from 'react-bootstrap';
import MainContext from '../../../context/context';

const Header = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // }
  const {handleInc,handleDec,basket,deleteBasket,homeCounter}=useContext(MainContext)
  let totalPrice=0
  const [isFixed, setIsFixed] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (destination) => {
    setIsLoading(true); // Link tıklandığında yükleniyor durumunu true yap

    // İstediğiniz zamanlayıcıyı buraya ekleyebilirsiniz, örneğin 1 saniye sonra setLoading(false) gibi.

    // Ancak şu an için sadece örnekte kullanılan bir setTimeOut ekleyeceğim.
    setTimeout(() => {
      setIsLoading(false); // Simüle edilen yükleme tamamlandığında yükleniyor durumunu false yap
      navigate(destination); // İstenilen sayfaya yönlendirme yapabilirsiniz.
      

    }, 3500);
   window.scrollTo(0,0)
     ;
    
   
   
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isFixed ? 'fixed' : ''}`}>
      
       <div className="overlay" style={{ display: isLoading ? 'block' : 'none' }}>
        <div className="loading-spinner">
          <img src="https://www.cristianoronaldo.com/assets/images/brand_fragrances.jpg?t=3103296480  " alt="Loading" />
          
        </div>
      </div>
      <div className='header__left'>
        <img src="https://as2.ftcdn.net/v2/jpg/05/47/21/25/1000_F_547212561_W4bc40DMhpCcIElc6gyeCpgBVIDyXJdD.jpg" alt="" />
      </div>
      <div className='header__middle'>
        <img className={isFixed ? 'hidden' : ''} src="https://as2.ftcdn.net/v2/jpg/05/47/21/25/1000_F_547212561_W4bc40DMhpCcIElc6gyeCpgBVIDyXJdD.jpg" alt="" />



          


      </div>
      <div className='header__right'>
        <ul>
          <Link onClick={() => handleLinkClick("/")} className='link' to="/">HOME</Link>

          <div className='shop'>

           <div className='shop__left'><li className='link shop'>SHOP</li></div>  
           
          <div className='shop__right'>
            <ul>
              <li><Link onClick={() => handleLinkClick("/ShopList")} to="/ShopList" className='li'>SHOP LIST</Link></li>
              
              <li><Link onClick={() => handleLinkClick("/Cart")} to="/Cart" className='li'>CART</Link></li>
              <li><Link onClick={() => handleLinkClick("/CheckOut")} to="/CheckOut" className='li'>CHECKOUT</Link></li>
            </ul>
          </div>
         
          </div>
         
          <div className='pages'>

           <div className='pages__left'><li className='link pages'>PAGES</li></div>  
           
          <div className='pages__right'>
            <ul>
              <li><Link onClick={() => handleLinkClick("/AboutUs")} to="/AboutUs" className='li'>ABOUT US</Link></li>
              <li><Link onClick={() => handleLinkClick("/OurMenu")} to="/OurMenu" className='li'>OUR MENU</Link></li>
              <li><Link onClick={() => handleLinkClick("/OurTeam")} to="/OurTeam" className='li'>OUR TEAM</Link></li>
              <li><Link onClick={() => handleLinkClick("/BookNow")} to="/BookNow" className='li'>BOOK NOW</Link></li>
              <li><Link onClick={() => handleLinkClick("/ErrorPage")} to="/ErrorPage" className='li'>404 PAGE</Link></li>
            </ul>
          </div>
         
          </div>
          <div className='blog'>

<div className='blog__left'><li className='link blog'>BLOG</li></div>  

<div className='blog__right'>
 <ul>
   <li><Link onClick={() => handleLinkClick("/BlogRight")} to="/BlogRight" className='li'>BLOG RIGHT</Link></li>
   <li><Link onClick={() => handleLinkClick("/BlogLeft")} to="/BlogLeft" className='li'>BLOG LEFT</Link></li>
   <li><Link onClick={() => handleLinkClick("/BlogDetail")} to="/BlogDetail" className='li'>BLOG DETAIL</Link></li>

 </ul>
</div>

</div>
          <Link onClick={() => handleLinkClick("/Contact")} className='link' to="/Contact">CONTACT</Link>
          <Link onClick={() => handleLinkClick("/Register")} className='link' to="/Register">REGISTER</Link>
          <Link onClick={() => handleLinkClick("/Login")} className='link' to="/Login">LOGIN</Link>
          
            <li style={{color:"black"}} className='link bs' variant="primary" onClick={handleShow}>
            <i className="fa-solid fa-cart-shopping"></i><p style={{color:'white'}}>{homeCounter}</p>
      </li>
      

         <Offcanvas show={show} onHide={handleClose} placement="end" style={{ zIndex: 9999999050 }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>

             { 
        basket.map((item)=>{
          totalPrice += item.totalPrice
          return(
            <div  class="cart-item snipcss0-0-0-1 ofi snipcss0-4-7-8 snipcss-j4Hh1">
  <div class="item-image snipcss0-1-1-2 snipcss0-5-8-9">
    <a  class="snipcss0-2-2-3 snipcss0-6-9-10">
      <img src={item.image} alt="Item Image" class="snipcss0-3-3-4 oi snipcss0-7-10-11"/>
    </a>
  </div>
  <div class="item-detl snipcss0-1-1-5 snipcss0-5-8-12">
    <div class="item-name snipcss0-2-5-6 snipcss0-6-12-13">
      <a  class="snipcss0-3-6-7 snipcss0-7-13-14">
        {item.title}
      </a>
      <a class="item-remove snipcss0-3-6-8 snipcss0-7-13-15" onClick={()=>{
deleteBasket(item._id)
      }}>
        <img  src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/delete.png" alt="delete" class="snipcss0-4-8-9  snipcss0-8-15-16"/>
      </a>
    </div>
    <div class="item-price snipcss0-2-5-10 snipcss0-6-12-17">
      <span class="snipcss0-3-10-11 snipcss0-7-17-18">
        ${item.price}.00
      </span>
    </div>
    <div class="quantity-editer snipcss0-2-5-12 snipcss0-6-12-19">
      <div class="quantity snipcss0-3-12-13 snipcss0-7-19-20">
        <button onClick={()=>{
        handleDec(item)
      }}  type="button" class="sub minus snipcss0-4-13-14 snipcss0-8-20-21">
          -
        </button>
        <input class="count snipcss0-4-13-15 snipcss0-8-20-22" name="quantity" type="number" value={item.count} min="1" max="10"/>
        <button  onClick={()=>{
        handleInc(item)
      }} type="button" class="add plus snipcss0-4-13-16 snipcss0-8-20-23">
          +
        </button>
      </div>
    </div>
  </div>
</div>

          )
        })

        }
          </div>
          <div class="cart-footer snipcss0-1-1-56 snipcss-bc3vR">
  <div class="sub-total snipcss0-2-56-57">
    <strong class="snipcss0-3-57-58">
      Subtotal:
    </strong>
    <span class="sprice snipcss0-3-57-59">
      ${totalPrice}.00
    </span>
  </div>
  <div class="cart-footer-des snipcss0-2-56-60">
    <p class="snipcss0-3-60-61">
      Taxes and shipping calculated at checkout
    </p>
  </div>
  <div class="cart-button snipcss0-2-56-62">
    <ul class="snipcss0-3-62-63">
      <li class="snipcss0-4-63-64">
        <Link to="/Cart"  class="btn-ct btn-small snipcss0-5-64-65">
          View Cart
        </Link>
      </li>
      <li class="snipcss0-4-63-66">
        <a  class="btn-ct btn-small subtotal snipcss0-5-66-67">
          Checkout
        </a>
      </li>
    </ul>
  </div>
</div>

       
        </Offcanvas.Body>
      </Offcanvas>
      
     
            
        </ul>
      </div>
    </div>
  );
}

export default Header;
