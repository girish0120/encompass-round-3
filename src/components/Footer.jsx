// src/components/Footer.jsx
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">NCompass</h2>
          <p className="text-sm">
            Connecting you to a better experience, always.
          </p>
        </div>

        {/* Middle Section - Search bar */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Search Email</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle search
            }}
            className="flex"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-700 px-4 py-2 rounded-r-md font-semibold hover:bg-green-100 transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Right Section - Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-green-300"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-green-300"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-green-300"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-green-300"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-500 pt-4 text-center text-sm">
        © {new Date().getFullYear()} NCompass. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
