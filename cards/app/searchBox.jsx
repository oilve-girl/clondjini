// SearchBox.jsx
'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo'; // Import your Logo component

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Call API or perform search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-between w-full max-w-xl mx-auto">
      <Logo /> {/* Display your logo component */}
      <div className="relative w-full">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an ETF"
          className="pl-12 pr-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-3xl"
          style={{ maxWidth: '42rem' }}
        />
      </div>
      <button
        type="submit"
        className="ml-2 px-6 py-3 text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-3xl shadow-md transition duration-300 ease-in-out"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
