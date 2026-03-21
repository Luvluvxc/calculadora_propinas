import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";
import { useMemo } from "react";
type OrderTotalProps = {
	order: OrderItem[]
}


export const OrderTotals = ({ order }: OrderTotalProps) => {
	
	const subtotalAmount = useMemo(() => order.reduce((total, item) => total + ( item.price * item.quantity), 0), [order])
  return (
    <>
      <div className="bg-gray-50 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-700">Resumen</h3>

        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
					<span className="font-medium">{ formatCurrency(subtotalAmount )}</span>
        </div>

        {/* Propina */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Propina</span>
          <span className="font-medium"></span>
        </div>

        {/* Botones de porcentaje */}
        <div className="grid grid-cols-3 gap-2">
          <button className="py-2 rounded border text-sm font-medium hover:bg-gray-100">
            25%
          </button>
          <button className="py-2 rounded border text-sm font-medium hover:bg-gray-100">
            50%
          </button>
          <button className="py-2 rounded border text-sm font-medium hover:bg-gray-100">
            70%
          </button>
        </div>

        <hr className="border-gray-200" />

        {/* Total */}
        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>Q 0.00</span>
        </div>
      </div>
    </>
  );
};
