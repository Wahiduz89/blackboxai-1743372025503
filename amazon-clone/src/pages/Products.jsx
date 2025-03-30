import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

// Sample products data
const allProducts = [
  {
    id: 1,
    title: "Latest Generation Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    rating: 4.5,
    category: "electronics"
  },
  {
    id: 2,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.8,
    category: "electronics"
  },
  {
    id: 3,
    title: "Professional Camera DSLR",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    rating: 4.7,
    category: "electronics"
  },
  {
    id: 4,
    title: "Laptop Pro 15-inch",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    rating: 4.9,
    category: "electronics"
  },
  {
    id: 5,
    title: "Casual Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    rating: 4.3,
    category: "clothing"
  },
  {
    id: 6,
    title: "Designer Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400",
    rating: 4.6,
    category: "clothing"
  },
  {
    id: 7,
    title: "Coffee Table Book Collection",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    rating: 4.4,
    category: "books"
  },
  {
    id: 8,
    title: "Modern Kitchen Appliance Set",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400",
    rating: 4.8,
    category: "home"
  }
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    rating: 'all',
    sortBy: 'featured'
  });
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...allProducts];

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    switch (filters.priceRange) {
      case 'under-100':
        filtered = filtered.filter(product => product.price < 100);
        break;
      case '100-500':
        filtered = filtered.filter(product => product.price >= 100 && product.price <= 500);
        break;
      case 'over-500':
        filtered = filtered.filter(product => product.price > 500);
        break;
      default:
        break;
    }

    // Rating filter
    if (filters.rating !== 'all') {
      filtered = filtered.filter(product => product.rating >= Number(filters.rating));
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setProducts(filtered);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      setSearchParams({ category: value });
    }
  };

  return (
    <div className="container-wrapper py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar - Mobile Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-full py-2 bg-gray-100 rounded-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Filters Sidebar */}
        <aside className={`w-full md:w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Categories</h3>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Kitchen</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Price Range</h3>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Prices</option>
                <option value="under-100">Under $100</option>
                <option value="100-500">$100 - $500</option>
                <option value="over-500">Over $500</option>
              </select>
            </div>

            {/* Rating */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Minimum Rating</h3>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Ratings</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
                <option value="2">2+ Stars</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} results</p>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;