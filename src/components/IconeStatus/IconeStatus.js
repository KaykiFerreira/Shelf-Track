import React from 'react';

function IconeStatus({ status }) {
  if (status === 'verde') return <span style={{ color: 'green' }}>✔️</span>;
  if (status === 'amarelo') return <span style={{ color: 'orange' }}>⚠️</span>;
  if (status === 'vermelho') return <span style={{ color: 'red' }}>❌</span>;
  return null;
}

export default IconeStatus;
