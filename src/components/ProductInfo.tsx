import { COLORS, SIZES } from "../constants/product";
import { WatchColor, WatchSize } from "../types";

interface ProductInfoProps {
  selectedColor: WatchColor;
  selectedSize: WatchSize;
  quantity: number;
  setSelectedColor: (color: WatchColor) => void;
  setSelectedSize: (size: WatchSize) => void;
  setQuantity: (quantity: number) => void;
  onAddToCart: () => void;
}

export default function ProductInfo({
  selectedColor,
  selectedSize,
  quantity,
  setSelectedColor,
  setSelectedSize,
  setQuantity,
  onAddToCart,
}: ProductInfoProps) {
  const selectedSizePrice =
    SIZES.find((s) => s.size === selectedSize)?.price || 79.0;

  return (
    <div className="space-y-6 max-h-min">
      <h1 className="text-[40px] font-bold mb-4 text-dark-bold roboto-700">
        Classy Modern Smart watch
      </h1>

      <div className="flex items-center mb-4">
        <div className="flex text-[#FFD200] text-[18px]">★★★⯪☆</div>
        <span className="text-gray-600 ml-2 roboto-400 text-light-gray">
          (7 Reviews)
        </span>
      </div>

      <div className="mb-6">
        <span className="text-light-gray line-through text-[20px]">
          ${selectedSizePrice.toFixed(2)}
        </span>
        <span className="text-purple ml-2 roboto-700 text-[24px]">
          ${(selectedSizePrice - 20).toFixed(2)}
        </span>
      </div>

      <p className=" text-[18px] text-light-gray font-normal leading-[30px] text-left decoration-skip-ink-none underline-offset-from-font max-w-[626px]  mb-6">
        I must explain to you how all this mistaken idea of denoun cing ple
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teaching.
      </p>

      <div className="mb-6">
        <div className="flex  text-light-gray text-[14px]">
          <p className="min-w-[46px] me-10">Type</p>
          <p>Model Number</p>
        </div>
        <div className="flex  text-dark-bold text-[16px] roboto-700">
          <p className="min-w-[46px] me-10">Watch</p>
          <p>Forerunner 290XT</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-[18px] roboto-700 text-dark-bold mb-2">
            Band Color
          </h2>
          <div className="flex gap-3">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-[16px] h-[16px] rounded-full border-2 ${
                  selectedColor === color
                    ? "border-purple"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-[18px] roboto-700 text-dark-bold mb-2">
            Wrist Size
          </h2>
          <div className="flex gap-2">
            {SIZES.map(({ size, price }) => (
              <>
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[73px] h-[36px] px-[18px] py-[8px] border rounded-[3px] text-[13px] text-light-gray ${
                    selectedSize === size
                      ? "border-[#6576ff]"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  data-size="S"
                  data-price="59"
                >
                  <span
                    className={`roboto-700 text-dark-bold text-[14px] me-1 ${
                      selectedSize === size ? "text-purple" : "bg-transparent "
                    }`}
                  >
                    {size}
                  </span>
                  ${price}
                </button>
              </>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-[18px] roboto-700 text-dark-bold mb-2">
            Quantity
          </h2>
          <div className="flex gap-[10px] items-center">
            <div className="flex items-center text-light-gray">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="py-[8px] px-[18px]  rounded-s-[3px] border "
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 text-center border  py-[8px] px-[18px]   appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="py-[8px] px-[18px]   rounded-e-[3px]  border"
              >
                +
              </button>
            </div>

            <button
              onClick={onAddToCart}
              className="bg-purple text-white h-[42px] w-[105px] rounded-[3px] py-[8px] px-[18px] text-[13px] roboto-700"
            >
              Add to Cart
            </button>
            <button type="button">
              <span className="text-[30px] text-purple inline-block">♡</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
