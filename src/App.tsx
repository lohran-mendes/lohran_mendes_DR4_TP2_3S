import "./App.css";

import { Header, SeatCard } from "./components";

function App() {
  return (
    <>
      <Header />
      <h1>Expresso Horizon - Reserva de Passagens</h1>
      <SeatCard seatNumber="17A" status="disponivel" />
      <SeatCard seatNumber="17B" status="reservado" />
    </>
  );
}

export default App;
