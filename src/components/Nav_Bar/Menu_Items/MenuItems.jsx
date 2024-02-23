import React from "react";

const MenuItems = () => {
  return (
    <>
      <div className="flex-1 ms-10 hidden lg:flex">
        <ul className="flex justify-around w-96">
          <li className="btn btn-ghost text-base">Dashboard</li>
          <li className="btn btn-ghost text-base">Manage Movie</li>
          <li className="btn btn-ghost text-base">Manage User</li>
        </ul>
      </div>
    </>
  );
};

export default MenuItems;
