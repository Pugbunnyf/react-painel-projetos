import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
  nota,
}) {
  return (
    <article className={destaque ? "projeto-card em-destaque" : "projeto-card"}>
      {destaque && <strong className="selo-destaque">Projeto em destaque</strong>}

      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p className="responsavel">
        Responsável: {responsavel.nome} ({responsavel.turma})
      </p>

      <StatusBadge status={status} />

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag key={tecnologia} nome={tecnologia} />
        ))}
      </div>

      {nota >= 7 && <p className="aprovado">Projeto aprovado (nota {nota})</p>}
    </article>
  );
}

export default ProjetoCard;