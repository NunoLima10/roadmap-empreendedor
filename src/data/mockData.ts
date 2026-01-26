import type { Roadmap } from '../types/roadmap';

export const frontendRoadmap: Roadmap = {
  id: 'frontend-beginner',
  title: 'Frontend Development',
  description: 'Step by step guide to becoming a modern frontend developer in 2025',
  category: 'Technology',
  level: 'Beginner',
  nodes: [
    {
      id: 'internet',
      title: 'Internet',
      description: 'How does the internet work?',
      status: 'required',
      content: `
# Internet

The Internet is a global network of networks that connects billions of devices worldwide. It allows computers to communicate with each other using standard protocols.

## Key Concepts
- **HTTP/HTTPS**: How the web transfers data.
- **DNS**: The phonebook of the internet.
- **Domain Name**: The address of a website.
- **Hosting**: Where websites live.

### Resources
- [How does the Internet work? (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
      `,
      links: [
        { url: 'https://cs50.harvard.edu/x/2023/', label: 'CS50 Introduction' }
      ]
    },
    {
      id: 'html',
      title: 'HTML',
      description: 'The structure of the web pages.',
      status: 'required',
      dependsOn: ['internet'],
      content: `
# HTML (HyperText Markup Language)

HTML is the standard markup language for documents designed to be displayed in a web browser.

## Basics
- Semantic HTML
- Forms and Validations
- Accessibility (A11y)
- SEO Basics
      `
    },
    {
      id: 'css',
      title: 'CSS',
      description: 'Styling the web.',
      status: 'required',
      dependsOn: ['html'],
      content: `
# CSS (Cascading Style Sheets)

CSS describes how HTML elements are to be displayed on screen, paper, or in other media.

## Topics
- Box Model
- Flexbox
- Grid
- Responsive Design
      `
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      description: 'Making the web interactive.',
      status: 'required',
      dependsOn: ['css'],
      content: `
# JavaScript

JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
      `
    },
    {
      id: 'react',
      title: 'React',
      description: 'A JavaScript library for building user interfaces.',
      status: 'required',
      dependsOn: ['javascript'],
      content: `
# React

React is a free and open-source front-end JavaScript library for building user interfaces based on components.
      `
    }
  ]
};

export const startupRoadmap: Roadmap = {
  id: 'startup-journey',
  title: 'Startup Journey',
  description: 'From idea to exit: A roadmap for entrepreneurs.',
  category: 'Business',
  level: 'Intermediate',
  nodes: [
    {
      id: 'idea',
      title: 'Ideation',
      description: 'Finding a problem worth solving.',
      status: 'required',
      content: `
# Ideation

Great startups start with a problem, not a solution.

## Techniques
- **Mom Test**: How to talk to customers & learn if your business is a good idea.
- **Market Research**: Total Addressable Market (TAM).
      `
    },
    {
      id: 'validation',
      title: 'Validation',
      description: 'Proving people want your solution.',
      status: 'required',
      dependsOn: ['idea'],
      content: `
# Validation

Before building, sell.

- Landing Page MVP
- Pre-sales
- Customer Interviews
      `
    },
    {
      id: 'mvp',
      title: 'MVP Build',
      description: 'Minimum Viable Product.',
      status: 'required',
      dependsOn: ['validation'],
      content: `
# MVP

Build the smallest thing that solves the problem.
      `
    },
    {
      id: 'launch',
      title: 'Launch',
      description: 'Go to market strategy.',
      status: 'advanced',
      dependsOn: ['mvp'],
      content: '# Launch\n\nShowtime.'
    }
  ]
};

export const cvEntrepreneurRoadmap: Roadmap = {
  id: 'empreendedor-cv',
  title: 'Empreendedor em Cabo Verde',
  description: 'Guia prático para criar e formalizar empresas em Cabo Verde.',
  category: 'Business',
  level: 'Intermediate',
  nodes: [
    {
      id: 'ideia',
      title: 'Ideia de Negócio',
      description: 'Definir o conceito e validar o mercado.',
      status: 'completed',
      content: `
# Ideia de Negócio

Tudo começa com uma ideia. Mas uma ideia só tem valor se resolver um problema real.

## Passos
1. Identificar um problema.
2. Pensar numa solução.
3. Testar se as pessoas pagariam por ela.
      `
    },
    {
      id: 'nif',
      title: 'Obter NIF',
      description: 'Número de Identificação Fiscal.',
      status: 'required',
      dependsOn: ['ideia'],
      content: `
# NIF (Número de Identificação Fiscal)
O primeiro passo formal é obter o NIF nas Finanças (Casa do Cidadão ou Repartição de Finanças).

**Documentos necessários:**
- BI ou Passaporte.
- Comprovativo de morada.
      `
    },
    {
      id: 'nome-comercial',
      title: 'Certificado de Admissibilidade',
      description: 'Reservar o nome da empresa.',
      status: 'required',
      dependsOn: ['ideia'],
      content: `
# Certificado de Admissibilidade de Firma
Verificar se o nome da empresa está disponível e reservá-lo. Feito na Conservatória do Registo Comercial.
      `
    },
    {
      id: 'registo-empresa',
      title: 'Registo Comercial',
      description: 'Empresa no Dia ou Registo Tradicional.',
      status: 'required',
      dependsOn: ['nif', 'nome-comercial'],
      content: `
# Registo da Empresa

Pode ser feito através do serviço "Empresa no Dia" na Casa do Cidadão.

## Tipos de Sociedade
- **Unipessoal**: Um único sócio.
- **Por Quotas (Lda)**: Dois ou mais sócios.
- **S.A.**: Sociedade Anónima (estruturas maiores).
      `
    },
    {
      id: 'licenciamento',
      title: 'Licenciamento Municipal',
      description: 'Alvará de funcionamento.',
      status: 'required',
      dependsOn: ['registo-empresa'],
      content: `
# Licenciamento
Dependendo da atividade (restauração, comércio, turismo), é necessário obter licenças na Câmara Municipal.
      `
    },
    {
      id: 'inps',
      title: 'Inscrição INPS',
      description: 'Segurança Social.',
      status: 'required',
      dependsOn: ['registo-empresa'],
      content: `
# INPS
Inscrever a empresa e os trabalhadores na Previdência Social. Obrigatório por lei.
      `
    },
    {
      id: 'contabilidade',
      title: 'Contabilidade Organizada',
      description: 'Obrigatoriedade fiscal.',
      status: 'advanced',
      dependsOn: ['registo-empresa'],
      content: `
# Contabilidade
Contratar um contabilista certificado (TOC) para garantir o cumprimento das obrigações fiscais mensais e anuais.
      `
    },
    {
      id: 'financiamento',
      title: 'Financiamento',
      description: 'Pró Empresa, Banca, Microcrédito.',
      status: 'optional',
      dependsOn: ['registo-empresa'],
      content: `
# Fontes de Financiamento em CV
- **Pró Empresa**: Programas de fomento.
- **Banca Comercial**: Crédito ao investimento.
- **Microcrédito**: Pequenos montantes.
      `
    },
    {
      id: 'lancar',
      title: 'Lançamento',
      description: 'Abrir portas.',
      status: 'in-progress',
      dependsOn: ['licenciamento', 'inps'],
      content: '# Lançamento\n\nEstá na hora de abrir as portas e vender!'
    }
  ]
};

export const mockRoadmaps: Roadmap[] = [frontendRoadmap, startupRoadmap, cvEntrepreneurRoadmap];
