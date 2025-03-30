import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid';
import { ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';

// Sample product data (in a real app, this would come from an API)
const product = {
  id: 1,
  title: "Latest Generation Smart Watch",
  price: 299.99,
  images: [
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800",
    "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800",
  ],
  rating: 4.5,
  reviews: 128,
  description: "Stay connected with our latest generation smartwatch. Features include heart rate monitoring, sleep tracking, and seamless smartphone integration. Water-resistant up to 50 meters and battery life up to 7 days.",
  features: [
    "Advanced health monitoring",
    "Water-resistant up to 50m",
    "7-day battery life",
    "AMOLED display",
    "Built-in GPS",
    "Smartphone notifications"
  ],
  specifications: {
    "Display": "1.4\" AMOLED",
    "Battery": "300mAh",
    "Water Resistance": "5 ATM",
    "Connectivity": "Bluetooth 5.0, WiFi",
    "Sensors": "Heart rate, Accelerometer, Gyroscope",
    "Compatibility": "iOS 12.0+, Android 7.0+"
  },
  stock: 15
};

function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Generate rating stars
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`h-5 w-5 ${
        index < Math.floor(product.rating) 
          ? 'text-yellow-400' 
          : 'text-gray-200'
      }`}
    />
  ));

  return (
    <div className="container-wrapper py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-yellow-400' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex mr-2">{stars}</div>
            <span className="text-sm text-gray-600">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold mb-6">
            ${product.price.toFixed(2)}
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 p-2 border rounded-md"
            >
              {[...Array(Math.min(10, product.stock))].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 btn-primary flex items-center justify-center">
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="p-4 border rounded-md hover:bg-gray-50">
              <HeartIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <div className="flex items-center mb-3">
              <TruckIcon className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium">Free Prime Delivery</span>
            </div>
            <div className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">1 Year Warranty</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium">{key}</dt>
                  <dd className="text-gray-600">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;