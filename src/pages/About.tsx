import {
  Map,
  Heart,
  Users,
  Lightbulb,
  Code,
  Sparkles,
  Github,
  ExternalLink,
  Target,
  Rocket,
  Shield,
  CheckCircle2,
} from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Map,
      title: "Editor Visual de Nós",
      description:
        "Crie e organize tarefas arrastando e soltando elementos na tela com React Flow.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Gestão de Dependências",
      description:
        "Conecte tarefas para estabelecer pré-requisitos e fluxos de trabalho claros.",
      color: "from-slate-500 to-slate-600",
    },
    {
      icon: Code,
      title: "Conteúdo em Markdown",
      description:
        "Adicione descrições ricas e detalhadas para cada nó do seu roadmap.",
      color: "from-blue-600 to-slate-600",
    },
    {
      icon: CheckCircle2,
      title: "Status Personalizáveis",
      description:
        "Marque tarefas como Obrigatórias, Opcionais, Em Progresso ou Concluídas.",
      color: "from-slate-600 to-blue-500",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-900 dark:via-slate-900 dark:to-slate-950 p-12 md:p-16 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Open Source • Feito em Cabo Verde
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Sobre o EmpreendaMap
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Uma ferramenta colaborativa para apoiar empreendedores e startups em
            Cabo Verde
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://github.com/NunoLima10/roadmap-empreendedor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-100 text-blue-600 dark:text-blue-700 font-semibold rounded-xl hover:bg-white/90 dark:hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              Ver no GitHub
            </a>
            <a
              href="/editor"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Começar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="group relative bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/20 p-8 rounded-2xl border border-blue-200/50 dark:border-blue-900/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
              Missão
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Democratizar o acesso a conhecimento estruturado sobre
              empreendedorismo, oferecendo roadmaps claros e práticos.
            </p>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/30 dark:to-blue-950/20 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
              Visão
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Ser a plataforma de referência para empreendedores em Cabo Verde,
              mantida pela comunidade.
            </p>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/20 p-8 rounded-2xl border border-blue-200/50 dark:border-blue-900/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
              Valores
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Colaboração, transparência, simplicidade e impacto real no
              ecossistema empreendedor.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Funcionalidades Principais
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ferramentas poderosas para criar roadmaps completos e interativos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative flex items-start gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 p-12 md:p-16 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              Open Source
            </div>

            <h2 className="text-3xl md:text-5xl font-bold">
              Feito pela Comunidade, <br className="hidden md:block" />
              para a Comunidade
            </h2>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Os conteúdos dos roadmaps são escritos e curados por
              especialistas, membros de instituições e pela comunidade
              empreendedora.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-8 h-8 mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-2">Projeto Gerado por IA</h3>
              <p className="text-white/80 leading-relaxed">
                Este projeto foi desenvolvido com auxílio de IA e necessita de
                revisão humana. Contribuições são essenciais!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Heart className="w-8 h-8 mb-4 text-white" />
              <h3 className="text-xl font-bold mb-2">Contribua Conosco</h3>
              <p className="text-white/80 leading-relaxed">
                Ajude a melhorar o código, adicione testes, corrija bugs e
                evolua esta ferramenta junto conosco.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/NunoLima10/roadmap-empreendedor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-100 text-slate-900 dark:text-slate-950 font-bold rounded-xl hover:bg-white/90 dark:hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Github className="w-5 h-5" />
              Contribuir no GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950/20 rounded-3xl p-8 md:p-12 border border-blue-200/50 dark:border-blue-900/30">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center">
            Arquitetura & Roadmap do Projeto
          </h2>

          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Os roadmaps são armazenados de forma{" "}
              <strong className="text-slate-900 dark:text-slate-100">
                estática no repositório
              </strong>
              , sem dependência de base de dados externa. Esta abordagem garante
              simplicidade, versionamento via Git e facilita contribuições.
            </p>

            <p>
              A ferramenta de edição permite criar roadmaps do zero ou editar
              existentes, exportando em formato JSON para integração manual no
              código-fonte.
            </p>

            <p>
              <strong className="text-slate-900 dark:text-slate-100">
                Visão futura:
              </strong>{" "}
              Manter o modelo de edição simples o suficiente para que pessoas
              sem conhecimentos técnicos consigam criar e atualizar conteúdos
              facilmente.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-500 italic text-center">
              Esta arquitetura representa uma visão inicial e pode ser revista
              conforme o projeto evolui.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
