const MinhasTurmas = ({ turmas }) => (
  <div className="container mt-4">
    <h2 className="text-center mb-4">Minhas Turmas</h2>
    <div style={{border: '2px solid #6A1B9A', borderRadius: '15px', width: '90%', margin: '20px auto', height: '500px', overflowY: 'auto', backgroundColor: '#f5f0ff', padding: '25px'}}>
      {turmas.length === 0 ? 
        <p className="text-center" style={{fontSize: '44px', color: '#666', marginTop: '100px'}}>
          Você ainda não se matriculou em nenhuma turma.
        </p> :
        <ul style={{listStyle: 'none', padding: 0}}>
          {turmas.map(t => (
            <li key={t.id} style={{margin: '25px 0', padding: '25px', background: 'white', borderRadius: '15px', boxShadow: '0 6px 15px rgba(106,27,154,0.15)'}}>
              <strong style={{fontSize: '48px', color: '#6A1B9A'}}>{t.disciplina}</strong><br/>
              <span style={{color: '#444', fontSize: '36px'}}>Professor: {t.professorNome}</span><br/>
              <span className="horario-badge">
                {formatarHorario(t.horario)}
              </span>
            </li>
          ))}
        </ul>
      }
    </div>
  </div>
);