import React from "react";

export default function BiodataCard({ label, value, icons, link }) {
  const handleLink = () => {
    window.open(link);
  };
  return (
    <div className="w-full flex flex-col gap-1 relative hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 hover:rounded hover:p-3 hover:text-black duration-300">
      <h1 className="text-[16px] font-light">{label}</h1>
      <p className="text-[16px] font-bold max-w-[70%]">{value}</p>
      <div className="absolute right-0 top-[30%]" onClick={handleLink}>
        {icons}
      </div>
    </div>
  );
}
