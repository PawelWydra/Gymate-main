import "./redBgHeadin.css";

function RedBgHeading(props) {
  const containerStyle = {
    width: props.width || '18rem'
  };

  return (
    <div className="red-bg-heading-container" style={containerStyle}>
      <h1>{props.text}</h1>
    </div>
  );
}

export default RedBgHeading;
