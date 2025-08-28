import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Zap } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const { state, dispatch } = useApp();
  
  const isInWishlist = state.wishlist.some(item => item.id === product.id);
  const isInCart = state.cartItems.some(item => item.product.id === product.id);

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStockStatusColor = () => {
    switch (product.stockStatus) {
      case 'in-stock':
        return 'text-green-600';
      case 'low-stock':
        return 'text-yellow-600';
      case 'out-of-stock':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStockStatusText = () => {
    switch (product.stockStatus) {
      case 'in-stock':
        return 'In Stock';
      case 'low-stock':
        return `Only ${product.stockQuantity} left`;
      case 'out-of-stock':
        return 'Out of Stock';
      default:
        return '';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group ${className}`}>
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
            )}
            {product.originalPrice && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}
            {product.isFeatured && (
              <span className="bg-[#003366] text-white text-xs px-2 py-1 rounded flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                Featured
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleAddToWishlist}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Heart
              className={`w-4 h-4 ${
                isInWishlist ? 'text-red-500 fill-current' : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>{product.brand}</span>
            <span>{product.subcategory}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#003366] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-bold text-[#003366]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-sm text-green-600 font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
              </span>
            )}
          </div>

          {/* Stock Status */}
          <p className={`text-sm font-medium mb-3 ${getStockStatusColor()}`}>
            {getStockStatusText()}
          </p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          disabled={product.stockStatus === 'out-of-stock'}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
            product.stockStatus === 'out-of-stock'
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : isInCart
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-[#003366] text-white hover:bg-[#004080]'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>
            {product.stockStatus === 'out-of-stock'
              ? 'Out of Stock'
              : isInCart
              ? 'Added to Cart'
              : 'Add to Cart'
            }
          </span>
        </button>
      </div>
    </div>
  );
}