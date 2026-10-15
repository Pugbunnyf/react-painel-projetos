const classesPorStatus = {
  "Concluído": "concluido",
  "Em desenvolvimento": "desenvolvimento",
  "Planejamento": "planejamento",
};

function StatusBadge({ status }) {
  const classe = classesPorStatus[status] || "outro";

  return <span className={`status-badge ${classe}`}>{status}</span>;
}

export default StatusBadge;