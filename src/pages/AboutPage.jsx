import React from "react";
import BiodataCard from "../component/BiodataCard";
import Nav from "../component/Nav";
import dataBio from "../constant/dataBio";
import { FiUser, FiMail, FiLinkedin, FiMap, FiPhone, FiChevronRight } from "react-icons/fi";
import ModalMenu from "../component/ModalMenu";
import Foto from "../img/Foto2.JPG";

const handleIcon = (name) => {
  switch (name) {
    case "phone":
      return <FiPhone />;
    case "email":
      return <FiMail />;
    case "linkedin":
      return <FiLinkedin />;
    case "map":
      return <FiMap />;
    case "web":
      return <FiUser />;
    default:
      return <FiChevronRight />;
  }
};

export default function AboutPage() {
  console.log(dataBio);

  return (
    <div className="w-screen min-h-screen flex flex-col bg-[#212121] text-orange-400 overflow-hidden max-w-[500px] mx-auto lg:flex-row lg:max-w-screen-2xl lg:max-h-screen  lg:justify-between lg:w-full">
      <div></div>
      <Nav title={"Biodata"} />
      <div className="mt-[50px] flex flex-col justify-center items-center relative ">
        <img src={Foto} alt="hay" className="rounded-full w-[200px] h-[200px] object-cover lg:w-96 lg:h-96 " />
        <div className="w-[220px] h-[220px] border-[3px] border-orange-400 rounded-full border-dashed absolute lg:w-96 lg:h-96 hover:animate-ping"></div>
      </div>
      <div className="flex flex-col gap-10 mt-6 mb-[100px] lg:my-14 lg:gap-6">
        {dataBio.map((item) => {
          return (
            <>
              <BiodataCard label={item.label} value={item.value} icons={item.icons && handleIcon(item.icons)} link={item.link} key={item.id} />
            </>
          );
        })}
      </div>
      <ModalMenu />
      <div></div>
    </div>
  );
}
