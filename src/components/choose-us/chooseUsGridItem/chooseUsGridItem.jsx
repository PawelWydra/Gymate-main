import "./chooseUsGridItem.css";


function ChooseUsGridItem(props) {
  return (
    <div className="chooseUs-grid-item">
      <div className="chooseUs-icon-container">
        <img src={props.icon} alt="" />
      </div>
      <h3 className="w-32 self-center">{props.description}</h3>
    </div>
  );
}

export default ChooseUsGridItem;
