const estadosDataset = [
  {
    nome: 'Acre',
    sigla: 'AC',
    codigo: 12,
    regiao: { nome: 'Norte', codigo: 1 },
  },
  {
    nome: 'Alagoas',
    sigla: 'AL',
    codigo: 27,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Amapá',
    sigla: 'AP',
    codigo: 16,
    regiao: { nome: 'Norte', codigo: 1 },
  },
  {
    nome: 'Amazonas',
    sigla: 'AM',
    codigo: 13,
    regiao: { nome: 'Norte', codigo: 1 },
  },
  {
    nome: 'Bahia',
    sigla: 'BA',
    codigo: 29,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Ceará',
    sigla: 'CE',
    codigo: 23,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Distrito Federal',
    sigla: 'DF',
    codigo: 53,
    regiao: { nome: 'Centro-Oeste', codigo: 5 },
  },
  {
    nome: 'Espírito Santo',
    sigla: 'ES',
    codigo: 32,
    regiao: { nome: 'Sudeste', codigo: 3 },
  },
  {
    nome: 'Goiás',
    sigla: 'GO',
    codigo: 52,
    regiao: { nome: 'Centro-Oeste', codigo: 5 },
  },
  {
    nome: 'Maranhão',
    sigla: 'MA',
    codigo: 21,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Mato Grosso',
    sigla: 'MT',
    codigo: 51,
    regiao: { nome: 'Centro-Oeste', codigo: 5 },
  },
  {
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
    codigo: 50,
    regiao: { nome: 'Centro-Oeste', codigo: 5 },
  },
  {
    nome: 'Minas Gerais',
    sigla: 'MG',
    codigo: 31,
    regiao: { nome: 'Sudeste', codigo: 3 },
  },
  {
    nome: 'Pará',
    sigla: 'PA',
    codigo: 15,
    regiao: { nome: 'Norte', codigo: 1 },
  },
  {
    nome: 'Paraíba',
    sigla: 'PB',
    codigo: 25,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Paraná',
    sigla: 'PR',
    codigo: 41,
    regiao: { nome: 'Sul', codigo: 4 },
  },
  {
    nome: 'Pernambuco',
    sigla: 'PE',
    codigo: 26,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Piauí',
    sigla: 'PI',
    codigo: 22,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
    codigo: 33,
    regiao: { nome: 'Sudeste', codigo: 3 },
  },
  {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    codigo: 24,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Rio Grande do Sul',
    sigla: 'RS',
    codigo: 43,
    regiao: { nome: 'Sul', codigo: 4 },
  },
  {
    nome: 'Rondônia',
    sigla: 'RO',
    codigo: 11,
    regiao: { nome: 'Norte', codigo: 1 },
  },
  {
    nome: 'Roraima',
    sigla: 'RR',
    codigo: 14,
    regiao: { nome: 'Norte', codigo: 1 },
  },
  {
    nome: 'Santa Catarina',
    sigla: 'SC',
    codigo: 42,
    regiao: { nome: 'Sul', codigo: 4 },
  },
  {
    nome: 'São Paulo',
    sigla: 'SP',
    codigo: 35,
    regiao: { nome: 'Sudeste', codigo: 3 },
  },
  {
    nome: 'Sergipe',
    sigla: 'SE',
    codigo: 28,
    regiao: { nome: 'Nordeste', codigo: 2 },
  },
  {
    nome: 'Tocantins',
    sigla: 'TO',
    codigo: 17,
    regiao: { nome: 'Norte', codigo: 1 },
  },
];

const getEstadoByCodigo = (codigo) => {
  const estado = estadosDataset.find(
    (estado) => estado.codigo === parseInt(codigo),
  );
  return estado ? estado : null;
};

const getRegiaoByEstadoCodigo = (codigo) => {
  const estado = estadosDataset.find(
    (estado) => estado.codigo === parseInt(codigo),
  );
  return estado ? estado.regiao : null;
};

export { estadosDataset, getEstadoByCodigo, getRegiaoByEstadoCodigo };
