const Home = ({ role }) => (
  <div className="text-center mt-5">
    <h1 style={{fontSize: '56px', color: '#6A1B9A'}}>
      Bem-vindo, {role === 'admin' ? 'Administrador' : 'Aluno'}!
    </h1>
    <p style={{fontSize: '42px', color: '#555'}}>Use o menu acima para navegar</p>
  </div>
);