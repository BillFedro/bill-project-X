import React from "react";

const Header = () => {
  return (
    <header className="grid grid-cols-1 p-4 border-b border-gray-800 bg-black">
      <nav className="grid grid-cols-1 w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center ">
            <a href="#" className="text-white text-base font-bold">
              For you
            </a>
          </div>
          <div className="text-center  ">
            <a href="#" className="text-white text-base font-bold">
              Following
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
