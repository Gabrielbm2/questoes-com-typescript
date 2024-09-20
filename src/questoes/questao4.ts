const bancoDeDados = {
  Cliente: [
    { cliente_id: 1, razao_social: "Cliente A", estado_id: 1 },
    { cliente_id: 2, razao_social: "Cliente B", estado_id: 1 },
    { cliente_id: 3, razao_social: "Cliente C", estado_id: 2 },
  ],
  Telefone: [
    { telefone_id: 1, numero: "1234-5678", tipo: "comercial", cliente_id: 1 },
    { telefone_id: 2, numero: "9876-5432", tipo: "celular", cliente_id: 1 },
    { telefone_id: 3, numero: "5555-5555", tipo: "residencial", cliente_id: 2 },
  ],
  Estado: [
    { estado_id: 1, sigla: "SP", nome: "São Paulo" },
    { estado_id: 2, sigla: "RJ", nome: "Rio de Janeiro" },
  ],
};

export function buscarClientesSP() {
  const estadoSP = bancoDeDados.Estado.find((estado) => estado.sigla === "SP");

  if (!estadoSP) {
    console.log("Estado não encontrado.");
    return;
  }

  const clientesSP = bancoDeDados.Cliente.filter(
    (cliente) => cliente.estado_id === estadoSP.estado_id
  );

  console.log(`Clientes do estado: ${estadoSP.nome} (${estadoSP.sigla}):\n`);

  clientesSP.forEach((cliente) => {
    const telefones = bancoDeDados.Telefone.filter(
      (telefone) => telefone.cliente_id === cliente.cliente_id
    );

    console.log(
      `Cliente ID: ${cliente.cliente_id}, Razão Social: ${cliente.razao_social}`
    );
    telefones.forEach((telefone) => {
      console.log(` - Telefone: ${telefone.numero} (${telefone.tipo})`);
    });
    console.log("");
  });
}

export function modeloLogico() {
  console.log("Modelo Lógico do Banco de Dados:");
  console.log(`
Tabelas:
1. Cliente
   - cliente_id (PK)
   - razao_social
   - estado_id (FK)
  
2. Telefone
   - telefone_id (PK)
   - numero
   - tipo
   - cliente_id (FK)

3. Estado
   - estado_id (PK)
   - sigla
   - nome
`);

  console.log(`
Relacionamentos:
- Cliente (1) ---- (N) Telefone
- Estado (1) ---- (N) Cliente
`);

  console.log(`Consulta SQL: 
SELECT 
    c.cliente_id, 
    c.razao_social, 
    t.numero
FROM 
    Cliente c
JOIN 
    Estado e ON c.estado_id = e.estado_id
LEFT JOIN 
    Telefone t ON c.cliente_id = t.cliente_id
WHERE 
    e.sigla = 'SP';`);
}

buscarClientesSP();
modeloLogico();
