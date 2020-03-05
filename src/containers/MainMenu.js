import React from 'react';

const MainMenu = () => (
  <nav className="bg-white px-8 pt-2 shadow-md">
    <div className="-mb-px flex justify-center">
        <a className="no-underline text-teal-dark border-b-2 border-teal-dark text-xl uppercase tracking-wide text-xs py-3 mr-8" href="#">
          Home
      </a>
        <a className="no-underline text-grey-400 border-b-2 border-transparent text-xl uppercase tracking-wide text-xs py-3 mr-8" href="#">
          Gallery
      </a>
        <a className="no-underline text-grey-400 border-b-2 border-transparent text-xl uppercase tracking-wide text-xs py-3 mr-8" href="#">
          Discounts
      </a>
        <a className="no-underline text-grey-400 border-b-2 border-transparent text-xl uppercase tracking-wide text-xs py-3" href="#">
          Places
      </a>
    </div>
  </nav>
)

export default MainMenu;