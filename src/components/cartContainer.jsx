import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";

function CartContainer() {
    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        age: ""
    });

    const [orderID, setOrderID] = useState(null); 

    function onInputChange(evt) {
        const { name, value } = evt.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    }

    const { cartItems, removeItem, getTotalPrice, clearCart } = useContext(cartContext); 

    async function handleCheckOut(evt) {
        evt.preventDefault();
        if (cartItems.length === 0) return; 

        const orderData = {
            buyer: {
                username: userData.username,
                surname: userData.surname, 
                age: userData.age
            },
            items: cartItems,
            total: getTotalPrice(),
            date: new Date()
        };

        const newOrderID = await createBuyOrder(orderData);
        setOrderID(newOrderID); 
        clearCart(); 
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-white">
            <h1 className="text-4xl font-bold mb-4">Carrito de compras:</h1>

            {cartItems.map((item) => (
                <div key={item.id} className="border p-4 w-3/4 my-2 shadow-md rounded-lg">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-700">Precio: ${item.price}</p>
                        <p className="text-gray-700">Unidades: {item.count}</p>
                    </div>
                    <button 
                        className="bg-red-500 text-white px-3 py-1 mt-2 rounded hover:bg-red-600"
                        onClick={() => removeItem(item.id)}
                    >
                        Eliminar
                    </button>
                    <hr className="my-2 border-gray-300" />
                </div>
            ))}

            {cartItems.length === 0 && !orderID && (
                <p className="text-gray-500 text-lg mt-5">El carrito está vacío.</p>
            )}

            {orderID ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg shadow-md mt-4 w-full max-w-md text-center">
                    <h2 className="text-xl font-bold">¡Compra realizada con éxito! 🎉</h2>
                    <p className="text-lg">Tu número de orden es: <span className="font-semibold">{orderID}</span></p>
                </div>
            ) : (
                <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Completa tus datos para completar la compra 🛍
                    </h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Nombre</label>
                        <input 
                            name="username" 
                            type="text" 
                            value={userData.username} 
                            onChange={onInputChange} 
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Apellido</label>
                        <input 
                            name="surname" 
                            type="text" 
                            value={userData.surname} 
                            onChange={onInputChange} 
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Edad</label>
                        <input 
                            name="age" 
                            type="text" 
                            value={userData.age} 
                            onChange={onInputChange} 
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        disabled={!(userData.username && userData.surname && userData.age)}
                        onClick={handleCheckOut}
                        className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                            userData.username && userData.surname && userData.age 
                                ? "bg-blue-600 hover:bg-blue-700" 
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Realizar Compra
                    </button>
                </form>
            )}
        </div>
    );
}

export default CartContainer;
