import { useState } from "react";
import "./App.css";

import { Button, Header, SeatCard, TicketForm, TravelList } from "./components";
import type { Passagem } from "./types";

const mockPassagens: Passagem[] = [
  {
    id: 1,
    passageiro: "João Silva",
    assento: 17,
    origem: "São Paulo",
    destino: "Rio de Janeiro",
    data: new Date("2024-07-15"),
    status: "confirmada",
  },
  {
    id: 2,
    passageiro: "Maria Oliveira",
    assento: 5,
    origem: "Belo Horizonte",
    destino: "Salvador",
    data: new Date("2024-08-20"),
    status: "cancelada",
  },
  {
    id: 3,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Curitiba",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  }
];

function App() {
  const [passagens, setPassagens] = useState<Passagem[]>(mockPassagens);


  return (
    <>
      <Header />
      <h1>Expresso Horizon - Reserva de Passagens</h1>
      <SeatCard seatNumber={17} status="disponivel" />
      <SeatCard seatNumber={17} status="reservado" />
      <Button label="Clique aqui" variant="success" />
      <Button label="Clique aqui" variant="warning" />
      <Button label="Clique aqui" variant="danger" />
      <TicketForm/>
      <TravelList passagens={passagens} />
    </>
  );
}

export default App;
