import Cabecalho from "./components/cabecalho";
import Secao from "./components/secao";
import Resumo from "./components/resumo";
import ProjetoCard from "./components/projetoCard";
import Rodape from "./components/rodape";
import "./App.css";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos e movimentações.",
    responsavel: { nome: "Caetano", turma: "grupo  A" },
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
    nota: 9,
  },
  {
    id: 2,
    titulo: "Agenda Escolar",
    descricao: "Calendário de provas, trabalhos e eventos da turma.",
    responsavel: { nome: "Pedro", turma: "Grupo A" },
    status: "Em desenvolvimento",
    tecnologias: ["React", "Firebase"],
    destaque: false,
  },
  {
    id: 3,
    titulo: "Loja Virtual",
    descricao: "Catálogo de produtos com carrinho de compras.",
    responsavel: { nome: "Gustavo", turma: "Grupo B" },
    status: "Concluído",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false,
    nota: 7.5,
  },
  {
    id: 4,
    titulo: "App de Receitas",
    descricao: "Busca de receitas por ingredientes.",
    responsavel: { nome: "Eduardo", turma: "Grupo B" },
    status: "Planejamento",
    tecnologias: ["React Native", "API REST"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Controle de Biblioteca",
    descricao: "Cadastro de livros, alunos e empréstimos.",
    responsavel: { nome: "ASSper", turma: "Grupo A" },
    status: "Em desenvolvimento",
    tecnologias: ["Java", "MySQL"],
    destaque: true,
  },
  {
    id: 6,
    titulo: "Portal de Notícias",
    descricao: "Site de notícias com painel para os editores.",
    responsavel: { nome: "Rebibas", turma: "Grupo B" },
    status: "Planejamento",
    tecnologias: ["React", "Node.js"],
    destaque: false,
  },
];

function App() {
  const total = projetos.length;
  const concluidos = projetos.filter((p) => p.status === "Concluído").length;
  const emDesenvolvimento = projetos.filter(
    (p) => p.status === "Em desenvolvimento"
  ).length;

  return (
    <div className="app">
      <Cabecalho />

      <main>
        <Secao titulo="Resumo do painel">
          <Resumo
            total={total}
            concluidos={concluidos}
            emDesenvolvimento={emDesenvolvimento}
          />
        </Secao>

        <Secao titulo="Projetos da turma">
          <div className="lista-projetos">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                responsavel={projeto.responsavel}
                status={projeto.status}
                tecnologias={projeto.tecnologias}
                destaque={projeto.destaque}
                nota={projeto.nota}
              />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </div>
  );
}

export default App;