import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    title: "Latest Generation Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Professional Camera DSLR",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Laptop Pro 15-inch",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    rating: 4.9,
  },
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container-wrapper h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Amazon Clone</h1>
            <p className="text-xl mb-8">Discover amazing products at unbeatable prices.</p>
            <Link to="/products" className="btn-primary text-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Deal of the Day */}
            <div className="bg-yellow-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Deal of the Day</h3>
              <p className="text-lg mb-4">Save up to 50% on selected items</p>
              <Link to="/products?deal=true" className="btn-primary">
                View Deals
              </Link>
            </div>

            {/* Prime Membership */}
            <div className="bg-blue-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Join Prime</h3>
              <p className="text-lg mb-4">Fast, FREE delivery on millions of items</p>
              <Link to="/prime" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container-wrapper">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Fashion', 'Home & Kitchen', 'Books'].map((category) => (
              <Link
                key={category}
                to={`/products?category=${category.toLowerCase()}`}
                className="group relative h-48 bg-gray-200 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-100">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">Subscribe to our newsletter for the latest deals and updates</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="btn-primary rounded-l-none">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;