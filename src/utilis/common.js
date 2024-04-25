const addToCart = (productDetails) => {
    // Obtener los artículos del carrito existentes desde localStorage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Verificación si el producto ya existe en el carrito según su _id
    const isProductInCart = existingCartItems.some(item => item._id === productDetails._id);

    if (!isProductInCart) {
        // Añadir el producto actual a los artículos del carrito
        existingCartItems.push(productDetails);

        // Guardar los artículos actualizados del carrito en localStorage
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

        alert('¡Producto añadido en el carrito!');
    } else {
        alert('¡El producto ya está añadido en el carrito!');
    }
};

const removeFromCart = (productId) => {
    // Obtener los artículos del carrito existentes desde localStorage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Filtrar el producto con el _id 
    const updatedCartItems = existingCartItems.filter(item => item._id !== productId);

    // Guardar los artículos actualizados del carrito en localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    alert('Product removed from cart!');
};
export {
    addToCart,
    removeFromCart
}