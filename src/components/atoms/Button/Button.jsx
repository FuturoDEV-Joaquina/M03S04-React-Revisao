export default function Button({ children }) {
  return (
    <button
      style={{
        backgroundColor: "red",
        padding: "10px",
      }}
    >
      {children}
    </button>
  )
}
