import "./card.style.css";

const Card = (props) => {
  const { name, id, email } = props.monster;
  return (
    <div className="card-container" key={id}>
      <img
        className="monster-image"
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
