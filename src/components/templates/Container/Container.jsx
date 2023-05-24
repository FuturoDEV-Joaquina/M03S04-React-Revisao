import Navbar from "../../molecules/Navbar/Navbar";

export default function Container({ children }) {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "80vh",
          padding: "10px",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          minHeight: "10vh",
          padding: "10px",
        }}
      >
        Rodapé
      </footer>
    </>
  );
}
