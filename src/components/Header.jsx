import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="navbar bg-base-100  md:my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a to="" className="text-xl">
                Home
              </a>
            </li>
            <li>
              <a to="" className="text-xl">
                Recipe
              </a>
            </li>
            <li>
              <a to="" className="text-xl">
                About
              </a>
            </li>
            <li>
              <a to="" className="text-xl">
                Search
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl ">Recipe Blog</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a to="" className="text-xl">
              Home
            </a>
          </li>
          <li>
            <a to="" className="text-xl">
              Recipe
            </a>
          </li>
          <li>
            <a to="" className="text-xl">
              About
            </a>
          </li>
          <li>
            <a to="" className="text-xl">
              Search
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <div className="hidden lg:flex items-center relative">
          <IoSearch className="absolute w-5 h-5 ml-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="rounded-full bg-gray-300 bg-opacity-35 p-3 px-8"
          />
        </div>
        <FaRegCircleUser className="w-12 h-12 text-white bg-green-400 p-2 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
