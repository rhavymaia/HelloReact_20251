import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from 'react-bootstrap';
import instituicoesEnsino from '../datasets/censoescolar';
import './InstituicaoEnsino.css';
import estadosDataset from '../datasets/estados';
import getMunicipiosByEstado from '../datasets/cidades';

const InstituicaoEnsino = () => {
  const [instituicaoEnsino, setInstituicaoEnsino] = useState({
    codigo: '',
    nome: '',
    estado: { codigo: '', nome: '' },
    municipio: { codigo: '', nome: '' },
    regiao: '',
  });

  let [estados, setEstados] = useState(estadosDataset);
  let [municipios, setMunicipios] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submeteu os dados!');
  };
  const handleChangeMunicipio = (event) => {
    const { value } = event.target;
    let municipio = { codigo: value };
    setInstituicaoEnsino({ ...instituicaoEnsino, municipio });
    console.log(instituicaoEnsino);
  };

  const handleChangeEstado = (event) => {
    let municipio = { codigo: '', nome: '' };
    setInstituicaoEnsino({ ...instituicaoEnsino, municipio });
    setMunicipios([]);

    const { value } = event.target;
    // Atualizar a instituição de ensino com estado selecionado.
    const codigo = value;
    let estado = { codigo: codigo };
    setInstituicaoEnsino({ ...instituicaoEnsino, estado });

    // Filtrar as cidades.
    let municipiosSelecionados = getMunicipiosByEstado(codigo);
    setMunicipios([...municipiosSelecionados]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInstituicaoEnsino({ ...instituicaoEnsino, [name]: value });
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col sm={8}>Buscar</Col>
        <Col sm={4}>
          <Button
            variant="primary"
            style={{ float: 'right' }}
            onClick={handleShow}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>UF</th>
                <th>Município</th>
                <th>Região</th>
                <th>Mat. Básico</th>
                <th>Mat. da Educação Profissional</th>
                <th>Mat. da Educação de Jovens e Adultos (EJA)</th>
                <th>Mat. da Educação Especial</th>
              </tr>
            </thead>
            <tbody>
              {instituicoesEnsino.map((instituicaoEnsino, i) => {
                return (
                  <tr key={i}>
                    <td>{instituicaoEnsino.codigo}</td>
                    <td>{instituicaoEnsino.nome}</td>
                    <td>{instituicaoEnsino.no_uf}</td>
                    <td>{instituicaoEnsino.no_municipio}</td>
                    <td>{instituicaoEnsino.no_regiao}</td>
                    <td>{instituicaoEnsino.qt_mat_bas}</td>
                    <td>{instituicaoEnsino.qt_mat_prof}</td>
                    <td>{instituicaoEnsino.qt_mat_eja}</td>
                    <td>{instituicaoEnsino.qt_mat_esp}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={show} onHide={handleShow} dialogClassName="modal-80w">
        <Modal.Header closeButton>
          <Modal.Title>Instituição de Ensino</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col sm={3}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Código</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Código"
                    name="codigo"
                    value={instituicaoEnsino.codigo}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={9}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={instituicaoEnsino.nome}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="estado.codigo">Estado</label>
                <select
                  id="estado.codigo"
                  name="estado.codigo"
                  value={instituicaoEnsino.estado.codigo}
                  onChange={handleChangeEstado}
                >
                  <option value="">-</option>
                  {estados.map((estado, i) => (
                    <option key={i} value={estado.codigo}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
              </Col>
              <Col>
                <label htmlFor="estado.sigla">Municípios</label>
                <select
                  id="municipio"
                  name="municipio"
                  value={instituicaoEnsino.municipio.codigo}
                  onChange={handleChangeMunicipio}
                >
                  <option value="">-</option>
                  {municipios.map((municipio, i) => (
                    <option key={i} value={municipio.codigo}>
                      {municipio.nome}
                    </option>
                  ))}
                </select>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Região</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Região"
                    name="regiao"
                    value={instituicaoEnsino.regiao}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Fechar
            </Button>
            <Button variant="danger">Apagar</Button>
            <Button type="submit" variant="primary">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default InstituicaoEnsino;
