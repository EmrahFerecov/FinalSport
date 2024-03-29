import React, { useContext, useEffect, useState } from 'react'
import "./CheckOut.scss"
import { Link } from 'react-router-dom'
import axios from 'axios';
import MainContext from '../../../context/context';
const CheckOut = () => {
  const [orders, setOrders] = useState([]);
  
  const {handleInc,handleDec,basket,deleteBasket}=useContext(MainContext)
  useEffect(() => {
    axios.get("http://localhost:3000/order").then(res => {
      setOrders(res.data);
    });
  }, [])

  const handleCancelOrder = (orderId) => {
    axios.delete(`http://localhost:3000/order/${orderId}`)
      .then(res => {
        // Remove the deleted order from the local state
        setOrders(orders.filter(order => order._id !== orderId));
      })
      .catch(err => {
        console.error('Error deleting order:', err);
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
            Checkout
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
              Checkout
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</section>

<section class="checkout ptb-150 snipcss-mRGGx">
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-12">
          <div class="billing-detail">
            <h4 class="mb-20">
              Billing Details
            </h4>
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="name" placeholder="First Name" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="name" placeholder="Last Name" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="name" placeholder="Company Name" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="email" placeholder="Email Address" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="text" placeholder="Phone No" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="text" placeholder="Country" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="text" placeholder="House number and street name" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="text" placeholder="Apartment, suit, unit, etc." class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="text" placeholder="Postcode / Zip" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="text" placeholder="Town / City" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="create_account" required=""/>
                    <label class="form-check-label" for="create_account">
                      Create an Account?
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="add-info md-mb-40">
            <h4 class="mb-20">
              Additional Information
            </h4>
            <div class="form-group p-0">
              <textarea class="form-control" placeholder="Order Notes">
              </textarea>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12">
          {orders.map((order,index)=>{
            return(
<>


<div class="your-order">
   
      <div key={index}>
        <h4 class="mb-20">Your Order</h4>
        {order.items.map((item, itemIndex) => (
          <div key={itemIndex} class="product-box">
            <div class="product-img">
              <a href="shop-detail.html">
                <img src={item.image} alt="Item Image" />
              </a>
            </div>
            <div class="product-detail">
              <div><a  class="pro-title">
                {item.title}
              </a></div>
              
              <div class="qty-box">
                <span class="price">${item.price}.00</span>
                

              </div>

              
            </div>


          </div>


        ))}
      </div>
    <div style={{marginLeft:'20px'}}  onClick={() => handleCancelOrder(order._id)}className='btn imtina btn-warning'>Imtina et</div>
  
</div>

          <div class="checkout-total">
            <ul>
              <li>
                <span class="subtotal">
                  Subtotal
                </span>
                <span class="subtotal-amount">
                  ${order.totalPrice}.00
                </span>
              </li>
              <li>
                <span class="subtotal">
                  Shipping Cost
                </span>
                <span class="subtotal-amount">
                  $00.00
                </span>
              </li>
              <li>
                <span class="grand-total">
                  Total
                </span>
                <span class="total-amount">
                  ${order.totalPrice}.00
                </span>
              </li>
            </ul>
          </div>
         

</>

            )
          })}
         <div class="pay-method">
            <h4 class="mb-20">
              Payment Method
            </h4>
            <ul>
              <li>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="payment" id="bank_transfer" checked=""/>
                  <label class="form-check-label" for="bank_transfer">
                    Direct bank transfer
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="payment" id="check_payments"/>
                  <label class="form-check-label" for="check_payments">
                    Check payments
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="payment" id="cash_delivery"/>
                  <label class="form-check-label" for="cash_delivery">
                    Cash on delivery
                  </label>
                </div>
              </li>
              <li>
                <button class="btn-ct">
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </form>
  </div>
</section>

    </div>
  )
}

export default CheckOut