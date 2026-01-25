# 👥 Organo

![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Status Badge](https://img.shields.io/badge/Status-Concluído-green?style=for-the-badge)

Uma aplicação interativa desenvolvida em React para gerenciar e organizar times e colaboradores em um só lugar.
---

## 💻 Sobre o Projeto

O **Organo** é uma aplicação Single Page Application (SPA) construída para exercitar os fundamentos essenciais do React. O objetivo principal é permitir que o usuário cadastre colaboradores preenchendo um formulário com nome, cargo e imagem, e o sistema organiza esses cards automaticamente dentro de seus respectivos times.

Este projeto foca na construção de interfaces através da **Composição de Componentes**, sem o uso de bibliotecas de rotas externas, priorizando o entendimento do fluxo de dados via **Props** e gerenciamento de estado com **useState**.

## ✨ Funcionalidades

- [x] **Cadastro de Colaboradores:** Formulário interativo para adicionar novas pessoas.
- [x] **Organização por Times:** Separação automática dos cards (Front-End, Data Science, etc.).
- [x] **Renderização Dinâmica:** Uso de `map` para listar os componentes baseados no estado atual.
- [x] **Interface Responsiva:** Layout adaptável para diferentes telas.

## 🚀 Tecnologias Utilizadas

- **[React](https://reactjs.org/)** (Hooks, Props, State)
- **Javascript**
- **CSS3** (Estilização Modular)
- **Vite** (Build Tool)

## 📦 Como Rodar

```bash
# Clone este repositório
git clone [https://github.com/Viniciuslvargas/organo.git](https://github.com/Viniciuslvargas/organo.git)

# Acesse a pasta do projeto no terminal/cmd
cd organo

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm run dev

# O servidor iniciará na porta:5173 - acesse http://localhost:5173
