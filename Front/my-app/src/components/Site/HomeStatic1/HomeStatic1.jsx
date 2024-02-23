import React from 'react'
import "./HomeStatic1.scss"
import { Link } from 'react-router-dom'
const HomeStatic1 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className='hs1'>
    
    <section class="home-banner hsf tar1 left-padding overflow-h snipcss0-0-0-1 snipcss-AZGQk style-CplUd" id="style-CplUd">
    <div class="shirt wow fadeInLeft animation-delay-5 animated snipcss0-1-1-2 style-FzRdT" id="style-FzRdT">
      <img src="https://cdn.dsmcdn.com/mnresize/500/-/ty1085/product/media/images/prod/SPM/PIM/20231211/10/4791fbca-aab4-3886-801d-f340b2af2dd5/1_org.jpg" alt="Vacter Image" class="snipcss0-2-2-3"/>
    </div>
    <div class="fball wow fadeInUp animation-delay-5 animated snipcss0-1-1-4 style-rwwKv" id="style-rwwKv">
      <img src="https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg" alt="Vacter Image" class="snipcss0-2-4-5"/>
    </div>
    <div class="row align-items-center snipcss0-1-1-6">
      <div class="col-xl-5 col-lg-6 col-md-6 home-left-content wow fadeInLeft animated snipcss0-2-6-7 style-gtHZH" id="style-gtHZH">
        <div class="home-banner-content snipcss0-3-7-8">
          <h1  class="home-banner-title snipcss0-4-8-9">
          Goat's own products  <span class="snipcss0-5-9-10"> Cr7 </span>
          </h1>
          <div class="home-banner-desc snipcss0-4-8-11">
            <p class="snipcss0-5-11-12">
             
Get your products from the best in the world <br /> 
Cr7 difference
            </p>
          </div>
          <Link onClick={scrollToTop} to="/Ourmenu" class="btn-ct btn-large snipcss0-4-8-13">
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-5-13-14"/>
            Our Shop
          </Link>
        </div>
      </div>
      <div class="col-xl-7 col-lg-6 col-md-6 home-right-img snipcss0-2-6-15">
        <div class="home-banner-img snipcss0-3-15-16">
          <div class="home-img wow fadeInRight animation-delay-5 animated snipcss0-4-16-17 style-rwWFD" id="style-rwWFD">
            <div class="home-img-1 snipcss0-5-17-18">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/220px-Basketball.png"/>
            </div>
            <div class="home-ball snipcss0-5-17-20">
              <img src="" class="snipcss0-6-20-21"/>
            </div>
          </div>
          <div class="home-img-bottom wow fadeInUp animation-delay-5 animated snipcss0-4-16-22 style-Oy1lR" id="style-Oy1lR">
            <img src=""/>
          </div>
          <div class="slider-round-box wow fadeInRight animated snipcss0-4-16-24 style-NrAo8" id="style-NrAo8">
            <div class="slider-round snipcss0-5-24-25 style-5KYdZ" id="style-5KYdZ">
              <span class="">
              </span>
              <div class="buy-one-get snipcss0-6-25-27">
                <img src="data:image/png;base64,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"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>

  <div class="daily-fresh-inner hst snipcss-oEnTZ">
  <div class="fresh-img wow fadeInLeft animated style-NJrOP" id="style-NJrOP">
    <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1085685/zpWhrWZYh0-5060524510749_1.jpg" alt="Daily Fresh"/>
  </div>
  <div class="fresh-content wow fadeInUp animated style-HcQRK" id="style-HcQRK">
    <h3 class="title">
    
Always make confident choices.
    </h3>
    <div class="fresh-des">
      <p>
      Self-confidence brings you to us. 
Cr7 products alone differentiate you from everyone else.
      </p>
    </div>
    <img className='orlic' src="https://m.media-amazon.com/images/I/51NAY1x1NhL._AC_UF1000,1000_QL80_.jpg" alt="" />
  </div>
</div>


  
    </div>
    
  

  )
}

export default HomeStatic1