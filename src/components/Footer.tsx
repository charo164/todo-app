import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center py-2">
      <p>
        <a
          className="font-medium text-gray-700 hover:underline"
          href="https://github.com/charo164"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Charo164
        </a>
        <span className="mx-1 font-medium text-gray-700"> - </span>
        <a
          className="font-medium text-gray-700  hover:underline"
          href="http://https://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devchallenges.io
        </a>
      </p>
    </footer>
  );
};

export default Footer;
