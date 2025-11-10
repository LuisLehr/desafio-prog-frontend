# 🎓 Sistema de Matrículas – Unisinos  
### Desafio: Programação Front-End  

Repositório contendo a implementação completa do **front-end** e **back-end** do Sistema de Matrículas desenvolvido para a disciplina de **Programação Front-End**.  

O projeto foi construído com **arquitetura modular**, **integração total entre cliente e servidor** e uso de **tecnologias modernas**, visando clareza estrutural, praticidade de execução e experiência do usuário.

---

## 👥 Integrantes do Grupo
- Luís Henrique Lehr  



---

## ⚙️ Pré-requisitos
- **Node.js 20.17.0 (LTS)**  
  🔗 [Download oficial](https://nodejs.org/dist/v20.17.0/)

> Nenhuma instalação global é necessária.  
> O servidor estático utiliza `npx`, garantindo portabilidade entre sistemas.

---

## 🚀 Como Executar o Projeto

### 🪟 Windows
1. Descompacte o arquivo entregue (`desafio-prog-frontend.zip`)  
2. Execute o script **`start.bat`** com duplo clique  
3. O sistema será iniciado automaticamente:
   - **Back-end:** `http://localhost:3000`  
   - **Front-end:** `http://localhost:8080` (abre no navegador padrão)


---

## 🧩 Funcionalidades Implementadas
- Autenticação de perfil (**Administrador / Aluno**)  
- Validação em tempo real de **códigos de horário (21–63)**  
- Restrição de alocação: **máximo 3 turmas por professor**  
- Formatação automática de horários (ex: `23` → `Segunda - Noite`)  
- Criação de turmas com **interface responsiva e intuitiva**  
- Matrícula de aluno com **feedback imediato**  
- Persistência de dados via **arquivo JSON (back-end)**  
- Separação completa de **componentes React**

---

## 🧱 Tecnologias Utilizadas

| Camada | Tecnologia |
|:--|:--|
| **Front-end** | React 17 + Babel Standalone |
| **Estilização** | Bootstrap 4 + CSS customizado |
| **Back-end** | Node.js + Express |
| **Persistência** | Arquivo JSON (`dados.json`) |
| **Servidor estático** | `npx http-server` (sem instalação global) |

---

## 📁 Estrutura do Projeto
```
desafio-prog-frontend/
├── start.bat                     # Execução automatizada (Windows)
├── start.sh                      
├── package.json
├── public/
│   ├── index.html
│   ├── logo-front-end.svg
│   └── src/
│       ├── App.jsx
│       ├── utils/
│       │   └── formatarHorario.js
│       └── components/
│           ├── Navbar.jsx
│           ├── Home.jsx
│           ├── CriarTurma.jsx
│           ├── Grade.jsx
│           ├── TurmasDisponiveis.jsx
│           └── MinhasTurmas.jsx
└── backend/
    ├── server.js                 # API REST completa
    └── dados.json                # Base de dados persistente
```

---

## 🌐 Endpoints da API (Back-end)
| Método | Rota | Descrição |
|:--|:--|:--|
| **GET** | `/dados` | Retorna turmas, professores e disciplinas |
| **GET** | `/turmas` | Lista todas as turmas |
| **POST** | `/turmas` | Cria nova turma → `{disciplina, professorId, horario}` |
| **POST** | `/matriculas` | Realiza matrícula → `{turmaId, alunoId: 1}` |

---

## 🧠 Observações Técnicas
- Uso de `npx http-server` dispensa dependências globais.  
- Back-end em **Express**, com **CORS habilitado** e **persistência síncrona** em JSON.  
- Front-end executado diretamente via **CDN (React 17 + Babel Standalone)**.  
- Testado em **Windows 10/11**, **macOS Ventura** e **Ubuntu 22.04**.  

---

# 🇺🇸 Enrollment System – Unisinos  
### Challenge: Front-End Programming  

Repository containing the complete **front-end** and **back-end** implementation of the Enrollment System developed for the **Front-End Programming** course.  

The project was built with a **modular architecture**, **full client-server integration**, and **modern web technologies**, focusing on structural clarity, usability, and user experience.

---

## 👥 Team Members
- Luís Henrique Lehr  

---

## ⚙️ Requirements
- **Node.js 20.17.0 (LTS)**  
  🔗 [Official download](https://nodejs.org/dist/v20.17.0/)

> No global installations required.  
> The static server uses `npx` for full portability across systems.

---

## 🚀 How to Run the Project

### 🪟 Windows
1. Unzip the provided archive (`desafio-prog-frontend.zip`)  
2. Double-click **`start.bat`** to launch  
3. The system will start automatically:
   - **Back-end:** `http://localhost:3000`  
   - **Front-end:** `http://localhost:8080` (opens in the default browser)

---

## 🧩 Implemented Features
- Profile authentication (**Admin / Student**)  
- Real-time validation of **schedule codes (21–63)**  
- Allocation restriction: **max. 3 classes per teacher**  
- Automatic schedule formatting (e.g. `23` → `Monday - Evening`)  
- Responsive and intuitive class creation interface  
- Student enrollment with instant feedback  
- Data persistence using **local JSON file** (back-end)  
- Full separation of **React components**

---

## 🧱 Technologies Used

| Layer | Technology |
|:--|:--|
| **Front-end** | React 17 + Babel Standalone |
| **Styling** | Bootstrap 4 + Custom CSS |
| **Back-end** | Node.js + Express |
| **Persistence** | JSON File (`dados.json`) |
| **Static Server** | `npx http-server` (no global install) |

---

## 📁 Project Structure
```
desafio-prog-frontend/
├── start.bat                     # Automated launch (Windows)
├── start.sh                      
├── package.json
├── public/
│   ├── index.html
│   ├── logo-front-end.svg
│   └── src/
│       ├── App.jsx
│       ├── utils/
│       │   └── formatarHorario.js
│       └── components/
│           ├── Navbar.jsx
│           ├── Home.jsx
│           ├── CriarTurma.jsx
│           ├── Grade.jsx
│           ├── TurmasDisponiveis.jsx
│           └── MinhasTurmas.jsx
└── backend/
    ├── server.js                 # Complete REST API
    └── dados.json                # Persistent data storage
```

---

## 🌐 API Endpoints (Back-end)
| Method | Route | Description |
|:--|:--|:--|
| **GET** | `/dados` | Returns classes, teachers, and subjects |
| **GET** | `/turmas` | Lists all classes |
| **POST** | `/turmas` | Creates new class → `{disciplina, professorId, horario}` |
| **POST** | `/matriculas` | Enrolls student → `{turmaId, alunoId: 1}` |

---

## 🧠 Technical Notes
- Uses `npx http-server` to avoid global dependencies.  
- Back-end built with **Express**, featuring **CORS** and **synchronous JSON persistence**.  
- Front-end runs directly from **CDN (React 17 + Babel Standalone)**.  
- Tested on **Windows 10/11**, **macOS Ventura**, and **Ubuntu 22.04**.  

