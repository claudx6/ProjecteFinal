import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "/src/assets/css/ProductDetail.css";
import '/src/index.css';

import{
    FaCartPlus,
} from 'react-icons/fa'
import { getProductById } from "../services/services";
import {addToCart} from "../utilis/common";
const ProductView = () => {
    const [product,setProduct] = useState({
        _id: "",
        title: "",
        price: 0,
        description: "",
        image_url: "",
        category_type: "",
        quantity : 1,
        type: "",
    })
    const location = useLocation(); // Obtener ubicación actual usando el hook useLocation

    const handleDecreaseQuantity = () => {
        if (product.quantity > 1) {
            setProduct({...product,quantity : product.quantity - 1});
        }
    };

    const handleIncreaseQuantity = () => {
        setProduct({...product,quantity : product.quantity + 1});
    };

    const fetchProduct = async (id) => {
        try {
            const response = await getProductById(id);
            if(response.data.status) {
                setProduct({...response.data.data,quantity : 1})
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('productId');
        fetchProduct(id);
    }, [location.search]);
    return <div className="single-product-main-content">
    <div className="layout">
        <div className="single-product-page">
            <div className="left">
                <img src={product.image_url} alt={product.title} />
            </div>
            <div className="right">

            <span className="name">{product.title}</span>
            <span className="price">{product.price}€</span>
            <span className="desc">{product.description}</span>
            <div className="cart-buttons">
                <div className="quantity-buttons">
                    <span onClick={handleDecreaseQuantity}>-</span>
                    <span>{product.quantity}</span>
                    <span onClick={handleIncreaseQuantity}>+</span>
                </div>

                <button className="add-to-cart-button" onClick={()=>{
                    addToCart(product)
                    }}>
                <FaCartPlus size={20}/>
                    Añadir al carrito
                </button>
            </div>

            <span className="divider"/>

            <div className="info-item">
                <span className="text-bold">Categoría:
                <span className="normal-text">{product.type.charAt(0).toUpperCase() + product.type.slice(1)}</span>
                </span>
            </div>
            
            </div>
        </div>
    </div>
    </div>;
};

export default ProductView;
