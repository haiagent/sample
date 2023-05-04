import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-500 text-white sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Jaseunda</h1>
            <h2 className="text-sm">Web Developer</h2>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  className="transition-colors duration-200 hover:bg-blue-400 px-3 py-2 rounded"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 hover:bg-blue-400 px-3 py-2 rounded"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 hover:bg-blue-400 px-3 py-2 rounded"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 hover:bg-blue-400 px-3 py-2 rounded"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;