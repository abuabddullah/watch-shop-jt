export interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export type WatchColor = 'purple' | 'cyan' | 'blue' | 'black';
export type WatchSize = 'S' | 'M' | 'L' | 'XL';