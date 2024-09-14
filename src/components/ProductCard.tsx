// src/components/ProductCard.tsx
import React, { useState } from 'react';
import ProductModal from './ProductModal';

interface Product {
    id: number;
    name: string;
    price: number;
    sizes: string[];
    image: string;
}

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product, size: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="bg-white text-black rounded-lg p-4 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-bold text-center">{product.name}</h2>
            </div>

            {isModalOpen && (
                <ProductModal
                    product={product}
                    addToCart={addToCart}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};

export default ProductCard;
