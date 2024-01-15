import logo1 from "../../../images/testimonials/logo1.png";
import logo2 from "../../../images/testimonials/logo2.png";
import logo3 from "../../../images/testimonials/logo3.png";
import logo4 from "../../../images/testimonials/logo4.png";
import logo5 from "../../../images/testimonials/logo5.png";

function LogoContainer() {
  return (
    <div className="flex justyfi-around max-w-6xl gap-4 py-5 my-10">
      <img src={logo1} alt="" className="h-25 w-50" />
      <img src={logo2} alt="" className="h-25 w-50" />
      <img src={logo3} alt="" className="h-25 w-50" />
      <img src={logo4} alt="" className="h-25 w-50" />
      <img src={logo5} alt="" className="h-25 w-50" />
    </div>
  );
}

export default LogoContainer;
