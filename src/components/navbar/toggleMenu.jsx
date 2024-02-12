import { IoCloseSharp } from "react-icons/io5";
import { menuItems } from "./navData";
import { useEffect } from "react";
import { motion } from "framer-motion";

function ToggleMenu(props) {
  // key Code 27 is esc, works only if menu is visible.
  const handleEscKey = (event) => {
    if (event.keyCode === 27 && props.isToggle) props.closeMenu();
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

  // Variants for animating the list items
  const listVaraints = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.2 },
    },
  };
  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };
  const containerVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%", transition: { ease: "easeOut", duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={props.isToggle ? "visible" : "hidden"}
      variants={containerVariants}
      className="fixed top-0 left-0 h-screen w-screen bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-black z-50 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div className="relative text-white flex justify-center min-w-96 p-5 rounded-lg	">
        <motion.ul
          initial="hidden"
          animate={props.isToggle ? "visible" : "hidden"}
          variants={listVaraints}
          className="flex flex-col text-2xl text-center gap-4 py-10"
        >
          {menuItems.map((item, index) => (
            <motion.li key={index} variants={listItemVariants} className="">
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <IoCloseSharp
          fill="red"
          size={40}
          className="absolute top-1 right-1 cursor-pointer"
          onClick={props.closeMenu}
        />
      </div>
    </motion.div>
  );
}

export default ToggleMenu;
