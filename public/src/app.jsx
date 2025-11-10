const App = () => {
  const [role, setRole] = React.useState('aluno');
  const [page, setPage] = React.useState('home');
  const [dados, setDados] = React.useState({ turmas: [], professores: [], disciplinas: [] });
  const [minhasMatriculas, setMinhasMatriculas] = React.useState([]);

  const loadData = () => {
    fetch('http://localhost:3000/dados')
      .then(r => r.json())
      .then(data => {
        setDados(data);
        setMinhasMatriculas(data.turmas.filter(t => t.alunos.includes(1)));
      });
  };

  React.useEffect(() => { loadData(); }, []);

  const changeRole = (newRole) => {
    setRole(newRole);
    setPage('home');
  };

  return (
    <>
      <Navbar role={role} setPage={setPage} changeRole={changeRole} />
      {page === 'home' && <Home role={role} />}
      {role === 'admin' && page === 'criar' && <CriarTurma dados={dados} loadData={loadData} />}
      {role === 'admin' && page === 'grade' && <Grade turmas={dados.turmas} />}
      {role === 'aluno' && page === 'disponiveis' && <TurmasDisponiveis turmas={dados.turmas} loadData={loadData} />}
      {role === 'aluno' && page === 'minhas' && <MinhasTurmas turmas={minhasMatriculas} />}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));