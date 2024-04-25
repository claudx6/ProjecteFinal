const addToCart = (productDetails) => {
    // Fetch the existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if the product already exists in the cart based on its _id
    const isProductInCart = existingCartItems.some(item => item._id === productDetails._id);

    if (!isProductInCart) {
        // Add the current product to the cart items
        existingCartItems.push(productDetails);

        // Store the updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

        // Show a confirmation message after adding to cart
        alert('Product added to cart!');
    } else {
        // Show a message indicating that the product already exists in the cart
        alert('Product already exists in the cart!');
    }
};

const removeFromCart = (productId) => {
    // Fetch the existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Filter out the product with the given _id
    const updatedCartItems = existingCartItems.filter(item => item._id !== productId);

    // Store the updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // Optionally, you can show a confirmation message or perform any other action after removing from cart
    alert('Product removed from cart!');
};
export {
    addToCart,
    removeFromCart
}