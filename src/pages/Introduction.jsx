import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="w-screen h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden max-w-[500px] mx-auto">
      <h1 className="text-[36px] font-light">Hello..</h1>

      <div className="my-8 relative flex flex-col items-center ">
        <div className="bg-[url(https://images.pexels.com/photos/14798149/pexels-photo-14798149.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1)] w-[500px] h-[500px] rounded-full bg-cover bg-center"></div>
        <div className="border-orange-400 border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px]"></div>
      </div>
      <h1 className="text-[36px]  font-light">
        Saya <br /> Hafid Triansyah
      </h1>
      <p className="text-[16px] font-light">Seorang Web Programmer</p>
      <Link to={"/about"} className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 flex -right-4 justify-center items-center">
        <FiPlay className="text-[36px]" />
      </Link>
    </div>
  );
}
