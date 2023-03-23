import React from "react";
// import Nav from "../component/Nav";
import { useParams } from "react-router-dom";
import ModalMenu from "../component/ModalMenu";
import Nav from "../component/Nav";
import SkillCard from "../component/SkillCard";
import dataDetailSkill from "../constant/dataDetailSkill";

export default function DetailSkill() {
  const { item } = useParams();
  return (
    <div className="w-screen min-h-screen flex flex-col p-[30px] bg-slate-100 text-orange-400 overflow-hidden max-w-[500px] mx-auto">
      <Nav title={item} />
      <div className="mt-12 flex flex-col gap-2">
        <img src={dataDetailSkill[item].bannerImage} alt="HTML" className="w-full h-[200px] object-cover rounded-lg" />
        <p className="text-black">{dataDetailSkill[item].description}</p>
      </div>
      <div className="flex flex-col gap-4 text-black mt-4">
        {dataDetailSkill[item].data.map((v) => {
          return <SkillCard title={item} content={v.title} image={v.image} multiLink={v.multiLink} key={v.id} />;
        })}
      </div>
      <ModalMenu />
    </div>
  );
}
