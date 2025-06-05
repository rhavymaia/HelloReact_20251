import { useState } from 'react';
import './Main.css';
import { Button, Table } from 'react-bootstrap';
import pessoasDataset from '../datasets/pessoas';

const Main = () => {
  let [pessoas, setPessoas] = useState(pessoasDataset);

  const handleClick = (event) => {};

  const removerPessoa = (id) => {
    let pessoasAtualizadas = pessoas.filter((pessoa, i) => {
      return pessoa.id == id ? false : true;
    });
    setPessoas(pessoasAtualizadas);
  };

  return (
    <main>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
            <th>Nascimento</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((pessoa, i) => {
            return (
              <tr key={i}>
                <td>{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.sobrenome}</td>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.nascimento}</td>
                <td>
                  <Button
                    className={'m-2'}
                    variant="danger"
                    onClick={(event) => {
                      removerPessoa(pessoa.id);
                    }}
                  >
                    Remover
                  </Button>
                  <Button className={'m-2'} variant="primary">
                    Editar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </main>
  );
};

export default Main;
