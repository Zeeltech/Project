import React from "react";
import logo from "../Asset/logo3.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <div class="flex items-center">
              <img src={logo} class="w-9" alt="PurchaseAndRepair Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap">
                <div class="m-2">Purchase and Repair</div>
              </span>
            </div>
          </Link>

          <div class="flex md:order-2">
            <Link to="/chooses">
              {" "}
              <button
                type="button"
                class=" text-gray-900 bg-white font-medium rounded-md text-sm px-5 py-2.5 text-center mr-5 md:mr-0 "
              >
                Sign up
              </button>
            </Link>

            <Link to="/choosel">
              <button
                type="button"
                class="border-2 border-gray-900 text-gray-900 bg-emerald-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
