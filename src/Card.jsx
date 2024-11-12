export default function Card({ children, ...props }) {
  return (
    <div
      style={{
        margin: ".5em",
        fontWeight: "bold",
        backgroundColor: "#20202080",
        backdropFilter: "blur(0.14em)",
        filter: "drop-shadow(0 0 0.15em #0a0a0a80)",
        borderRadius: "0.2em",
        border: "2px solid #ffffff04",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
