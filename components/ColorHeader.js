function ColorHeader({ color, text }) {
  return (
    <div
      className="max card-responsive"
      style={{
        backgroundColor: `var(--brand-${color})`,
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "1px 2px 3px var(--brand-color)",
        margin: "20px",
      }}
    >
      <p style={{ color: "var(--brand-color)" }}>{text}</p>
      <style jsx>
        {`
          p {
            font-size: clamp(1rem, 20vw, 1.5rem);
            color: var(--brand-color);
            line-height: 1.5em;
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
}

export default ColorHeader;
