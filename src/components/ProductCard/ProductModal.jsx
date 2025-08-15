import React from "react";
import "./ProductCard.css";

export default function ProductModal({ produto, onClose }) {
  if (!produto) return null;

  const lotes = [
    {
      id: "#A12345",
      fabricado: "10/05/2023",
      validade: "10/05/2024",
      peso: 80,
      status: "ok",
    },
    {
      id: "#A12346",
      fabricado: "15/05/2023",
      validade: "15/05/2024",
      peso: 76,
      status: "ok",
    },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-card modal-single">
        <button className="modal-close" onClick={onClose} title="Fechar">×</button>
        <div className="modal-header modal-header-single">
          <img src={produto.icone} alt={produto.nome} className="modal-icon" />
          <h2>{produto.nome}</h2>
        </div>
        <div className="modal-content-row">
          <div className="modal-info-geral modal-info-geral-single">
            <h4>Informações Gerais</h4>
            <div><b>Total em estoque:</b> {produto.peso} kg</div>
            <div><b>Lotes:</b> {produto.lotes}</div>
            <div>
              <b>Próximo vencimento:</b>{" "}
              <span className="modal-vencimento">15/08/2024</span>
            </div>
            <div><b>Última entrada:</b> 10/05/2023</div>
          </div>
          <div className="modal-lotes modal-lotes-single">
            <h4>Lotes em Estoque</h4>
            {lotes.map((lote, idx) => (
              <div key={idx} className="modal-lote modal-lote-single">
                <div>
                  <b>{lote.id}</b><br />
                  Fabricado: {lote.fabricado}<br />
                  Validade: {lote.validade}
                </div>
                <div>
                  <span>{lote.peso} kg</span>
                  {lote.status === "ok" && <span className="modal-status ok">✔️</span>}
                  {lote.status === "alerta" && <span className="modal-status alerta">⚠️</span>}
                  {lote.status === "vencido" && <span className="modal-status vencido">❌</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}