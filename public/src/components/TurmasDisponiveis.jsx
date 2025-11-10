const TurmasDisponiveis = ({ turmas, loadData }) => {
  const matricular = (turmaId) => {
    fetch('http://localhost:3000/matriculas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ turmaId, alunoId: 1 })
    }).then(() => {
      loadData();
      alert('Matriculado com sucesso!');
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Turmas Disponíveis</h2>
      <div style={{border: '2px solid #6A1B9A', borderRadius: '15px', width: '90%', margin: '20px auto', height: '500px', overflowY: 'auto', backgroundColor: '#f5f0ff', padding: '25px'}}>
        <ul style={{listStyle: 'none', padding: 0}}>
          {turmas.map(t => (
            <li key={t.id} style={{margin: '30px 0', padding: '30px', background: 'white', borderRadius: '20px', boxShadow: '0 8px 20px rgba(106,27,154,0.25)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <strong style={{fontSize: '50px', color: '#6A1B9A'}}>{t.disciplina}</strong><br/>
                  <span style={{color: '#444', fontSize: '38px'}}>Prof. {t.professorNome}</span><br/>
                  <span className="horario-badge">
                    {formatarHorario(t.horario)}
                  </span>
                </div>
                <button 
                  onClick={() => matricular(t.id)}
                  style={{backgroundColor: '#6A1B9A', color: 'white', padding: '20px 40px', fontSize: '36px', borderRadius: '15px', border: 'none'}}
                >
                  Matricular
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};