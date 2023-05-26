import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import Title from "../../components/atoms/Title/Title";
import Container from "../../components/templates/Container/Container";

function Titulo({ texto }) {
  return <h1>{texto}</h1>;
}

export default function Home() {
  const [apareceNovaHome, setApareceNovaHome] = useState(false);

  const pessoas = [
    {
      id: 1,
      nome: "João",
      idade: 20,
    },
    {
      id: 2,
      nome: "Maria",
      idade: 30,
    },
  ];

  const alunos = [
    {
      id: 1,
      nome: "Danilo",
      nota: 6.5,
    },
    {
      id: 2,
      nome: "Marcos",
      nota: 8.5,
    },
    {
      id: 3,
      nome: "Carla",
      nota: 9.0,
    },
    {
      id: 4,
      nome: "Rosana",
      nota: 10.0,
    },
  ];

  return (
    <Container>
      {/* <Titulo texto="Sou um título com props" /> */}

      {apareceNovaHome ? (
        <>
          <Title>Nova Home</Title>
          <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
          </form>
        </>
      ) : (
        <>
          <Title>Home</Title>
          {pessoas.map((pessoa) => (
            <div key={pessoa.id}>
              <h4>{pessoa.nome}</h4>
              <p>{pessoa.idade}</p>
            </div>
          ))}

          <table>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Nota</th>
              </tr>
            </thead>

            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.id}>
                  <td>{aluno.nome}</td>
                  <td>{aluno.nota}</td>
                </tr>
              ))}

              {/* <tr>
                <td>Danilo</td>
                <td>6.5</td>
              </tr>
                
              <tr>
                <td>Marcos</td>
                <td>8.5</td>
              </tr>

              <tr>
                <td>Carla</td>
                <td>9.0</td>
              </tr>
                
              <tr>
                <td>Rosana</td>
                <td>10.0</td>
              </tr> */}
            </tbody>
          </table>
        </>
      )}

      <Button onClick={() => setApareceNovaHome(!apareceNovaHome)}>
        Clique aqui
      </Button>
    </Container>
  );
}
