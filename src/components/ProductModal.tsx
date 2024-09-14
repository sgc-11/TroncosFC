// src/components/ProductModal.tsx
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    sizes: string[];
    image: string;
}

interface ProductModalProps {
    product: Product;
    addToCart: (product: Product, size: string, quantity: number) => void;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, addToCart, onClose }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false); // State to track if the item is added to the cart

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product, selectedSize, quantity);
            setIsAdded(true); // Set to true when the item is added
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-11/12 max-w-4xl rounded-lg shadow-2xl flex overflow-hidden">
                {/* Left Side - Image */}
                <div className="w-1/2">
                    <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
                </div>

                {/* Right Side - Details */}
                <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                    <p className="text-xl text-red-500 mb-4">${product.price}</p>

                    <div className="mb-4">
                        <label className="block font-bold mb-2">Select Size</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            value={selectedSize || ''}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        >
                            <option value="">Choose a size</option>
                            {product.sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4 flex items-center justify-center space-x-4">
                        <button
                            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
                            className="px-4 py-2 bg-gray-300 rounded-lg"
                        >
                            -
                        </button>
                        <span className="text-lg font-semibold">{quantity}</span>
                        <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="px-4 py-2 bg-gray-300 rounded-lg"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={!selectedSize}
                        className="w-full py-2 rounded-lg bg-black text-white hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-600"
                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
