# roadmap-emprendedor

> [!WARNING]
> **Aviso de IA**: Este projeto foi inteiramente desenvolvido por Inteligência Artificial e necessita de rigorosa revisão humana. O código pode conter erros, ineficiências ou vulnerabilidades. Utilize com cautela.

> [!NOTE]
> Este projeto está sendo aberto para a comunidade (Open Source). Toda e qualquer contribuição para melhorar, corrigir e evoluir a ferramenta é extremamente bem-vinda!

## Sobre

O **roadmap-empreendedor** é uma ferramenta pensada para apoiar empreendedores e startups em Cabo Verde, oferecendo uma estrutura para a criação e organização de roadmaps que cubram diferentes etapas do ecossistema empreendedor. O escopo inclui temas como legalização e criação de empresas, contabilidade, formações, bolsas e candidaturas a financiamentos.

A proposta é que os conteúdos dos roadmaps sejam escritos e curados por especialistas da comunidade, membros de instituições e, eventualmente, por entidades governamentais.

A visão futura do projeto é manter um modelo de escrita e edição de roadmaps o mais simples possível, permitindo que pessoas sem conhecimentos técnicos consigam criar ou atualizar conteúdos. Para isso, a ferramenta de edição deverá permitir tanto a criação de roadmaps do zero quanto a edição de roadmaps já existentes.

Os roadmaps serão armazenados de forma estática no próprio repositório, sem dependência de uma base de dados. A ferramenta de edição atuará apenas como apoio à criação e modificação dos conteúdos, sendo necessário posteriormente exportar os roadmaps em formato JSON e integrá-los manualmente ao código-fonte do repositório.

Esta arquitetura representa uma visão inicial, podendo ser revista ou alterada no futuro à medida que o projeto evoluir.

## Funcionalidades

- **Editor Visual de Nós**: Crie e organize tarefas arrastando e soltando elementos na tela.
- **Gestão de Dependências**: Conecte tarefas para estabelecer pré-requisitos e fluxos de trabalho claros.
- **Conteúdo em Markdown**: Adicione descrições ricas e detalhadas para cada nó do seu roadmap.
- **Status Personalizáveis**: Marque tarefas como Obrigatórias, Opcionais, Em Progresso, Concluídas, etc.
- **Modo Escuro**: Interface moderna com suporte nativo a dark mode para melhor conforto visual.
- **Armazenamento Local**: Seus roadmaps são salvos automaticamente (funcionalidade a confirmar/implementar).

## Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna e performática:

- **[React](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**: Para uma base sólida e tipada.
- **[Vite](https://vitejs.dev/)**: Build tool ultrarrápida.
- **[Tailwind CSS](https://tailwindcss.com/)**: Para estilização ágil e responsiva.
- **[React Flow (@xyflow/react)](https://reactflow.dev/)**: O core da funcionalidade de editor visual de nós.
- **[Lucide React](https://lucide.dev/)**: Ícones leves e consistentes.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas da aplicação.

## Como Iniciar

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/roadmap-emprendedor.git
    cd roadmap-emprendedor
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    # ou
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    # ou
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra `http://localhost:5173` (ou a porta indicada no terminal).

## Contribuindo

Como mencionado, este projeto é um "draft" gerado por IA. **Precisamos da sua ajuda para torná-lo um produto real e robusto!**

Sinta-se à vontade para:
- Refatorar código e melhorar a arquitetura.
- Adicionar testes automatizados.
- Corrigir bugs de interface ou lógica.
- Melhorar a acessibilidade e responsividade.
- Implementar persistência de dados (Backend ou LocalStorage robusto).

1.  Faça um Fork do projeto.
2.  Crie uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`).
3.  Faça o Commit de suas mudanças (`git commit -m 'Adiciona MinhaFeature'`).
4.  Faça o Push para a Branch (`git push origin feature/MinhaFeature`).
5.  Abra um Pull Request.

---
*Gerado por IA - Jan 2026*
