import React from "react";
import ModeSwitcher from "./Mode_Switcher/ModeSwitcher";
import MenuItems from "./Menu_Items/MenuItems";

const NavBar = () => {
  return (
    <>
      <div className="navbar  pt-4 pb-4 ps-5 pe-5 lg:ps-0 lg:pe-0">
        <div className="container mx-auto">
          <div className="flex lg:flex-none flex-1">
            <a className=" font-bold text-xl">Triple Movies</a>
          </div>
          {/* Menu items */}
          <MenuItems></MenuItems>
          {/* Menu items */}

          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto hidden lg:flex"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content  rounded-box w-52 border border-white"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            {/* Mode Switcher */}
            <ModeSwitcher></ModeSwitcher>
            {/* Mode Switcher */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
