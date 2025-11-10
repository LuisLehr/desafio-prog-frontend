const CriarTurma = ({ dados, loadData }) => {
  const [form, setForm] = React.useState({ disciplina: '', professorId: '', horario: '' });
  const [erroHorario, setErroHorario] = React.useState('');

  const handleChange = (e) => {
    const valor = e.target.value;
    setForm({ ...form, horario: valor });

    if (valor && !HORARIOS_VALIDOS.includes(valor)) {
      setErroHorario('Horário inválido! Use: 21,22,23,31,32,33,41,42,43,51,52,53,61,62,63');
    } else {
      setErroHorario('');
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (!HORARIOS_VALIDOS.includes(form.horario)) {
      alert('ERRO: Horário inválido!\n\nUse apenas:\n21,22,23 (Segunda)\n31,32,33 (Terça)\n41,42,43 (Quarta)\n51,52,53 (Quinta)\n61,62,63 (Sexta)');
      return;
    }

    const prof = dados.professores.find(p => p.id == form.professorId);
    if (prof && prof.turmasAlocadas >= 3) {
      alert('Este professor já tem 3 turmas!');
      return;
    }

    fetch('http://localhost:3000/turmas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => {
      loadData();
      setForm({ disciplina: '', professorId: '', horario: '' });
      setErroHorario('');
      alert('Turma criada com sucesso!');
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5" style={{fontWeight: 'bold', color: '#6A1B9A', fontSize: '56px'}}>
        Criar Nova Turma
      </h2>
      
      <form onSubmit={submit}>
        <div style={{display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px', flexWrap: 'wrap'}}>
          
          {/* SELECT DISCIPLINA */}
          <div style={{flex: '1', minWidth: '300px'}}>
            <select 
              name="disciplina" 
              value={form.disciplina} 
              onChange={(e) => setForm({...form, disciplina: e.target.value})} 
              required
              style={{
                backgroundColor: '#6A1B9A',
                color: 'white',
                fontSize: '36px',
                padding: '20px',
                borderRadius: '15px',
                border: 'none',
                width: '100%',
                boxShadow: '0 8px 25px rgba(106,27,154,0.4)',
                textAlign: 'center'
              }}
            >
              <option value="">Selecione a Disciplina</option>
              {dados.disciplinas.map(d => 
                <option key={d} value={d}>{d}</option>
              )}
            </select>
          </div>

          {/* SELECT PROFESSOR */}
          <div style={{flex: '1', minWidth: '300px'}}>
            <select 
              name="professorId" 
              value={form.professorId} 
              onChange={(e) => setForm({...form, professorId: e.target.value})} 
              required
              style={{
                backgroundColor: '#6A1B9A',
                color: 'white',
                fontSize: '36px',
                padding: '20px',
                borderRadius: '15px',
                border: 'none',
                width: '100%',
                boxShadow: '0 8px 25px rgba(106,27,154,0.4)',
                textAlign: 'center'
              }}
            >
              <option value="">Selecione o Professor</option>
              {dados.professores.map(p => (
                <option key={p.id} value={p.id}>
                  {p.nome} ({p.turmasAlocadas}/3)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/*HORÁRIO  */}
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <input
            name="horario"
            value={form.horario}
            onChange={handleChange}
            placeholder="Ex: 23"
            style={{
              width: '250px',
              fontSize: '40px',
              padding: '20px',
              borderRadius: '20px',
              border: '5px solid #6A1B9A',
              textAlign: 'center',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(106,27,154,0.3)'
            }}
            required
          />
        </div>

        {/* ERRO HORÁRIO */}
        {erroHorario && 
          <div style={{
            textAlign: 'center',
            color: '#ff1744',
            background: '#ffebee',
            padding: '20px',
            borderRadius: '20px',
            fontSize: '32px',
            margin: '20px auto',
            maxWidth: '800px',
            border: '3px solid #ff1744',
            fontWeight: 'bold'
          }}>
            {erroHorario}
          </div>
        }

        {/* BOTÃO CENTRALIZADO */}
        <div style={{textAlign: 'center'}}>
          <button 
            type="submit" 
            style={{
              backgroundColor: '#4a148c',
              color: 'white',
              padding: '25px 100px',
              fontSize: '48px',
              borderRadius: '25px',
              fontWeight: 'bold',
              boxShadow: '0 15px 40px rgba(74,20,140,0.6)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            CRIAR TURMA
          </button>
        </div>
      </form>
    </div>
  );
};