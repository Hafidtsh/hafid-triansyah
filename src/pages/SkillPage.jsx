import React from "react";
import ModalMenu from "../component/ModalMenu";
import Nav from "../component/Nav";
import SkillCard from "../component/SkillCard";
import dataSkill from "../constant/dataSkill";

export default function SkillPage() {
  return (
    <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] overflow-hidden max-w-[500px] mx-auto lg:max-w-full lg:h-full ">
      <Nav title={"Skill"} />
      <div className="flex flex-row gap-4 mt-12">
        {dataSkill.map((item) => {
          return <SkillCard content={item.content} title={item.title} image={item.image} link={item.link} key={item.id} />;
        })}
      </div>
      <ModalMenu />
    </div>
  );
}
