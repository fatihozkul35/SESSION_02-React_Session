import "./Cards.scss";
import { data } from "../../helpers/data";

const Cards = () => {
  return (
    <div className="card-container">
      {data.map((card) => {
        const { id, title, desc, image } = card;
        return (
          <div className="cards" key={id}>
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="img-div">
              <img src={image} alt="" />
            </div>
            <div className="card-over">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
