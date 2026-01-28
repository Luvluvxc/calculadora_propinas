import type { OrderItem, OrderId} from "../types/index";

type ItemCartProps = {
	item: OrderItem
	increaseQuantity: (id: OrderId) => void 
	decreaseQuantity: (id: OrderId) => void

};

export function ItemCart({ item, increaseQuantity, decreaseQuantity}: ItemCartProps) {
  return (
    <>
      
        <div className="flex items-center justify-between gap-4 p-4 border rounded-xl shadow-sm bg-white">
          
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-800">
              {item.name}
            </span>
            <span className="text-sm text-gray-500">
              ${item.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
					<button className="w-8 h-8 flex items-center justify-center rounded-full border text-lg font-bold hover:bg-gray-100"
					onClick={ () => decreaseQuantity(item.id)}>
              −
            </button>

            <span className="w-6 text-center font-medium">
              {item.quantity}
            </span>

					<button className="w-8 h-8 flex items-center justify-center rounded-full border text-lg font-bold hover:bg-gray-100"
					onClick={ () => increaseQuantity(item.id)}>
              +
            </button>
          </div>

          <div className="text-right">
            <span className="block text-sm text-gray-500">
              Subtotal
            </span>
            <span className="text-lg font-semibold text-gray-800">
              ${item.price * item.quantity}
            </span>
          </div>

        </div>

    </>
  )
}

