import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "/src/assets/css/MainShop.css";
import '/src/index.css';
import img1 from '../assets/images/logo/logo1.jpg';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function MainShop() {
    // const { cart } = useSelector((state) => ({...state}));
    const [cart,setCart] = useState(0);
    const navigate = useNavigate();
    const cartList = JSON.parse(localStorage.getItem("cartItems"));
    useEffect(()=>{
      if(cartList) {
        setCart(cartList.length)
      }
    },[cartList])
  return (
    <div className='main'>
        <div className='main-container'>
            <Link href="/">
                <a className='logo'>
                    <img src={img1} alt="" className="logo-image"/>
                </a>
            </Link>
            <div className='search'>
                <input type="text" placeholder='Buscar...'/>
                <div className='search-icon'>
                  <FaSearch />
                </div>
            </div>
            <Link to={'/tienda/cart'}>
                <a className='cart'>
                    <FaShoppingCart />
                    <span>{cart}</span>
                </a>
            </Link>
            
        </div>

    </div>
  )
}

export default MainShop
