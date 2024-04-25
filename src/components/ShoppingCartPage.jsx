import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React, { useEffect, useState } from "react";

    import { FaMinus } from "react-icons/fa";
    import { FaPlus } from "react-icons/fa6";
    import { FaTrash } from "react-icons/fa6";
    import { FaHeart } from "react-icons/fa";

    import "/src/assets/css/ShoppingCartPage.css";
    import '/src/index.css';
import moment from "moment/moment";
import { removeFromCart } from "../utilis/common";
import Model from "./stripe/Model";
import { useNavigate } from "react-router-dom";
    
    export default function ShoppingCartPage() {
      const [productList,setProductList] = useState([]);
      const navigate = useNavigate();
      const handleRemoveCart = (id) => {
        removeFromCart(id);
        const filtered = productList.filter((el)=>el._id !== id);
        setProductList(filtered)
      }
      const handleDecreaseQuantity = () => {
        if (product.quantity > 1) {
            setProduct({...product,quantity : product.quantity - 1});
        }
      };

      const handleIncreaseQuantity = () => {
        setProduct({...product,quantity : product.quantity + 1});
      };
      useEffect(()=>{
        const getProducts = JSON.parse(localStorage.getItem('cartItems'));
        if(getProducts) {
          setProductList(getProducts);
        } else {
          navigate("/tienda")
        }
      },[])
    return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {productList.length} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {productList.map((item,index)=>{
                  return <><MDBRow>
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                    <MDBRipple rippleTag="div" rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay">
                      <img
                        src={item.image_url}
                        className="w-100" />
                      <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                        </div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
    
                  <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                    <p>
                      <strong>{item.title}</strong>
                    </p>
                    <p>Type: {item.type.toUpperCase()}</p>
                    <p>Category: {item.category_type.toUpperCase()}</p>
    
                    <button
                        onClick={()=>handleRemoveCart(item._id)} 
                        className="me-1 mb-2 blue-button btn-sm"
                        type="button"
                        data-mdb-toggle="tooltip"
                        title="Remove item">
                        <FaTrash fas icon="trash" />
                        
                    </button>
    
                    <button
                        className="me-1 mb-2 blue-button btn-sm btn-danger" 
                        type="button"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                        >
                        <FaHeart fas icon="heart" />
                    </button>
                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <button className="px-3 me-2 fixed-size-button blue-button" type="button">
                        <FaMinus fas icon="minus" />
                      </button>
    
                      {/* <MDBInput min={0} type="text" value={0} label="Quantity"/> */}
                      <div>
                      <p className="text-center fw-bold">Quantity</p>
                      <p className="text-center fw-bold">{item.quantity}</p>
                      </div>

                      <button className="px-3 ms-2 fixed-size-button blue-button" type="button">
                        <FaPlus fas icon="plus" />
                      </button>
                    </div>
    
                    <p className="text-start text-md-center">
                      <strong>Price : USD {item.price}$</strong>
                    </p>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                </>
                })}
    
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">{moment().format('ddd MMM-yyyy')} - {moment().add('days',3).format('ddd MMM-yyyy')}</p>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <div className="payment-methods-container">
                    <MDBCardImage className="me-2" style={{width : 45}}
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa" />
                    <MDBCardImage className="me-2" style={{width : 45}}
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express" />
                    <MDBCardImage className="me-2" style={{width : 45}}
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard" />
                    <MDBCardImage className="me-2" style={{width : 45}}
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark" />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  {productList.map((item,key)=>{
                    return <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0" key={key}>
                    {item.short_title}
                    <span className="fw-bold">{item.quantity} x USD {item.price}$</span>
                  </MDBListGroupItem>
                  })}
                  
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>USD {(productList.reduce((total, product) => total + product.price, 0) + 5).toFixed(2)}$</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
                  <Model isProduct={productList} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }