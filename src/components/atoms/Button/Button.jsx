export default function Button({ children, ...props}) {
  return (
    <button
      style={{
        backgroundColor: "red",
        padding: "10px",
      }}
      {...props}
    >
      {children}
    </button>
  )
}
