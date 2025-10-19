import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <a>HomeAway</a>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Accommodation Types Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="/rooms">
            <a className="text-gray-600 hover:text-gray-900">Rooms</a>
          </Link>
          <Link href="/mansion">
            <a className="text-gray-600 hover:text-gray-900">Mansion</a>
          </Link>
          <Link href="/countryside">
            <a className="text-gray-600 hover:text-gray-900">Countryside</a>
          </Link>
          <Link href="/villas">
            <a className="text-gray-600 hover:text-gray-900">Villas</a>
          </Link>
        </nav>

        {/* Sign In/Sign Up */}
        <div className="ml-8 flex items-center space-x-4">
          <Link href="/login">
            <a className="text-gray-600 hover:text-gray-900">Sign In</a>
          </Link>
          <Link href="/signup">
            <a className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
