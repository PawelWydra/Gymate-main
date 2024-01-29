import { IoCloseSharp } from "react-icons/io5";
import { menuItems } from "./navData";
import { useEffect } from "react";

function ToggleMenu(props) {
  const handleEscKey = (event) => {
    if (event.keyCode === 27) props.closeMenu();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  });

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      props.closeMenu();
    }
  };
  return (
    <div
      className="fixed h-screen w-screen bg-black bg-opacity-80 text-black z-50 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div className="relative bg-white flex justify-center min-w-96 p-5 rounded-lg	">
        <ul className="flex flex-col text-2xl text-center gap-4 py-10">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
        <IoCloseSharp
          fill="red"
          size={40}
          className="absolute top-1 right-1 cursor-pointer"
          onClick={props.closeMenu}
        />
      </div>
    </div>
  );
}

export default ToggleMenu;
