const DATA = {
  email: "prueba@sh.com",
  name: "Juan Carlos",
  surname: "Lopez",
  password: "prueba",
  version: "0.1.0",
  lastAccess: "21/12/2023",
};

const TABLECONTENT = [
  {
    _id: "1",
    name: "Reunión",
    description: "Reunión",
  },
  {
    _id: "2",
    name: "Llamada",
    description: "Llamada",
  },
  {
    _id: "3",
    name: "Cotización",
    description: "Cotización",
  },
];

const NOTESCONTENT = [
  {
    _id: "1",
    name: "Nota Importante",
    description: "Reunión Ariel",
    date: "Hace 1 semana.",
  },
  {
    _id: "2",
    name: "Día Jueves",
    description: "Llamar Juan",
    date: "Hace 2 semanas.",
  },
];

const ADRESSCONTENT = [
  {
    _id: "1",
    name: "Fisica",
    description: "Sarmiento 431",
  },
  {
    _id: "2",
    name: "Juridica",
    description: "Sarmiento 630",
  },
];

const CONTACTSCONTENT = [
  {
    _id: "1",
    name: "Juan Gomez",
    description: "116555555",
  },
  {
    _id: "2",
    name: "Telefono Físico",
    description: "4444-5555",
  },
];

const EVENTS_TYPE = [
  {
    _id: "1",
    name: "Reunión",
  },
  {
    _id: "2",
    name: "Llamada",
  },
  {
    _id: "3",
    name: "Cotización",
  },
  {
    _id: "4",
    name: "Tarea",
  },
];

const EVENTS = [
  {
    _id: "1",
    name: "Llamada día Lunes",
    description: "El día lunes se realizó una llamada con Oscar.",
    user: "Juan Manuel",
    date: "30/10/2019",
    state: "Completada",
    type: "LLamada",
  },
  {
    _id: "2",
    name: "Llamada día Martes",
    description: "Se pactó reunión con contaduría.",
    user: "Carlos Dut",
    date: "31/10/2019",
    state: "Completada",
    type: "Llamada",
  },
  {
    _id: "3",
    name: "Reunión",
    description: "Reunión día viernes.",
    user: "Axel",
    date: "31/10/2019",
    state: "En Progreso",
    type: "Reunión",
  },
];

const ACCOUNTS = [
  {
    _id: "1",
    name: "Cliente Argentino",
    ranking: "3",
    potential: "1",
    state: "3",
    service:
      "Cliente\tIBC | Venta - GerenciamientoIsotanques | Lavado y Servicio estándarCales",
    type: "2",
    industry: "Aromas y Fragancias",
    socialName: "Argentina S.A",
    cuit: "20-34912391-2",
    creationDate: "14/11/2017",
    ModificationDate: "29/05/2018",
  },
  {
    _id: "2",
    name: "Multiple Test",
    ranking: "1",
    potential: "1",
    state: "1",
    service:
      "Cliente\tIBC | RebottlingIsotanques | -Cales | CalCamiones y Cisternas",
    type: "1",
    industry: "Aromas y Fragancias",
    socialName: "Argentina S.A",
    creationDate: "14/11/2017",
    ModificationDate: "29/05/2018",
  },
  {
    _id: "3",
    name: "Test Argentina",
    cuit: "20-34912391-2",
    ranking: "2",
    potential: "2",
    state: "1",
    service:
      "ClienteProveedor\tIBC | Nuevo - Gerenciamiento - VentaCompra de IBC",
    type: "2",
    industry: "Aromas y Fragancias",
    socialName: "Argentina S.A",
    creationDate: "14/11/2017",
    ModificationDate: "29/05/2018",
  },
];

const RANKING = [
  {
    value: "1",
    label: "A",
  },
  {
    value: "2",
    label: "B",
  },
  {
    value: "3",
    label: "D",
  },
];

const POTENTIAL = [
  {
    value: "1",
    label: "Alto",
  },
  {
    value: "2",
    label: "Medio",
  },
  {
    value: "3",
    label: "Bajo",
  },
];

const STATE = [
  {
    value: "1",
    label: "Consolidado",
  },
  {
    value: "2",
    label: "No Consolidado",
  },
];

const TYPE = [
  {
    value: "1",
    label: "A",
  },
  {
    value: "2",
    label: "B",
  },
];

export { DATA };
export { TYPE };
export { STATE };
export { EVENTS };
export { EVENTS_TYPE };
export { POTENTIAL };
export { TABLECONTENT };
export { CONTACTSCONTENT };
export { ADRESSCONTENT };
export { NOTESCONTENT };
export { RANKING };
export { ACCOUNTS };
