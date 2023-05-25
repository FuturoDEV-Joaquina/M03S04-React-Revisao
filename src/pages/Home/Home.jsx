import Button from "../../components/atoms/Button/Button";
import Title from "../../components/atoms/Title/Title";
import Container from "../../components/templates/Container/Container";

function Titulo({ texto }) {
  return (
    <h1>
      {texto}
    </h1>
  )
}


export default function Home() {
  return (
    <Container>
      {/* <Titulo texto="Sou um título com props" /> */}

      <Title>
        Home
      </Title>

      <Button>
        Clique aqui <span>oqoqoq <strong>aaa</strong></span>
      </Button>

    </Container>
  )
}
