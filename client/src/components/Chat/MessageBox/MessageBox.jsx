export default function MessageBox({ message }) {
  return (
    <div
      style={{
        padding: "0.5rem",
        margin: "1rem",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        width: "70%",
        alignSelf: "flex-end",
        borderRadius: "0 0.9rem 0.9rem 0.9rem",
        backgroundColor: "#50924E",
        color: "#3D4260",
      }}
    >
      <p>{`${message}`}</p>
    </div>
  );
}
