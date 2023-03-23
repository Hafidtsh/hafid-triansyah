import React from "react";
import { Link } from "react-router-dom";

const SkillCard = ({ title, image, content, link, multiLink }) => {
  return (
    <div className="bg-white flex flex-col gap-2 w-full p-[20px] rounded-lg mt-8 shadow-lg">
      <h1 className="text-[16px] font-bold capitalize"> {title} </h1>
      <img src={image} alt={title} className="w-full h-[200px] object-cover rounded-lg" />
      <p className="text-light">{content} </p>
      {link && (
        <Link to={link} className="h-10 bg-orange-400 rounded-full w-[180px] flex justify-center items-center mx-auto">
          Lihat Portofolio
        </Link>
      )}

      {multiLink && (
        <div className="mt-4 text-sky-500 flex flex-wrap justify-center gap-2">
          {multiLink.map((i) => {
            return (
              <a href={i.url} key={i.id} target={"_blank"} className="italic">
                {i.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
