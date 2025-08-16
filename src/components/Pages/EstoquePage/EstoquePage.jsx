import React, { useState } from "react";
import "./EstoquePage.css";

import Header from "../../Header/Header.jsx";
import SearchBar from "../../SearchBar/SearchBar.js";
import LegendaStatus from "../../LegendaStatus/LegendaStatus.jsx";
import ProductCard from "../../ProductCard/ProductCard.jsx";
import ProductModal from "../../ProductCard/ProductModal.jsx";

export default function EstoquePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtos = [
    {
      nome: "Doce de Amendoim",
      lotes: 12,
      validade: "Vence em 1 ano",
      peso: 320,
      status: "ok",
      icone: "/icons/amendoim.png",
    },
    {
      nome: "Bombom Happy",
      lotes: 8,
      validade: "Vence em 3 meses",
      peso: 150,
      status: "alerta",
      icone: "/icons/bombom.png",
    },
    {
      nome: "Coloreti",
      lotes: 2,
      validade: "Lote vencido",
      peso: 45,
      status: "vencido",
      icone: "/icons/pirulito.png",
    },
    {
      nome: "Amendoim Crocante",
      lotes: 2,
      validade: "Vence em 6 meses",
      peso: 45,
      status: "alerta",
      icone: "/icons/pirulito.png",
    },
    {
      nome: "Tetop",
      lotes: 2,
      validade: "Lote vencido",
      peso: 45,
      status: "vencido",
      icone: "/icons/pirulito.png",
    },  
  ];

  const produtosFiltrados = produtos.filter((produto) => {
    const nomeMatch = produto.nome
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filterDate) {
      return nomeMatch && produto.validade.toLowerCase().includes("vence");
    }
    return nomeMatch;
  });

  return (
    <div className="estoque-page">
      <Header />
      <SearchBar
        onSearch={setSearchTerm}
        onDateFilter={setFilterDate}
      />
      <LegendaStatus />
      <div className="estoque-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto, index) => (
            <ProductCard
              key={index}
              {...produto}
              onClick={() => setProdutoSelecionado(produto)}
            />
          ))
        ) : (
          <p className="mensagem-vazia">Nenhum produto encontrado.</p>
        )}
      </div>
      <ProductModal
        produto={produtoSelecionado}
        onClose={() => setProdutoSelecionado(null)}
      />
    </div>
  );
}
