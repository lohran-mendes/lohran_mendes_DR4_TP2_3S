import { useState, type SubmitEvent } from "react";
import "./styles.css";

export function TicketForm() {
  const [passageiro, setPassageiro] = useState("");
  const [assento, setAssento] = useState("");
  const [destino, setDestino] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Formulário enviado!");
    console.log("Passageiro:", passageiro);
    console.log("Assento:", assento);
    console.log("Destino:", destino);
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2 className="ticket-form-title">Reserva de Assento</h2>

      <label className="ticket-form-field">
        Passageiro:
        <input
          required={true}
          type="text"
          value={passageiro}
          onChange={(e) => setPassageiro(e.target.value)}
          placeholder="Nome completo"
        />
      </label>

      <label className="ticket-form-field">
        Assento:
        <input
          required={true}
          type="number"
          min={0}
          max={40}
          value={assento}
          onChange={(e) => setAssento(e.target.value)}
          placeholder="Ex: 17"
        />
      </label>

      <label className="ticket-form-field">
        Destino:
        <input
          required={true}
          type="text"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          placeholder="Cidade de destino"
        />
      </label>

      <button className="ticket-form-button" type="submit">
        Reservar Assento
      </button>
    </form>
  );
}
