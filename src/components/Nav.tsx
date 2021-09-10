import React from 'react';

const ActiveIndicator = ({ active }) => {
  return (
    <>
      {active && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-blue-500 rounded-t"></div>
      )}
    </>
  );
};

const Nav = ({ setFiltre, filtre }) => {
  const navToggler = (path: string, code?: string) => {
    if (!code) return setFiltre(path);
    if (code === 'Enter' || code === 'Space') setFiltre(path);
  };
  return (
    <nav>
      <ul className="flex justify-around items-center border-b border-gray-300">
        <button onKeyDown={({ code }) => navToggler('all', code)}>
          <li
            className="font-semibold cursor-pointer py-4 relative text-gray-700"
            onClick={() => navToggler('all')}
          >
            All
            <ActiveIndicator active={filtre === 'all'} />
          </li>
        </button>
        <button onKeyDown={({ code }) => navToggler('active', code)}>
          <li
            className="font-semibold cursor-pointer py-4 relative text-gray-700"
            onClick={() => navToggler('active')}
          >
            Active
            <ActiveIndicator active={filtre === 'active'} />
          </li>
        </button>
        <button onKeyDown={({ code }) => navToggler('completed', code)}>
          <li
            className="font-semibold cursor-pointer py-4 relative text-gray-700"
            onClick={() => navToggler('completed')}
          >
            Completed
            <ActiveIndicator active={filtre === 'completed'} />
          </li>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
