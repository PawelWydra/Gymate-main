import RedBgHeading from "../title/redBgHeading/redBgHeading";

function Blog() {
  return (
    <div className="w-full flex flex-col items-center bg-white p-36">
      <div className="max-w-6xl flex flex-col items-center gap-6">
        <RedBgHeading text={"LATEST BLOG"} />
        <h1 className="text-4xl font-semibold text-black">Our Recent News</h1>
        <p className="w-8/12 text-gray-500 text-center">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Blog;
