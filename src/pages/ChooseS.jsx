import React from "react";
import logodean from "../Asset/Dean1.png";
import logohod from "../Asset/Hod.png";
import logopc from "../Asset/Pc.png";

function ChooseS() {
  return (
    <div class="">

      <div class="text-6xl text-emerald-400 ...">
        Select your role for Sign up
      </div>

      <div class="container  bg-gray-800 flex items-center justify-center rounded-xl">
        <img src={logodean}></img>
        <img src={logohod}></img>
        <img src={logopc}></img>
      </div>
      
    </div>
  );
}

export default ChooseS;
