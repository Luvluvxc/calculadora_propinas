import { ItemCart } from "./components/ItemCart";
import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./db/db";
import useOrder from "./hooks/useOrder";
function App() {

  const { addItem, order, increaseQuantity, decreaseQuantity} = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="font-black text-4xl">Menú</h2>

          <div className="space-y-3 mt-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-center text-4xl font-black">Consumo</h2>

          {order.map((item) => (
						<ItemCart key={item.id} item={item}
							increaseQuantity={increaseQuantity}
							decreaseQuantity={decreaseQuantity} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
