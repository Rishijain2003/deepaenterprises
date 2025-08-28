import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

// Mock orders data - in a real app, this would come from an API
const mockOrders = [
  {
    id: 'DE12345678',
    items: [
      { name: 'Samsung Double Door Refrigerator', quantity: 1, price: 45999 },
      { name: 'LG Front Load Washing Machine', quantity: 1, price: 32999 }
    ],
    totalAmount: 78998,
    status: 'delivered',
    createdAt: new Date('2024-01-15'),
    estimatedDelivery: new Date('2024-01-20'),
    shippingAddress: '123 Main Street, Mumbai, Maharashtra 400001'
  },
  {
    id: 'DE12345679',
    items: [
      { name: 'Sony 55" 4K Smart TV', quantity: 1, price: 52999 }
    ],
    totalAmount: 52999,
    status: 'shipped',
    createdAt: new Date('2024-01-20'),
    estimatedDelivery: new Date('2024-01-25'),
    shippingAddress: '123 Main Street, Mumbai, Maharashtra 400001'
  },
  {
    id: 'DE12345680',
    items: [
      { name: 'Marshall Bluetooth Speaker', quantity: 1, price: 12999 },
      { name: 'Sony WH-1000XM4 Headphones', quantity: 1, price: 24999 }
    ],
    totalAmount: 37998,
    status: 'confirmed',
    createdAt: new Date('2024-01-25'),
    estimatedDelivery: new Date('2024-01-30'),
    shippingAddress: '123 Main Street, Mumbai, Maharashtra 400001'
  }
];

export function OrdersPage() {
  const { state } = useApp();
  const navigate = useNavigate();

  if (!state.isAuthenticated) {
    navigate('/login');
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-yellow-600" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-blue-600 bg-blue-50';
      case 'shipped':
        return 'text-yellow-600 bg-yellow-50';
      case 'delivered':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      default:
        return 'Processing';
    }
  };

  if (mockOrders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders found</h2>
            <p className="text-gray-600 mb-8">
              You haven't placed any orders yet
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">
            Track and manage your orders
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {order.createdAt.toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span>{getStatusText(order.status)}</span>
                    </div>
                    
                    <span className="text-lg font-bold text-[#003366]">
                      {formatPrice(order.totalAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <span className="font-medium text-gray-900">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Delivery Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        {order.status === 'delivered' ? 'Delivered to' : 'Shipping to'}
                      </p>
                      <p className="text-sm text-gray-900">{order.shippingAddress}</p>
                    </div>
                    
                    <div className="mt-4 sm:mt-0">
                      {order.status !== 'delivered' && (
                        <p className="text-sm text-gray-600">
                          Expected delivery: {order.estimatedDelivery.toLocaleDateString('en-IN', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-[#003366] hover:underline">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      
                      {order.status === 'shipped' && (
                        <button className="text-[#003366] hover:underline">
                          Track Package
                        </button>
                      )}
                      
                      {order.status === 'delivered' && (
                        <button className="text-[#003366] hover:underline">
                          Write Review
                        </button>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      {order.status === 'delivered' && (
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          Return Item
                        </button>
                      )}
                      
                      <Link
                        to={`/products`}
                        className="px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-[#004080] transition-colors"
                      >
                        Buy Again
                      </Link>
                    </div>
                  </div>
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