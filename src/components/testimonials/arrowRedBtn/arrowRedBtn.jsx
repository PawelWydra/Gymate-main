import { BsArrowLeftSquareFill } from "react-icons/bs";

function ArrowRedBtn({ additionalClassName }) {
  const containerStyle = `size-10 rounded-lg hover:bg-white hover:text-red-500 transition-all duration-300 ${additionalClassName}`;

  return (
    <div className={containerStyle}>
      <BsArrowLeftSquareFill className="size-full" />
    </div>
  );
}

export default ArrowRedBtn;
