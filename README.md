# 🎵 Portfólio de Produção Musical

> Uma plataforma web interativa para exibição de portfólio musical, reprodução de faixas em tempo real, exibição de biografias dos artistas e solicitação de serviços de produção.

---

## 📌 Tabela de Conteúdos

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)

---

## ℹ️ Sobre o Projeto

O **Portfólio de Produção Musical** é uma aplicação web voltada para a divulgação de lançamentos, álbuns e singles produzidos no estúdio. A plataforma permite aos ouvintes explorar faixas, tocar áudio via player customizado com navegação entre faixas, conferir biografias detalhadas de cada artista e preencher um formulário direto de solicitação de contratação de serviços musicais (como mixagem, arranjo e masterização).

---

## ✨ Funcionalidades

- [x] Vitrine interativa de lançamentos e projetos musicais
- [x] Player de áudio com reprodução, pausa, controle de volume e troca de faixas
- [x] Playlist lateral interativa sincronizada no Player
- [x] Página dedicada de Biografia do Artista
- [x] Formulário de solicitação para contratação de produção musical
- [x] Layout responsivo e estilização customizada

---

## 🛠️ Tecnologias Utilizadas

### **Front-end**
- **Linguagem:** JavaScript (ES6+) / HTML5
- **Estilização:** CSS e Bootstrap 5
- **Módulos / Dependências:** Node.js / npm (gerenciamento do Bootstrap via `node_modules`)

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas em sua máquina:

- [Git](https://git-scm.com)
- Um navegador web moderno (Google Chrome, Firefox, Edge, etc.)
- Servidor local simples (como a extensão **Live Server** do VS Code) ou suporte a carregamento local para testar a inclusão dos arquivos do Bootstrap via `node_modules`.

---

## 🚀 Como Executar

### 1. Clonar o repositório

```bash
git clone [https://github.com/gabriela-carnevali/meu-projeto.git]
cd seu-repositorio
```

### 2. Inicializar o npm

```bash
npm init -y
```
### 3. Instalar as dependências do Bootstrap (caso necessário)

```bash
npm install bootstrap 
```

### 4. Abrir o projeto

Abra o arquivo `index.html` diretamente no seu navegador ou rode utilizando o **Live Server** no seu editor de código.

---

## 📁 Estrutura do Projeto

```text
.
├── src/
│   ├── css/
│   │   └── style.css      
│   └── js/
│       └── script.js       
├── artista.html            
├── contratar.html          
├── index.html              
└── player.html            
```