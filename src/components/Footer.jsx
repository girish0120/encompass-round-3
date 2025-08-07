import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {/* Shop Info */}
        <div>
          <h3 className="font-bold text-white mb-3">Shop Info</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Return Policy</li>
            <li>FAQs & Help</li>
          </ul>
        </div>

        {/* Account Info */}
        <div>
          <h3 className="font-bold text-white mb-3">Account</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>My Account</li>
            <li>Shop Details</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Order History</li>
            <li>International Orders</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Address: 123 Street, Chennai</li>
            <li>Email: mail@gmail.com</li>
            <li>Phone: +0123 4567 8910</li>
            <li>Payments Accepted:</li>
          </ul>
          <div className="flex gap-3 text-2xl mt-2 text-white">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>

        {/* Search Email */}
        <div>
          <h3 className="font-bold text-white mb-3">Search Email</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle search
            }}
            className="flex flex-col sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none mb-2 sm:mb-0 sm:rounded-none sm:rounded-l-md border-1"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-700 px-4 py-2 rounded-md sm:rounded-none sm:rounded-r-md font-semibold hover:bg-green-100 transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl mt-2 text-white">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-500 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} NCompass. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
