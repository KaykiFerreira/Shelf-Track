import React from 'react';
import IconeStatus from '../IconeStatus/IconeStatus';
import './Legend.css';

function Legend() {
  return (
    <div className="legend">
      <strong>Legenda de Status:</strong>
      <div className="legend-items">
        <div><IconeStatus status="verde" /> Vence em mais de 6 meses</div>
        <div><IconeStatus status="amarelo" /> Vence em menos de 6 meses</div>
        <div><IconeStatus status="vermelho" /> Lote vencido</div>
      </div>
    </div>
  );
}

export default Legend;
