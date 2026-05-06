import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";
import { useMemo } from "react";
import type { Dispatch, SetStateAction } from "react";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
};

export const OrderTotals = ({ order, tip, setTip }: OrderTotalProps) => {
  //reduce sirve para recorrer los elementos de las cosos que trigo
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order],
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]); // calcula la propina UseMemo siempre leva callback
  const totalAmount = useMemo(() => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount],
  );

  return (
    <>
      <div className="bg-gray-50 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-700">Resumen</h3>

        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotalAmount)}</span>
        </div>

        {/* Propina */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Propina</span>
          <span className="font-medium"></span>
          <span>{formatCurrency(tipAmount)}</span>
        </div>

        {/* Botones de porcentaje */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setTip(0.25)}
            className="py-2 rounded border text-sm font-medium hover:bg-gray-100"
          >
            25%
          </button>
          <button
            onClick={() => setTip(0.5)}
            className="py-2 rounded border text-sm font-medium hover:bg-gray-100"
          >
            50%
          </button>
          <button
            onClick={() => setTip(0.7)}
            className="py-2 rounded border text-sm font-medium hover:bg-gray-100"
          >
            70%
          </button>
        </div>

        <hr className="border-gray-200" />

        {/* Total */}
        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>

          <span>
            {
              formatCurrency(
                totalAmount,
              ) /* Format Currency es para que agarre el tipo de moneda ya establecida :)*/
            }
          </span>
        </div>
      </div>
    </>
  );
};
