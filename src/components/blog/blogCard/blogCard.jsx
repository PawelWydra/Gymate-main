import BtnWithRedArrow from "../../title/btnWithRedArrow/btnWithRedArrow.jsx";

function BlogCard({ date, heading, paragraphText }) {
  return (
    <div className="md:w-[23rem] px-8 py-12 flex flex-col gap-4 shadow-2xl text-black">
      <div className="max-h-8 max-w-fit flex items-center border border-solid border-black rounded-3xl p-4">
        <h3 className="text-base font-bold">{date}</h3>
      </div>
      <h2 className="text-2xl font-bold mt-4">{heading}</h2>
      <p className="mb-5 text-md text-gray-500 text-justify leading-5">{paragraphText}</p>
      <BtnWithRedArrow
        text="READ MORE"
        bgColor="bg-buttonColor"
        textColor="white"
        arrowColor="white"
      />
    </div>
  );
}

export default BlogCard;
