import logo1 from "../../../assets/images/testimonials/logo1.png";
import logo2 from "../../../assets/images/testimonials/logo2.png";
import logo3 from "../../../assets/images/testimonials/logo3.png";
import logo4 from "../../../assets/images/testimonials/logo4.png";
import logo5 from "../../../assets/images/testimonials/logo5.png";

function LogoContainer() {
  return (
    <div className="flex justify-center items-center flex-wrap max-w-6xl gap-4 pt-5 mt-10 ">
      <img
        src={logo1}
        alt=""
        className="h-25 w-50 hover:brightness-50 duration-300"
      />
      <img
        src={logo2}
        alt=""
        className="h-25 w-50 hover:brightness-50 duration-300"
      />
      <img
        src={logo3}
        alt=""
        className="h-25 w-50 hover:brightness-50 duration-300"
      />
      <img
        src={logo4}
        alt=""
        className="h-25 w-50 hover:brightness-50 duration-300"
      />
      <img
        src={logo5}
        alt=""
        className="h-25 w-50 hover:brightness-50 duration-300"
      />
    </div>
  );
}

export default LogoContainer;
