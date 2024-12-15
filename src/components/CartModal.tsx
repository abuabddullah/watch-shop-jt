import { CartItem } from "../types";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
}

export default function CartModal({
  isOpen,
  onClose,
  items,
}: // onUpdateQuantity,
CartModalProps) {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* <!-- modal --> */}
      <div id="cartModal" className="fixed inset-0 bg-black bg-opacity-50">
        <div className="bg-white max-w-2xl mx-auto mt-20 p-[44px] rounded-[20px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[22px] roboto-700 text-dark-bold">Your Cart</h2>
            <button id="closeModal" className="text-gray-500 opacity-0">
              &times;
            </button>
          </div>
          {/* <!-- table header --> */}
          <div className="grid grid-cols-8 grid-rows-1 gap-0 grid-flow-row border-b pb-[8px] text-light-gray text-[14px] text-center">
            <div className="col-span-4 row-span-1 text-left"> Item</div>
            <div className="col-span-1 row-span-1"> Color</div>
            <div className="col-span-1 row-span-1"> Size</div>
            <div className="col-span-1 row-span-1"> Qnt</div>
            <div className="col-span-1 row-span-1"> Price</div>
          </div>
          {/* <!-- table body --> */}
          <div id="cartItems" className="space-y-4">
            {items.map((item, index) => (
              <>
                <div
                  key={index}
                  className="grid grid-cols-8 grid-rows-1 gap-0 grid-flow-row border-b py-[8px] text-light-gray text-[14px] text-center items-center"
                >
                  <div className="col-span-4 row-span-1 text-left">
                    <div className="flex items-center gap-4">
                      <img
                        src={item?.image}
                        alt="Product"
                        className=" rounded h-[36px] w-[36px]"
                      />
                      <div>
                        <h3 className="text-dark-bold text-[14px]">
                          {item?.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 capitalize">
                    {item?.color}
                  </div>
                  <div className="col-span-1 row-span-1 roboto-700 text-dark-bold">
                    {item?.size}
                  </div>
                  <div className="col-span-1 row-span-1 roboto-700 text-dark-bold">
                    {item?.quantity}
                  </div>
                  <div className="col-span-1 row-span-1 roboto-700 text-dark-bold">
                    ${item?.price}
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* <!-- total row --> */}
          <div className="grid grid-cols-8 grid-rows-1 gap-0 grid-flow-row items-center roboto-700 text-center my-6">
            <div className="col-span-6 row-span-1 text-black-bold text-[16px] text-left">
              {" "}
              Total
            </div>
            <div
              className="col-span-1 row-span-1 text-[14px] text-dark-bold"
              id="totalCartQty"
            >
              {" "}
              {totalItems}
            </div>
            <div className="col-span-1 row-span-1 text-[18px] text-dark-bold">
              {" "}
              $<span id="cartTotal">{total}</span>
            </div>
          </div>

          <div className=" flex justify-between items-center flex-row-reverse ">
            <div className="space-x-4">
              <button
                onClick={onClose}
                className="px-[18px] py-[8px] h-[36px] w-[152px] text-[13px] roboto-700 text-dark-bold border rounded-[3px]"
              >
                Continue Shopping
              </button>

              <button
                id="checkout"
                className="px-[18px] py-[8px] h-[36px] w-[94px] text-[13px] roboto-700 text-white bg-purple border rounded-[3px]"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
