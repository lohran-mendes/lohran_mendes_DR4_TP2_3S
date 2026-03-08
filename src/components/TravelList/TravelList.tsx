import "./styles.css";

import type { Passagem } from "../../types";
import { Button } from "../Button/Button";

export function TravelList(props: { passagens: Passagem[] }) {
  const { passagens } = props;

  return (
    <div className="travel-list">
      <h2>Lista de Passagens</h2>
      <div className="travel-list-cards">
        {passagens.map((passagem) => (
          <div className="travel-card" key={passagem.id}>
            <h3>{passagem.passageiro}</h3>
            <p>Assento: {passagem.assento}</p>
            <p>Origem: {passagem.origem}</p>
            <p>Destino: {passagem.destino}</p>
            <p>Data: {passagem.data.toLocaleDateString()}</p>
            <p>Status: {passagem.status}</p>
            <div className="travel-card-actions">
              <Button label="Cancelar" variant="danger" />
              <Button label="Alterar" variant="warning" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
