import RedBgHeading from "../title/redBgHeading/redBgHeading";
import BlogCard from "./blogCard/blogCard";

function Blog() {
  return (
    <div className="flex flex-col items-center bg-white p-24">
      <div className="max-w-6xl flex flex-col items-center gap-6">
        <RedBgHeading text={"LATEST BLOG"} />
        <h1 className="text-4xl font-semibold text-black">Our Recent News</h1>
        <p className=" text-gray-500 text-center">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="flex gap-4">
          <BlogCard
            date="22.03.2022"
            heading="Yoga For Everyone in 2023"
            paragraphText="This is a program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds."
          />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default Blog;
