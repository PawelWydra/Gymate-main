import "./grid-item.css";
import bike from "../../../images/features/bike-red.png"

function GridItem(props) {
  const { backgroundImage } = props;

  const containerStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat`,
  };

  return (
    <div className="image-item-wrapper">
      <div style={containerStyle} className="classes-image-item"></div>
      <div className="classes-icon-container">
        <img src={bike} alt="" />
      </div>
      <div className="classes-description-container">
        <h2>{props.activity}</h2>
        <div className="classes-date-container">
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
}

export default GridItem;
