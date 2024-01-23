import "./grid-item.css";

function GridItem(props) {
  const { backgroundImage } = props;

  return (
    <div className="image-item-wrapper">
      <div className="classes-image-item">
        <img className="size-full" src={backgroundImage} alt="" />
      </div>
      <div className="classes-icon-container">
        <img src={props.icon} alt="" />
      </div>
      <div className="classes-description-container">
        <h2 className="text-3xl font-semibold my-5">{props.activity}</h2>
        <div className="classes-date-container">
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
}

export default GridItem;
