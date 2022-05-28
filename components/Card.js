import Image from "next/image";

function Card({ header, description, image }) {
  return (
    <div className="flex card-hover center card">
      <div className="flex column ">
        <Image src={image} width="360px" height="270px" alt={header} />

        <h3 style={{ textDecoration: "none !important" }}>{header}</h3>
        <p
          style={{
            textDecoration: "none !important",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
