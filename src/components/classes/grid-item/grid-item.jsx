import "./grid-item.css";

function GridItem(props) {
  const { backgroundImage } = props;

  const containerStyle = {
    background: `url(${backgroundImage}) top/cover no-repeat`,
  };

  return (
    <div className="image-item-wrapper">
      <div style={containerStyle} className="classes-image-item"></div>
      <div className="classes-icon-container">
        <img src="" alt="" />
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
