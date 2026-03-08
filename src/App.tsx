import "./App.css";

import { Header, SeatCard, TicketForm } from "./components";

function App() {
  return (
    <>
      <Header />
      <h1>Expresso Horizon - Reserva de Passagens</h1>
      <SeatCard seatNumber={17} status="disponivel" />
      <SeatCard seatNumber={17} status="reservado" />
      <TicketForm/>
    </>
  );
}

export default App;
