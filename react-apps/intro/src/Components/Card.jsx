const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.imgURL} alt={props.name} />
      </div>
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
