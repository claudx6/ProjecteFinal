import React, { useEffect } from 'react'
import { useState } from "react";
import "/src/assets/css/TopShop.css";
import '/src/index.css';
import UserMenu from "../components/UserMenu";
import bandera from '../assets/images/tienda/Flag-European-Union.webp'
import { MdSecurity } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";



export default function TopShop() {
    const [loggedIn,setLoggedIn] = useState(true);
    const [visible, setVisible] = useState(false);
    const [userData,setUserData] = useState({
        _id: "",
        name: "",
        surname: "",
        email: "",
        phone: "",
    })
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if(userInfo) {
            setUserData(userInfo)
        }
    },[])
  return (
    <div className='top'>
        <div className='top_container'>
            <div></div>
            <ul className='top_list'>
                <li className='list'>
                    <img src={bandera} alt="" />
                    <span>Euro</span>
                </li>
                <li className='list'>
                    <MdSecurity />
                    <span>Protección del comprador</span>
                </li>
                <li className='list'>
                    <span>Servicio al cliente</span>
                </li>
                <li className='list'>
                    <span>Contactar</span>
                </li>
                <li className='list'>
                    <IoIosHeart />
                    {/* <Link href="/profile/wishlist"> */}
                    <span>Wishlist</span>
                    {/* </Link> */}
                </li>
                <li className='list' 
                onMouseOver={()=>setVisible(true)}
                onMouseLeave={()=>setVisible(false)}>
                    {loggedIn ? (
                        <li>
                            <div className='flex'>
                                <img 
                                    src="data:image/jpeg;base64,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" 
                                    alt="" 
                                />
                                <span>{userData.name}</span>
                                <RiArrowDropDownFill />
                            </div>
                        </li>
                    ) : (
                        <li className='list'>
                            <div className='flex'>
                                <FaUserCircle />
                                <span>Cuenta</span>
                                <RiArrowDropDownFill />
                            </div>
                        </li>
                    )}
                    {visible && <UserMenu loggedIn={loggedIn} name={userData.name} surname={userData.surname} />}
                    
                </li>
            </ul>
        </div>
    </div>
  )
}

