import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import Foto from "../img/Foto.JPG";

export default function Introduction() {
  return (
    <div className="w-screen h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden max-w-[500px] mx-auto">
      <h1 className="text-[36px] font-light">Hello..</h1>

      <div className="my-8 relative flex flex-col items-center ">
        <div className="bg-[url('https://tse1.mm.bing.net/th?id=OIP.bLYwTN4L7CwzKypgf9kEoAHaFj&pid=Api&P=0')] w-[500px] h-[500px] rounded-full bg-cover bg-center lg:w-60 lg:h-60"></div>
        <div className="border-orange-400 border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px] lg:w-64 lg:h-64"></div>
      </div>
      <h1 className="text-[36px]  font-light">
        Saya <br /> Hafid Triansyah
      </h1>
      <p className="text-[16px] font-light">Seorang Web Programmer</p>
      <Link to={"/about"} className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 flex -right-4 justify-center items-center lg:bottom-4 lg:right-4">
        <FiPlay className="text-[36px]" />
      </Link>
    </div>
  );
}
