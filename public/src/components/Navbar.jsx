const Navbar = ({ role, setPage, changeRole }) => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand" href="#">
      <img src="./logo-front-end.svg" width="70" /> Sistema de Matrículas
    </a>
    <div className="ml-auto d-flex align-items-center">
      {role === 'admin' ? (
        <>
          <button className="nav-link btn" onClick={() => setPage('criar')}>Criar Turma</button>
          <button className="nav-link btn" onClick={() => setPage('grade')}>Grade</button>
        </>
      ) : (
        <>
          <button className="nav-link btn" onClick={() => setPage('disponiveis')}>Turmas Disponíveis</button>
          <button className="nav-link btn" onClick={() => setPage('minhas')}>Minhas Turmas</button>
        </>
      )}
      <button className="btn btn-role ml-4" onClick={() => changeRole(role === 'admin' ? 'aluno' : 'admin')}>
        {role === 'admin' ? 'Área do Aluno' : 'Área do Admin'}
      </button>
    </div>
  </nav>
);