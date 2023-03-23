import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ModalMenu() {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(!show);
  };
  return (
    <>
      {show && (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121]/90 fixed top-0 left-0 z-[200]">
          <Link to={"/"} className="w-full h-12 flex justify-center items-center" onClick={handleShowModal}>
            Home
          </Link>
          <Link to={"/about"} className="w-full h-12 flex justify-center items-center" onClick={handleShowModal}>
            Biodata
          </Link>
          <Link to={"/skill"} className="w-full h-12 flex justify-center items-center" onClick={handleShowModal}>
            Skill
          </Link>
          <a href="https://wa.me/62895394023138" target={"_blank"} className="w-full h-12 flex justify-center items-center" onClick={handleShowModal}>
            Contact
          </a>
          <a href="https://www.linkedin.com/in/hafid-triansyah-9a304520b/" target={"_blank"} className="w-full h-12 flex justify-center items-center" onClick={handleShowModal}>
            LinkedIn
          </a>
          <a href="https://github.com/Hafidtsh" target={"_blank"} className="w-full h-12 flex justify-center items-center" onClick={handleShowModal}>
            Github
          </a>
        </div>
      )}

      <button className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 flex -right-4 justify-center items-center z-[250]" onClick={handleShowModal}>
        <FiMenu />
      </button>
    </>
  );
}
