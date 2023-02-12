import React from "react";
import xl from "../Asset/Homepage2.png";

function Dashboard() {
  return (
    <div>
      <div class="text-6xl text-emerald-400 absolute top-64 left-10 ...">
        Organize your purchase
      </div>
      <div class="text-6xl text-emerald-400 absolute top-80 left-10 ...">
        and repair logs easily.
      </div>
      <div class="text-1xl text-emerald-600 absolute bottom-48 left-10 ... w-64 text-left">
        Keep track of your organization's purchase and repair logs with us
        easily, We will help you to efficiently organize and view your
        organization's purchase and repair logs.
      </div>
      <button
        type="button"
        class="text-gray-900 bg-emerald-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 absolute bottom-32 left-10 ..."
      >
        Get Started
      </button>
      <img
        class="absolute bottom-10 right-10 h-3/4 ..."
        src={xl}
        alt="xl"
      ></img>
    </div>
  );
}

export default Dashboard;
