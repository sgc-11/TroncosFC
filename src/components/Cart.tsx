// src/components/Cart.tsx
import React from 'react';

interface CartItem {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
    size: string;
    quantity: number;
}

interface CartProps {
    cartItems: CartItem[];
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onClose }) => {
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-md relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-600"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                <ul className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                        <li key={item.product.id} className="flex items-center space-x-4">
                            <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                                <h3 className="text-lg font-bold">{item.product.name}</h3>
                                <p className="text-sm">Size: {item.size}</p>
                                <p className="text-sm">Quantity: {item.quantity}</p>
                                <p className="text-sm">Price: ${(item.product.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="text-lg font-bold">
                    Total: ${total.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default Cart;
