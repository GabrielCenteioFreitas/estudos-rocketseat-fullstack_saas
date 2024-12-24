<h1 align="center">NextJS SAAS + RBAC</h1>

<p align="center">
  <p>
    <a alt="Turborepo">
      <img src="https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=Turborepo&logoColor=white" />
    </a>
  </p>
  
  <h3 align="left">Front-end</h3>
  <p>
    <a alt="ReactJS">
      <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    </a>
    <a alt="NextJS">
      <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" />
    </a>
    <a alt="TypeScript">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    </a>
    <a alt="TailwindCSS">
      <img src="https://img.shields.io/badge/TAILWINDCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    </a>
    <a alt="Shadcn UI">
      <img src="https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white" />
    </a>
  </p>
  
  <h3 align="left">Back-end</h3>
  <p>
    <a alt="NodeJS">
      <img src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    </a>
    <a alt="Fastify">
      <img src="https://img.shields.io/badge/Fastify-000000.svg?style=for-the-badge&logo=Fastify&logoColor=white" />
    </a>
    <a alt="TypeScript">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    </a>
    <a alt="Prisma">
      <img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white" />
    </a>
    <a alt="Zod">
      <img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white" />
    </a>
    <a alt="Docker">
      <img src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white" />
    </a>
    <a alt="PostgreSQL">
      <img src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white" />
    </a>
  </p>
</p>

## 💻 Projeto<a id="projeto"></a>

Projeto de um SaaS multi-tenant com suporte a autenticação e autorização baseadas em RBAC (Role-Based Access Control). O sistema oferece opções de login tanto por e-mail e senha quanto por meio de uma conta do GitHub. Ele permite a criação de diferentes organizações, com funcionalidades específicas para a gestão de organizações, usuários e projetos. Desenvolvido durante o curso "Next.js SaaS + RBAC", da Rocketseat.

#### Cargos
- Proprietário (conta como administrador)
- Administrador
- Membro
- Financeiro (um por organização)
- Anônimo

### Funcionalidades
#### Autenticação
- [X] Deve ser possível autenticar-se usando e-mail e senha;
- [X] Deve ser possível autenticar-se usando uma conta do Github;
- [X] Deve ser possível recuperar a senha usando e-mail;
- [X] Deve ser possível criar uma conta (e-mail, nome e senha);
#### Organizações
- [X] Deve ser possível criar uma nova organização;
- [X] Deve ser possível obter as organizações às quais o usuário pertence;
- [X] Deve ser possível atualizar uma organização;
- [X] Deve ser possível desativar uma organização;
- [X] Deve ser possível transferir a propriedade de uma organização;
#### Convites
- [X] Deve ser possível convidar um novo membro (e-mail, cargo);
- [X] Deve ser possível aceitar um convite;
- [X] Deve ser possível revogar um convite pendente;
#### Membros
- [X] Deve ser possível obter os membros de uma organização;
- [X] Deve ser possível atualizar o cargo de um membro;
#### Projetos
- [X] Deve ser possível obter os projetos dentro de uma organização;
- [X] Deve ser possível criar um novo projeto (nome, URL, descrição);
- [X] Deve ser possível atualizar um projeto (nome, URL, descrição);
- [X] Deve ser possível deletar um projeto;
#### Financeiro
- [X] Deve ser possível obter os detalhes financeiros de uma organização ($20 por projeto / $10 por membro, excluindo o cargo de financeiro).  


### Tabela de permissões
|                          | Administrador | Membro | Financeiro | Anônimo   |
| ------------------------ | ------------- | ------ | ---------- | --------- |
| Atualizar organização    | ✅            | ❌     | ❌         | ❌        |
| Deletar organização      | ✅            | ❌     | ❌         | ❌        |
| Convidar um membro       | ✅            | ❌     | ❌         | ❌        |
| Revogar um convite       | ✅            | ❌     | ❌         | ❌        |
| Listar membros           | ✅            | ✅     | ✅         | ❌        |
| Transferir propriedade   | ⚠️            | ❌     | ❌         | ❌        |
| Atualizar cargo de membro| ✅            | ❌     | ❌         | ❌        |
| Remover membro           | ✅            | ⚠️     | ❌         | ❌        |
| Listar projetos          | ✅            | ✅     | ✅         | ❌        |
| Criar um novo projeto    | ✅            | ✅     | ❌         | ❌        |
| Atualizar um projeto     | ✅            | ⚠️     | ❌         | ❌        |
| Deletar um projeto       | ✅            | ⚠️     | ❌         | ❌        |
| Obter detalhes financeiros | ✅          | ❌     | ✅         | ❌        |
| Exportar detalhes financeiros | ✅       | ❌     | ✅         | ❌        |
> ✅ = permitido
> ❌ = não permitido
> ⚠️ = permitido com condições

#### Condições
- Apenas proprietários podem transferir a propriedade da organização;
- Apenas administradores e autores do projeto podem atualizar/deletar o projeto;
- Membros podem sair de suas próprias organizações.
