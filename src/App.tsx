import { useState } from "react";
import CartModal from "./components/CartModal";
import FloatingCart from "./components/FloatingCart";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import { SIZES, WATCH_IMAGES } from "./constants/product";
import { CartItem, WatchColor, WatchSize } from "./types";

function App() {
  const [selectedColor, setSelectedColor] = useState<WatchColor>("purple");
  const [selectedSize, setSelectedSize] = useState<WatchSize>("M");
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    const selectedSizePrice =
      SIZES.find((s) => s.size === selectedSize)?.price || 79.0;

    const newItem: CartItem = {
      id: Date.now().toString(),
      name: "Classy Modern Smart watch",
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: selectedSizePrice,
      image: WATCH_IMAGES[selectedColor],
    };

    setCartItems((prev) => [...prev, newItem]);
    setQuantity(1); // Reset quantity after adding to cart
  };

  const updateCartItemQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ProductImage selectedColor={selectedColor} />
          <ProductInfo
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            setSelectedColor={setSelectedColor}
            setSelectedSize={setSelectedSize}
            setQuantity={setQuantity}
            onAddToCart={addToCart}
          />
        </div>
      </div>

      <FloatingCart
        itemCount={totalItems}
        onClick={() => setIsCartOpen(true)}
      />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
      />
    </div>
  );
}

export default App;
