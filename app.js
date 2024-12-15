// State management
let state = {
    selectedColor: 'purple',
    selectedSize: '',
    quantity: 1,
    cartItems: [],
    price: 79
};

// DOM Elements
const mainImage = document.getElementById('mainImage');
const colorBtns = document.querySelectorAll('.color-btn');
const sizeBtns = document.querySelectorAll('.size-btn');
const quantityInput = document.getElementById('quantity');
const addToCartBtn = document.getElementById('addToCart');
const floatingCheckout = document.getElementById('floatingCheckout');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');

// Color selection
colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        colorBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.selectedColor = btn.dataset.color;
        mainImage.src = `images/${state.selectedColor}.jpg`;
    });
});

// Size selection
sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.selectedSize = btn.dataset.size;
        state.price = parseInt(btn.dataset.price);
    });
});

// Quantity controls
document.getElementById('decreaseQty').addEventListener('click', () => {
    if (state.quantity > 1) {
        state.quantity--;
        quantityInput.value = state.quantity;
    }
});

document.getElementById('increaseQty').addEventListener('click', () => {
    state.quantity++;
    quantityInput.value = state.quantity;
});

quantityInput.addEventListener('change', (e) => {
    state.quantity = parseInt(e.target.value) || 1;
    quantityInput.value = state.quantity;
});

// Add to cart
addToCartBtn.addEventListener('click', () => {
    if (!state.selectedSize) {
        alert('Please select a size');
        return;
    }

    const item = {
        color: state.selectedColor,
        size: state.selectedSize,
        quantity: state.quantity,
        price: state.price,
        total: state.price * state.quantity
    };

    state.cartItems.push(item);
    updateCart();
    floatingCheckout.classList.remove('hidden');
});

// Cart functionality
floatingCheckout.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    updateCartModal();
});

document.getElementById('closeModal').addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

document.getElementById('continueShopping').addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

function updateCart() {
    const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    totalCartQty.textContent = totalItems;
}

function updateCartModal() {
    cartItems.innerHTML = state.cartItems.map((item, index) => `
            <div
                class="grid grid-cols-8 grid-rows-1 gap-0 grid-flow-row border-b py-[8px] text-light-gray text-[14px] text-center items-center">
                    <div class="col-span-4 row-span-1 text-left"> 
                        <div class="flex items-center gap-4">
                            <img src="images/${item.color}.jpg" alt="Product" class="cart-item-image rounded h-[36px] w-[36px]">
                        <div>
                        <h3 class="text-dark-bold text-[14px]">Classy Modern Smart watch</h3>
                </div>
            </div>
                    </div>
                    <div class="col-span-1 row-span-1 capitalize"> 
                        ${item.color}
                    </div>
                    <div class="col-span-1 row-span-1 roboto-700 text-dark-bold"> 
                        ${item.size}
                    </div>
                    <div class="col-span-1 row-span-1 roboto-700 text-dark-bold"> 
                        ${item.quantity}
                    </div>
                    <div class="col-span-1 row-span-1 roboto-700 text-dark-bold"> 
                        $${item.total}
                    </div>
            </div>
    `).join('');

    const total = state.cartItems.reduce((sum, item) => sum + item.total, 0);
    cartTotal.textContent = total;
}

function removeItem(index) {
    state.cartItems.splice(index, 1);
    updateCart();
    updateCartModal();
    if (state.cartItems.length === 0) {
        floatingCheckout.classList.add('hidden');
        cartModal.classList.add('hidden');
    }
}

// Initialize first color selection
colorBtns[0].classList.add('selected');