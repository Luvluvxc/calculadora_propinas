import { ItemCart } from "./components/ItemCart";
import { MenuItem } from "./components/MenuItem";
import { OrderTotals } from "./components/OrderTotals";
import { menuItems } from "./db/db";
import TipPercentageForm from "./components/TipPercentageForm";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, order, increaseQuantity, decreaseQuantity, tip, setTip } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5 shadow-lg">
        <h1 className="text-center text-4xl font-black text-white">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-8 px-4">
        {/* Columna del Menú */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="font-black text-4xl text-gray-800 border-b-2 border-teal-400 pb-3 mb-6">
            Menú
          </h2>

          <div className="space-y-3 mt-3  overflow-y-auto pr-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        {/* Columna del Consumo */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-center text-4xl font-black text-gray-800 border-b-2 border-teal-400 pb-3 mb-6">
            Consumo
          </h2>

          <div className="space-y-3  overflow-y-auto pr-2 mb-6">
            {order.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No hay productos en el pedido
              </p>
            ) : (
              order.map((item) => (
                <ItemCart
                  key={item.id}
                  item={item}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              ))
            )}
          </div>

          {/* Sección de propina - después de todos los items */}
          {order.length > 0 && (
            <div className="mt-6 pt-4 border-t-2 border-gray-200">
							<TipPercentageForm
							
							setTip={setTip}
							
							/>
            </div>
          )}
        </div>
      </main>

      {/* Sección de totales */}
      {order.length > 0 && (
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="bg-white rounded-xl shadow-md p-6">
            <OrderTotals order={order} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;  