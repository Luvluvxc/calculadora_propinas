import type { OrderItem, OrderId } from "../types/index";
import { formatCurrency } from '../helpers/'

type ItemCartProps = {
  item: OrderItem;
  increaseQuantity: (id: OrderId) => void;
  decreaseQuantity: (id: OrderId) => void;
};

export function ItemCart({
  item,
  increaseQuantity,
  decreaseQuantity,
}: ItemCartProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-2 py-2 text-sm text-gray-700 p-5">
        {/* Info del producto */}
        <div className="flex flex-col">
          <span className="font-medium">{item.name}</span>
          <span className="text-xs text-gray-400">${item.price}</span>
        </div>

        {/* Controles */}
        <div className="flex items-center gap-1">
          <button
            className="w-6 h-6 flex items-center justify-center rounded border text-xs font-bold hover:bg-gray-100"
            onClick={() => decreaseQuantity(item.id)}
          >
            −
          </button>

          <span className="w-6 text-center text-xs font-mono tabular-nums">
            {item.quantity}
          </span>

          <button
            className="w-6 h-6 flex items-center justify-center rounded border text-xs font-bold hover:bg-gray-100"
            onClick={() => increaseQuantity(item.id)}
          >
            +
					</button>
					
					<div className="text-right min-w-70px]">
          <span className="text-xs text-gray-400 block">Subtotal</span>
          <span className="font-semibold">{formatCurrency(item.price * item.quantity)}</span>
        </div>
         </div>

      </div>
    </>
  );
}
