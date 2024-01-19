import BtnWithRedArrow from "../../title/btnWithRedArrow/btnWithRedArrow.jsx";

function BlogCard({ date, heading, paragraphText }) {
  return (
    <div className="w-1/3 px-8 py-12 flex flex-col gap-4 shadow-2xl text-black">
      <div className="max-h-10 max-w-fit flex items-center border border-solid border-black rounded-3xl p-4">
        <h3 className="text-sm font-bold">{date}</h3>
      </div>
      <h2 className="text-2xl font-semibold text-pretty mt-4">{heading}</h2>
      <p className="mb-5 h-max">{paragraphText}</p>
      <BtnWithRedArrow
        text="PURCHASE NOW"
        bgColor="bg-red-500"
        textColor="white"
        arrowColor="white"
      />
    </div>
  );
}

export default BlogCard;