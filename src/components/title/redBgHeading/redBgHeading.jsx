import "./redBgHeadin.css";
import "../../../images/choose-us/choose-bg.jpg";

function RedBgHeading(props) {
  return (
    <div className="red-bg-heading-container">
      <h1>{props.text}</h1>
    </div>
  );
}

export default RedBgHeading;
