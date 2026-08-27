# Study Lens (Jovi Study Lens)
 
Aplicação em React que simula a interface de uma galeria de fotos de celular, com duas abas: **Pessoal** (grade de fotos) e **Estudo** (pastas de estudo com fotos dentro).
 
## Tecnologias utilizadas
 
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (build tool e servidor de desenvolvimento)
- [React Router DOM](https://reactrouter.com/) (navegação entre as abas Pessoal/Estudo)
- CSS puro (arquivo único `index.css`, sem framework de estilos)
- APIs nativas do navegador: `FileReader` (leitura das imagens enviadas pelo usuário) e `localStorage` (persistência dos dados)
## Pré-requisitos
 
- [Node.js](https://nodejs.org/) versão 18 ou superior instalado
- `npm` (já vem instalado junto com o Node.js)
Para conferir se já tem instalado, rode no terminal:
 
```bash
node -v
npm -v
```
 
## Como instalar as dependências
 
1. Extraia o `.zip` do projeto ou clone o repositório.
2. Abra um terminal na pasta raiz do projeto (onde fica o `package.json`).
3. Instale as dependências com:
```bash
npm install
```
 
## Como executar o projeto
 
```bash
npm run dev
```
 
O terminal vai mostrar um endereço local, geralmente:
 
```
http://localhost:5173
```
 
Basta abrir esse endereço no navegador.
 
 
## Uso de Inteligência Artificial no projeto
 
Durante o desenvolvimento, utilizamos o **Claude (Anthropic)** como assistente de programação para implementar e depurar partes específicas do código, sempre respeitando as restrições da disciplina. A IA foi usada para: aprender a fazer upload e leitura de imagens (via `FileReader`), revisar a visualização ampliada da foto, aprender a construir o modo de reordenação (setas para mover fotos/pastas), exemplificar e ensinar a criação de pastas nomeadas pelo usuário com armazenamento de imagens dentro delas, revisar a persistência dos dados no `localStorage`. Todo o código gerado foi revisado, testado e ajustado pela equipe antes de ser incorporado ao projeto final.
 
## Link do Deploy na Vercel
 
🔗 _[https://study-lens-ghb6yy9wq-brucetng.vercel.app/]_
 
## Estrutura do projeto (resumo)
 
```
src/
├── assets/              # Ícones e imagens usadas na interface
├── components/
│   ├── Pessoal.jsx      # Aba "Pessoal": grade de fotos
│   └── Estudo.jsx       # Aba "Estudo": lista de pastas e fotos dentro delas
├── App.jsx              # Componente principal (estado, rotas, layout do celular)
└── index.css            # Estilos de todo o projeto
```