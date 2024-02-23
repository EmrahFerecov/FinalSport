import React from 'react'
import { Link } from 'react-router-dom'
const BlogLeft = () => {
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
            Blog Left
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
              <Link onClick={scrollToTop} to="/">
                Home
              </Link>
            </li>
            <li>
              Blog Left
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</section>

<section class="blog-list ptb-150 overflow-h snipcss-wp6TQ">
  <div class="container">
    <div class="row">
    <div class="col-xl-4 col-lg-4 col-md-12">
        <div class="blog-sidebar wow fadeInRight animated style-6aJKJ" id="style-6aJKJ">
          
          <div class="blog-cate mb-50">
            <h2 class="blog-cat-title">
              Categories
            </h2>
            <ul>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                    Pants
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                    Shoes
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                    Hats
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                    T-shirt
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div class="recent-news mb-50">
            <h2 class="blog-cat-title">
              Recent News
            </h2>
            <div class="news-box">
              <div class="news-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://cdn11.bigcommerce.com/s-rhv1asj7/images/stencil/1280x1280/products/1212/2922/99_large_skull_blue__11332.1686156987.jpg?c=2" alt="recent-1"/>
                </Link>
              </div>
              <div class="news-detail">
                <span class="date">
                  07 Mar 2022
                </span>
                <Link onClick={scrollToTop} to="/BlogDetail" class="news-title">
                  How to keep fear from your art business
                </Link>
              </div>
            </div>
            <div class="news-box">
              <div class="news-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://m.media-amazon.com/images/I/61CL3ZqF01L._AC_UY1000_.jpg" alt="recent-2"/>
                </Link>
              </div>
              <div class="news-detail">
                <span class="date">
                  07 Mar 2022
                </span>
                <Link onClick={scrollToTop} to="/BlogDetail" class="news-title">
                  How to keep fear from your art business
                </Link>
              </div>
            </div>
            <div class="news-box">
              <div class="news-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT2R3ref_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692937676856" alt="recent-3"/>
                </Link>
              </div>
              <div class="news-detail">
                <span class="date">
                  07 Mar 2022
                </span>
                <Link onClick={scrollToTop} to="/BlogDetail" class="news-title">
                  How to keep fear from your art business
                </Link>
              </div>
            </div>
          </div>
          <div class="blog-tags mb-50">
            <h2 class="blog-cat-title">
              Tags Cloud
            </h2>
            <ul>
              
              <li>
                <a href="javascript:void(0)">
                Cr7 Parfume
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                Cr7 Shm
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                Ursu
                </a>
              </li>
              
              
              
            </ul>
          </div>
          <div class="blog-social">
            <h2 class="blog-cat-title">
              Follow Us
            </h2>
            <ul class="footer-social">
              <li>
                <a href="" class="facebook">
                  <i class="fa fa-facebook" aria-hidden="true">
                  </i>
                </a>
              </li>
              <li>
                <a href="" class="pinterest">
                  <i class="fa fa-pinterest-p" aria-hidden="true">
                  </i>
                </a>
              </li>
              <li>
                <a href="" class="twitter">
                  <i class="fa fa-twitter" aria-hidden="true">
                  </i>
                </a>
              </li>
              <li>
                <a href="" class="instagram">
                  <i class="fa fa-instagram" aria-hidden="true">
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class=" col-xl-8 col-lg-8 col-md-12">
        <div class="blog-list-part wow fadeInLeft animated style-9vyBJ" id="style-9vyBJ">
          <div class="blog-singel-list">
            <div class="br blog-img">
              <Link onClick={scrollToTop} to="/BlogDetail">
                <img className='br' src="https://i.pinimg.com/564x/7c/25/41/7c254199e9382536d99354113fbe1383.jpg" alt="blog-list-1"/>
              </Link>
            </div>
            <div class="blog-list-content">
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h3 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h3>
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
          <div class="blog-singel-list">
            <div class=" br blog-img">
              <Link onClick={scrollToTop} to="/BlogDetail">
                <img className='br' src="https://smithandquinn.com/cdn/shop/files/smith-_-quinn-womens-spring-sport-collection-camilla-golf-tennis-pickleball-dress-dandelion-haze-1_1600x.jpg?v=1701474529" alt="blog-list-2"/>
              </Link>
            </div>
            <div class="blog-list-content">
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h3 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h3>
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
          <div class="blog-singel-list">
            <div class="br blog-img">
              <Link onClick={scrollToTop} to="/BlogDetail">
                <img className='br' src="https://i.pinimg.com/736x/b0/03/28/b00328ed8b47d12b04121db75e168755.jpg" alt="blog-list-3"/>
              </Link>
            </div>
            <div class="blog-list-content">
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h3 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h3>
              <Link to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
          <div class="custom-pagination text-center">
            <ul>
              <li>
                <a href="#" class="active">
                  1
                </a>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/BlogRight">
                  2
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default BlogLeft