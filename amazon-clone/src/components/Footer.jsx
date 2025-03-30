import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-gray-800 hover:bg-gray-700 py-4 text-sm"
      >
        Back to top
      </button>

      <div className="container-wrapper py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white hover:underline">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white hover:underline">Press Releases</Link></li>
              <li><Link to="/impact" className="hover:text-white hover:underline">Amazon Science</Link></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/sell" className="hover:text-white hover:underline">Sell products on Amazon</Link></li>
              <li><Link to="/sell-apps" className="hover:text-white hover:underline">Sell apps on Amazon</Link></li>
              <li><Link to="/affiliate" className="hover:text-white hover:underline">Become an Affiliate</Link></li>
              <li><Link to="/advertise" className="hover:text-white hover:underline">Advertise Your Products</Link></li>
            </ul>
          </div>

          {/* Amazon Payment Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Amazon Payment Products</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/business-card" className="hover:text-white hover:underline">Amazon Business Card</Link></li>
              <li><Link to="/shop-points" className="hover:text-white hover:underline">Shop with Points</Link></li>
              <li><Link to="/reload-balance" className="hover:text-white hover:underline">Reload Your Balance</Link></li>
              <li><Link to="/currency-converter" className="hover:text-white hover:underline">Currency Converter</Link></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/account" className="hover:text-white hover:underline">Your Account</Link></li>
              <li><Link to="/orders" className="hover:text-white hover:underline">Your Orders</Link></li>
              <li><Link to="/shipping" className="hover:text-white hover:underline">Shipping Rates & Policies</Link></li>
              <li><Link to="/help" className="hover:text-white hover:underline">Help Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="/" className="hover:text-white">Amazon Clone</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white">Privacy Notice</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            </div>
            <div>
              © {new Date().getFullYear()} Amazon Clone. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;