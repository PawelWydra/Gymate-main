import SectionContainer from "../sectionContainer/sectionContainer";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import BlogCard from "./blogCard/blogCard";
import blogData from "./blogDataModel";

function Blog() {
  return (
    <SectionContainer bg='#fff'>
      <div className="flex flex-col items-center gap-6">
        <RedBgHeading text={"LATEST BLOG"} />
        <h1 className="text-4xl font-semibold text-black">Our Recent News</h1>
        <p className=" text-gray-500 text-center">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              date={blog.date}
              heading={blog.heading}
              paragraphText={blog.paragraphText}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Blog;
