import { IoCloseSharp } from "react-icons/io5";
import { menuItems } from "./navData";


function ToggleMenu() {
  return (
    <div className="fixed h-screen w-screen bg-black bg-opacity-80 text-black z-50 flex justify-center items-center">
      <div className="relative bg-white flex justify-center min-w-96 p-5 rounded-lg	">
        <ul className="flex flex-col text-2xl text-center gap-4 py-10">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
        <IoCloseSharp fill="red" size={40} className="absolute top-1 right-1" />
      </div>
    </div>
  );
}

export default ToggleMenu;
