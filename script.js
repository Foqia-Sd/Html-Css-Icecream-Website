// Initialize cart count
let cartCount = 0;

// Function to update cart count
function addToCart() {
    cartCount += 1; // Increment cart count by 1
    document.getElementById('cart-count').textContent = cartCount; // Update the displayed count
}

// Add event listeners to all "Add to Cart" buttons
const buttons = document.querySelectorAll('.btn button');
buttons.forEach(button => {
    button.addEventListener('click', addToCart);
});
