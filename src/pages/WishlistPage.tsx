import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';

export function WishlistPage() {
  const { state, dispatch } = useApp();

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const moveToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
  };

  if (state.wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">
              Save items you're interested in to your wishlist
            </p>
            <Link
              to="/products"
              className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#004080] transition-colors inline-block"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">
            {state.wishlist.length} item{state.wishlist.length !== 1 ? 's' : ''} in your wishlist
          </p>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {state.wishlist.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              
              {/* Move to Cart Button Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => moveToCart(product)}
                    disabled={product.stockStatus === 'out-of-stock'}
                    className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-1 ${
                      product.stockStatus === 'out-of-stock'
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-[#003366] text-white hover:bg-[#004080]'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Move to Cart</span>
                  </button>
                  
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
                    title="Remove from wishlist"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="bg-[#C0C0C0] text-[#003366] px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}