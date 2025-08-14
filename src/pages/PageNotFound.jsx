import PageNav from "../components/PageNav";
export default function PageNotFound() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "95dvh",
        margin: "2rem",
        padding: "2rem",
        borderRadius: '2rem'
      }}
    >
      <PageNav />
      <h1
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          // bottom: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Page not found 😢
      </h1>
    </div>
  );
}
