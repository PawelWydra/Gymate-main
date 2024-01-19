import React from "react";

const SectionContainer = ({ children, bg }) => {
  const bgContainer = {
    background: bg ? (bg.startsWith("#") ? bg : `url(${bg})`) : "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgContainer}>
      <div className="flex flex-col padding-container px-10 md:px-28 lg1000:px-40 2xl:px-80 py-10">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;