import { Link } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

function ProductCard({ product }) {
  const { id, title, price, image, rating } = product;

  // Generate stars array based on rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`h-5 w-5 ${
        index < Math.floor(rating) 
          ? 'text-yellow-400' 
          : 'text-gray-200'
      }`}
    />
  ));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Product Details */}
      <div className="p-4">
        <Link 
          to={`/product/${id}`}
          className="text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2 mb-2"
        >
          {title}
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">{stars}</div>
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </div>

          {/* Add to Cart Button */}
          <button 
            className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-10 h-10 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Prime Delivery Badge */}
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <svg 
            className="h-5 w-5 text-blue-500 mr-1" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
          Prime Delivery
        </div>
      </div>
    </div>
  );
}

export default ProductCard;