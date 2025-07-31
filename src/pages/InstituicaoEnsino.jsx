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
import { ToastContainer, toast } from 'react-toastify';
import instituicoesEnsinoDataset from '../datasets/censoescolar';
import './InstituicaoEnsino.css';
import { estadosDataset, getEstadoByCodigo } from '../datasets/estados';
import {
  getMunicipiosByEstado,
  getMunicipioByCodigo,
} from '../datasets/cidades';

const InstituicaoEnsino = () => {
  let [instituicoesEnsino, setInstituicoesEnsino] = useState([
    ...instituicoesEnsinoDataset,
  ]);

  const [instituicaoEnsino, setInstituicaoEnsino] = useState({
    codigo: '',
    nome: '',
    estado: { codigo: '', nome: '' },
    municipio: { codigo: '', nome: '' },
    regiao: { codigo: '', nome: '' },
  });

  let [estados, setEstados] = useState(estadosDataset);
  let [municipios, setMunicipios] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicionar os dados na tabela.
    setInstituicoesEnsino([...instituicoesEnsino, instituicaoEnsino]);

    // Adicionar os dados no LocalStorage.

    // Fechar o modal.
    handleShow();

    // Exibir o Toast.
    toast('Instituição inserida com sucesso!');
  };

  const handleChangeMunicipio = (event) => {
    const { value } = event.target;
    const codigo = value;
    let municipio = getMunicipioByCodigo(codigo);

    setInstituicaoEnsino({ ...instituicaoEnsino, municipio: municipio });
  };

  const handleChangeEstado = (event) => {
    const { value } = event.target;
    const codigo = value;
    let estado = getEstadoByCodigo(codigo);

    // Região.
    // if (estado != null) {
    //   let regiao = estado?.regiao;
    // }
    let regiao = estado?.regiao;

    // Atualizar a instituição de ensino com estado e regiao selecionado.
    setInstituicaoEnsino({ ...instituicaoEnsino, estado, regiao });

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
      {/* Tabela */}
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
                    <td>{instituicaoEnsino.estado.nome}</td>
                    <td>{instituicaoEnsino.municipio.nome}</td>
                    <td>{instituicaoEnsino.regiao.nome}</td>
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
      {/* Modal */}
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
                <label htmlFor="estado">Estado</label>
                <select
                  id="estado"
                  name="estado"
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
                <label htmlFor="municipio">Municípios</label>
                <select
                  id="municipio"
                  name="municipio"
                  value={instituicaoEnsino.municipio.codigo}
                  onChange={handleChangeMunicipio}
                >
                  <option value="">-</option>
                  {municipios.map((municipio, i) => (
                    <option key={i} value={String(municipio.codigo)}>
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
                    value={instituicaoEnsino.regiao.nome}
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
      {/* Toast */}
      <ToastContainer />
    </Container>
  );
};

export default InstituicaoEnsino;
