import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container-wrapper">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Amazon</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-600 hover:text-black">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link to="/login" className="flex items-center hover:text-yellow-400">
              <UserIcon className="h-6 w-6 mr-1" />
              <div className="hidden md:block">
                <div className="text-xs">Hello, Sign in</div>
                <div className="text-sm font-medium">Account & Lists</div>
              </div>
            </Link>

            <Link to="/cart" className="flex items-center hover:text-yellow-400 relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
              <span className="hidden md:block ml-1">Cart</span>
            </Link>
          </nav>
        </div>

        {/* Categories Bar */}
        <div className="bg-gray-800 py-2">
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/products" className="hover:text-yellow-400">All Products</Link>
            <Link to="/products?category=electronics" className="hover:text-yellow-400">Electronics</Link>
            <Link to="/products?category=clothing" className="hover:text-yellow-400">Clothing</Link>
            <Link to="/products?category=books" className="hover:text-yellow-400">Books</Link>
            <Link to="/products?category=home" className="hover:text-yellow-400">Home & Kitchen</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;