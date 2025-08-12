import React from 'react';
import './DetalheProduto.css';

const DetalheProduto = ({ produto, onClose }) => {
  if (!produto) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="header">
          <img src={produto.img} alt={produto.nome} className="produto-img" />
          <h2>{produto.nome}</h2>
        </div>
        <div className="info-geral">
          <h3>Informações Gerais</h3>
          <p>Total em estoque: <b>{produto.totalEstoque} kg</b></p>
          <p>Lotes: <b>{produto.lotes.length}</b></p>
          <p>Próximo vencimento: <b>{produto.proximoVencimento}</b></p>
          <p>Última entrada: <b>{produto.ultimaEntrada}</b></p>
        </div>
        <div className="lotes">
          <h3>Lotes em Estoque</h3>
          {produto.lotes.map(lote => (
            <div key={lote.id} className="lote">
              <div>
                <b>Lote #{lote.id}</b>
                <p>Fabricação: {lote.fabricacao}</p>
                <p>Validade: {lote.validade}</p>
              </div>
              <div>
                <span>{lote.peso} kg</span>
                <span className={`status status-${lote.status}`}></span>
              </div>
            </div>
          ))}
        </div>
        <div className="grafico">
          <h3>Distribuição de Validade</h3>
          {/* Aqui pode usar uma lib como react-chartjs-2 para o gráfico */}
          <img src="/grafico-exemplo.png" alt="Gráfico de validade" />
          <div className="legenda-grafico">
            <span className="legenda verde">Vence em mais de 6 meses</span>
            <span className="legenda amarelo">Vence em menos de 6 meses</span>
            <span className="legenda vermelho">Vencido</span>
          </div>
        </div>
        <div className="acoes">
          <button className="adicionar-lote">Adicionar Lote</button>
          <button className="exportar-relatorio">Exportar Relatório</button>
        </div>
      </div>
    </div>
  );
};

export default DetalheProduto;