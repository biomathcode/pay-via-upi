import Image from "next/image";

function Card({ header, description }) {
  return (
    <div className="flex card-hover card">
      <div className="flex column">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
