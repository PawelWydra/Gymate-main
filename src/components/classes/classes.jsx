import "./classes.css";
import redBg from "../../images/choose-us/title-bg.svg";

function Classes() {
  return (
    <div className="classes-main-wrapper">
      <div className="classes-container">
        <div className="classes-featured">
          <img src={redBg} alt="Title" className="redBg" />
          <h3>OUR FEATURED CLASS</h3>
        </div>
        <h1>We Are Offering Best Flexible Classes</h1>
        <div className="classes-image-grid">
          <div className="classes-image-item">
            <div className="classes-icon-container">
              <img src="" alt="" />
            </div>
            <div className="classes-description-container">
              <h2>Cycling</h2>
              <div className="classes-date-container">
                <p>Wednesday: 9:00am-10:00am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
