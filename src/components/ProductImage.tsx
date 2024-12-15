import { WATCH_IMAGES } from "../constants/product";
import { WatchColor } from "../types";

interface ProductImageProps {
  selectedColor: WatchColor;
}

export default function ProductImage({ selectedColor }: ProductImageProps) {
  return (
    <div className="rounded-[4px]">
      <img
        src={WATCH_IMAGES[selectedColor]}
        alt="Smart Watch"
        className="w-full  object-cover rounded-lg h-[720px]"
      />
    </div>
  );
}
