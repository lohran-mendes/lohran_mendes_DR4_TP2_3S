import { useState } from "react";
import "./App.css";

import { Button, Header, SeatCard, TicketForm, TravelList } from "./components";
import type { DadosPassagem, Passagem } from "./types";
import { BaseLayout } from "./layouts";

const mockPassagens: Passagem[] = [
  {
    id: 1,
    passageiro: "João Silva",
    assento: 17,
    origem: "Brasília",
    destino: "Rio de Janeiro",
    data: new Date("2024-07-15"),
    status: "confirmada",
  },
  {
    id: 2,
    passageiro: "Maria Oliveira",
    assento: 5,
    origem: "Brasília",
    destino: "Salvador",
    data: new Date("2024-08-20"),
    status: "cancelada",
  },
  {
    id: 3,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
  {
    id: 4,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
  {
    id: 5,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
  {
    id: 6,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
];

function App() {
  const [passagens, setPassagens] = useState<Passagem[]>(mockPassagens);

  const addPassagem = (dadosPassagem: DadosPassagem) => {
    const isDuplicateAssento = passagens.some(
      (passagens) => passagens.assento === dadosPassagem.assento,
    );

    if (isDuplicateAssento) {
      alert(
        `O assento ${dadosPassagem.assento} já está reservado. Por favor, escolha outro assento.`,
      );
      return;
    }

    setPassagens((prevPassagens) => [
      ...prevPassagens,
      {
        id: prevPassagens.length + 1,
        passageiro: dadosPassagem.passageiro,
        assento: dadosPassagem.assento,
        destino: dadosPassagem.destino,
        origem: "Brasília",
        data: new Date(),
        status: "pendente",
      },
    ]);

    console.log("Dados da nova passagem:", dadosPassagem);
  };

  return (
    <>
      <BaseLayout>
        <h1>Expresso Horizon - Reserva de Passagens</h1>
        <TicketForm addNewPassagem={addPassagem} />
        <TravelList passagens={passagens} />
      </BaseLayout>
    </>
  );
}

export default App;
