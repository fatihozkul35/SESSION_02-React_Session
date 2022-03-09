import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => {
        const { name, img, comment, id, job } = item;
        return (
          <div className="card" key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className="btn-container">
               <button className="btn-container--small">Small</button>
               <button className="btn-container--large">Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
