import React, { useState } from 'react';
import './App.css';

// Categorias fixas na ordem desejada
const categoriasFixas = [
  'Amendo Chef',
  'Bombons Happy',
  'Chocomais', 
  'Chokiss',
  'Coloreti',
  'Coloreti Ball',
  'Croc-Choc',
  'Doces de Amendoim',
  'Ducrem',
  'Granulados',
  'Pingo de Leite',
  'Snacks de Amendoim',
  'Tetop e Top Mellow'
];

// Produtos com categorias atualizadas
const produtos = [
  { id: 1, nome: 'Doce de Amendoim', categoria: 'Doces de Amendoim', estoque: 12, status: 'verde', vencimento: '1 ano', peso: 320 },
  { id: 2, nome: 'Bombom Happy', categoria: 'Bombons Happy', estoque: 8, status: 'amarelo', vencimento: '3 meses', peso: 150 },
  { id: 3, nome: 'Coloreti', categoria: 'Coloreti', estoque: 2, status: 'vermelho', vencimento: 'Lote vencido', peso: 45 },
  { id: 4, nome: 'Paçoca Rolha', categoria: 'Doces de Amendoim', estoque: 15, status: 'verde', vencimento: '10 meses', peso: 280 },
  { id: 5, nome: 'Pé de Moleque', categoria: 'Doces de Amendoim', estoque: 5, status: 'amarelo', vencimento: '4 meses', peso: 120 },
  { id: 6, nome: 'Amendoim', categoria: 'Snacks de Amendoim', estoque: 9, status: 'verde', vencimento: '8 meses', peso: 200 },
  { id: 7, nome: 'Tubitos', categoria: 'Doces de Amendoim', estoque: 4, status: 'amarelo', vencimento: '5 meses', peso: 90 },
  { id: 8, nome: 'ChocoMais', categoria: 'Chocomais', estoque: 1, status: 'vermelho', vencimento: 'Lote vencido', peso: 30 },
];

function IconeStatus({ status }) {
  if (status === 'verde') return <span style={{color: 'green'}}>✔️</span>;
  if (status === 'amarelo') return <span style={{color: 'orange'}}>⚠️</span>;
  if (status === 'vermelho') return <span style={{color: 'red'}}>❌</span>;
  return null;
}

function Categoria({ nome, produtos }) {
  const [aberto, setAberto] = useState(true);

  return (
    <div className="categoria-card">
      <h2 
        onClick={() => setAberto(!aberto)} 
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        {nome}
      </h2>
      {aberto && (
        produtos.length > 0 ? (
          <div className="product-list">
            {produtos.map(produto => (
              <div key={produto.id} className="product-card">
                <div className="product-icon">🥜</div>
                <h3 className="product-name">{produto.nome}</h3>
                <p className="product-stock">{produto.estoque} lotes em estoque</p>
                <p className={`product-status status-${produto.status}`}>
                  {produto.status === 'vermelho' ? 'Lote vencido' : `Vence em ${produto.vencimento}`}
                </p>
                <p className="product-weight">{produto.peso} kg</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontStyle: 'italic', color: '#888' }}>Sem produtos disponíveis.</p>
        )
      )}
    </div>
  );
}

function App() {
  const [busca, setBusca] = useState('');
  const [dataFiltro, setDataFiltro] = useState('');

  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="header">
  <div className="header-left">
    <img 
      src="/logo.png"
      alt="Logo" 
      className="header-logo" 
    />
    <div className="header-title">Jazam</div>
    <button className="header-button">Estoque</button>
  </div>
  <div className="notification">
    <span role="img" aria-label="notifications">🔔</span>
  </div>
</header>
<div className="search-container">
      <div className="search-filter">
        <input
          type="text"
          placeholder="Buscar por categoria ou nome do produto..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="input-text"
        />
        <input
          type="date"
          value={dataFiltro}
          onChange={e => setDataFiltro(e.target.value)}
          className="input-date"
        />
        <button className="filter-button">Filtrar</button>
      </div>
      <div className="legend">
        <strong>Legenda de Status:</strong>
        <div className="legend-items">
          <div><IconeStatus status="verde" /> Vence em mais de 6 meses</div>
          <div><IconeStatus status="amarelo" /> Vence em menos de 6 meses</div>
          <div><IconeStatus status="vermelho" /> Lote vencido</div>
        </div>
      </div>

      <div className="categorias-container">
        {categoriasFixas.map(categoria => {
          const produtosDaCategoria = produtosFiltrados.filter(p => p.categoria === categoria);
          return (
            <Categoria key={categoria} nome={categoria} produtos={produtosDaCategoria} />
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default App;