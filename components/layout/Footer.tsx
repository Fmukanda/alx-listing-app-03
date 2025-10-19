import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 HomeAway. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
