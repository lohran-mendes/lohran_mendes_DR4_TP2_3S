export interface Passagem {
  id: number;
  passageiro: string;
  assento: string;
  origem: string;
  destino: string;
  data: Date;
  status: 'confirmada' | 'pendente' |  'cancelada';
}