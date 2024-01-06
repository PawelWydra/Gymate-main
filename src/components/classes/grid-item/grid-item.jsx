import './grid-item.css';

function GridItem(props) {
    return ( <div className="classes-image-item">
    <div className="classes-icon-container">
      <img src="" alt="" />
    </div>
    <div className="classes-description-container">
      <h2>{props.title}</h2>
      <div className="classes-date-container">
        <p>{props.date}</p>
      </div>
    </div>
  </div> );
}

export default GridItem;