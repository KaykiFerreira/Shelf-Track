import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import SearchFilter from './components/SearchFilter/SearchFilter';
import Legend from './components/Legend/Legend';
import Categoria from './components/Categoria/Categoria';

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

function App() {
  const [busca, setBusca] = useState('');
  const [dataFiltro, setDataFiltro] = useState('');

  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <div className="search-container">
        <SearchFilter
          busca={busca}
          setBusca={setBusca}
          dataFiltro={dataFiltro}
          setDataFiltro={setDataFiltro}
        />
        <Legend />
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
