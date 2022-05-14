function HeadComponent({ color, text }) {
  return (
    <div
      style={{
        backgroundColor: `var(--brand-${color})`,
        color: "white",
        padding: "30px",
        boxShadow: "1px 2px 4px var(--brand-color)",
        margin: "20px",
        padding: "50px",
        maxWidth: "600px",
        maxHeight: "500px",
      }}
    >
      <h1 style={{ color: "var(--brand-color)" }}>{text}</h1>
    </div>
  );
}

export default HeadComponent;
