function Secao({ titulo, children }) {
  return (
    <section className="secao">
      <h2>{titulo}</h2>
      <div className="secao-conteudo">{children}</div>
    </section>
  );
}

export default Secao;