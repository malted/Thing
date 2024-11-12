export default function BgText({ text }) {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: "Dimensions";
          src: url("/dimensions.woff2") format("woff2");
          font-weight: bold;
          font-style: normal;
        }
      `}</style>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          textTransform: "uppercase",
          zIndex: -10,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 72"
          preserveAspectRatio="none"
        >
          <text
            x="500"
            y="71"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="100"
            fontFamily="Dimensions"
            fontWeight="bold"
            fill="#181818"
            style={{ height: "100%" }}
          >
            <tspan textLength="1000" lengthAdjust="spacingAndGlyphs">
              {text}
            </tspan>
          </text>
        </svg>
      </div>
    </>
  );
}
