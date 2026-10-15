function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div className="resumo">
      <div className="resumo-item">
        <span className="numero">{total}</span>
        <span>Total de projetos</span>
      </div>
      <div className="resumo-item">
        <span className="numero">{concluidos}</span>
        <span>Concluídos</span>
      </div>
      <div className="resumo-item">
        <span className="numero">{emDesenvolvimento}</span>
        <span>Em desenvolvimento</span>
      </div>
    </div>
  );
}

export default Resumo;