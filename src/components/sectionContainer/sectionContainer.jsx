import React from "react";

const SectionContainer = ({ children, bg }) => {
  const bgContainer = {
    background: bg ? (bg.startsWith("#") ? bg : `url(${bg})`) : "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgContainer}>
      <div className="max-w-[1800px] mx-auto py-14 px-4 md:px-16 lg:px-20 xl:px-32 2xl:px-64 3xl:px-80">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
