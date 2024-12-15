interface FloatingCartProps {
  itemCount: number;
  onClick: () => void;
}

export default function FloatingCart({
  itemCount,
  onClick,
}: FloatingCartProps) {
  if (itemCount === 0) return null;

  return (
    <>
      <div className="hidden0000 flex  justify-center  pb-[20px] ">
        <button
          onClick={onClick}
          className="bg-[#FFBB5A] text-white w-[139px] h-[42px] text-[14px] px-6 py-3 rounded-full shadow-lg gap-2 flex"
        >
          <span className="text-dark-bold roboto-700">Checkout</span>{" "}
          <span
            id="cartCount"
            className="text-dark-bold roboto-700 text-[12px] bg-white py-[2px] px-[6px] inline-block rounded-[5px] h-[20px] w-[20px]"
          >
            {itemCount}
          </span>
        </button>
      </div>
    </>
  );
}
