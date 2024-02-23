import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogDetail.scss"
const BlogDetail = () => {
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Blog Detail
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
              Blog Detail
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</section>

<div className='blogdetail'>

<div className='blogimg'>
  <div>
    <img src="https://www.jaegersports.com/wp-content/uploads/2017/04/js-wristb-01-600x600.jpg" alt="" />
  </div>
  <div><img src="https://objectproducts.co.uk/wp-content/uploads/2017/09/SP106-Smart-Sports-Watch.jpg" alt="" /></div>
  <div><img src="https://goals-sports.com/cdn/shop/products/4_84a9b762-7097-496d-b752-4f60fc68e607_530x@2x.jpg?v=1672979010" alt="" /></div>
  <div><img src="https://d1r71nao5uo83w.cloudfront.net/images/event-bracelets-sports.width-480.format-jpeg.jpg" alt="" /></div>
</div>
<div className='blogdes'><h5>
 <span>Cr7</span> <br /> <br />
Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sagittis congue tempor a gravida donec enim ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna at luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem fusce eu cursus fusce <br /><br />


Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida porttitor nunc, quis vehicula magna. Placerat varius consectetur nibh, vel imperdiet dui varius viverra donec ociis et magnis

Aliquet Tempus Tempor Gravida
Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus. Mauris donec ociis et 
  </h5></div>
<div  className='blogimg'>
<div>
    <img src="https://dowlingbros.com/cdn/shop/products/sport-bracelet-black-diamond-active-adjustable-gym-minimal-dowling-brothers-jewelry-jewellery-943_grande.jpg?v=1685221966" alt="" />
  </div>
  <div><img src="https://img.fruugo.com/product/7/67/757374677_max.jpg" alt="" /></div>
  <div><img src="https://shop.getmyid.com/cdn/shop/products/MyID-Sport-Neon-Pink_2000x-r2_5000x.jpg?v=1680278881" alt="" /></div>
  <div><img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d0021781cf812ac52cf1cc2c8c8ba45c.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="" /></div>
</div>



</div>

    </div>
  )
}

export default BlogDetail