// server.js — BACK-END COMPLETO SEM NENHUM npm install
// Funciona em QUALQUER PC com Node.js 20.17.0

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'dados.json');

// Carregar dados
let dados = {
  turmas: [],
  professores: [
    { id: 1, nome: "Prof A", turmasAlocadas: 0 },
    { id: 2, nome: "Prof B", turmasAlocadas: 0 }
  ],
  disciplinas: ["Matemática", "Programação Front-End", "Banco de Dados"],
  alunos: [{ id: 1, nome: "Aluno Exemplo" }]
};

try {
  const fileData = fs.readFileSync(DATA_FILE, 'utf8');
  const parsed = JSON.parse(fileData);
  dados = { ...dados, ...parsed };
  console.log('Dados carregados do dados.json');
} catch (err) {
  console.log('dados.json não encontrado. Usando dados padrão.');
}

// Salvar dados
const salvar = () => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(dados, null, 2));
  console.log('Dados salvos em dados.json');
};

// Criar servidor
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);

  // GET /dados
  if (req.method === 'GET' && parsedUrl.pathname === '/dados') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(dados));
  }

  // GET /turmas
  if (req.method === 'GET' && parsedUrl.pathname === '/turmas') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ turmas: dados.turmas }));
  }

  // POST /turmas
    // POST /turmas — VERSÃO 100% FUNCIONAL
  if (req.method === 'POST' && parsedUrl.pathname === '/turmas') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const disciplina = data.disciplina;
        const professorId = parseInt(data.professorId);  // ← FORÇA CONVERSÃO
        const horario = data.horario;

        if (!disciplina || !professorId || !horario) {
          res.writeHead(400);
          return res.end('Dados incompletos');
        }

        const prof = dados.professores.find(p => p.id === professorId);
        if (!prof) {
          res.writeHead(400);
          return res.end('Professor não encontrado');
        }
        if (prof.turmasAlocadas >= 3) {
          res.writeHead(400);
          return res.end('Professor já tem 3 turmas');
        }

        const novaTurma = {
          id: dados.turmas.length + 1,
          disciplina,
          professorId,
          professorNome: prof.nome,
          horario,
          alunos: []
        };

        dados.turmas.push(novaTurma);
        prof.turmasAlocadas++;
        salvar();  // ← ESTA É A LINHA QUE SALVA NO ARQUIVO

        console.log('TURMA CRIADA:', novaTurma);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, turma: novaTurma }));
      } catch (e) {
        console.error('ERRO AO CRIAR TURMA:', e);
        res.writeHead(400);
        res.end('Erro no servidor');
      }
    });
    return;
  }

  // POST /matriculas
    // POST /matriculas — VERSÃO 100% FUNCIONAL
  if (req.method === 'POST' && parsedUrl.pathname === '/matriculas') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const turmaId = parseInt(data.turmaId);
        const alunoId = data.alunoId || 1;

        const turma = dados.turmas.find(t => t.id === turmaId);
        if (!turma) {
          res.writeHead(400);
          return res.end('Turma não encontrada');
        }

        if (!turma.alunos.includes(alunoId)) {
          turma.alunos.push(alunoId);
          salvar();
          console.log('ALUNO MATRICULADO:', { turmaId, alunoId });
        }

        res.writeHead(200);
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        console.error('ERRO NA MATRÍCULA:', e);
        res.writeHead(400);
        res.end('Erro');
      }
    });
    return;
  }

  res.writeHead(404);
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`BACK-END RODANDO EM http://localhost:${PORT}`);
  console.log(`ABRA http://localhost:8080 NO NAVEGADOR`);
});