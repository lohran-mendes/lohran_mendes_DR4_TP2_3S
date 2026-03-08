import "./styles.css";

import type { Passagem } from "../../types";

export function TravelList(props: { passagens: Passagem[] }) {
  const { passagens } = props;

  return (
    <div className="travel-list">
      <h2>Lista de Viagens</h2>
      {passagens.map((passagem) => (
        <div className="travel-card" key={passagem.id}>
          <h3>{passagem.passageiro}</h3>
          <p>Assento: {passagem.assento}</p>
          <p>Origem: {passagem.origem}</p>
          <p>Destino: {passagem.destino}</p>
          <p>Data: {passagem.data.toLocaleDateString()}</p>
          <p>Status: {passagem.status}</p>
        </div>
      ))}
    </div>
  );
}
