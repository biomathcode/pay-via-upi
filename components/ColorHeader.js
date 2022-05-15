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
      <h2 style={{ color: "var(--brand-color)" }}>{text}</h2>
    </div>
  );
}

export default ColorHeader;
