import type { Locale, Messages } from './types'

export const defaultLocale: Locale = 'en'

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      languageLabel: 'Language',
      localeNames: {
        en: 'English',
        es: 'Spanish',
        pt: 'Portuguese',
      },
    },
    brand: {
      name: 'HiveForge',
      statement: 'HiveForge builds governed AI workflow systems inside client infrastructure, with measurable ROI and operational control.',
    },
    header: {
      nav: {
        solution: 'Solution',
        industries: 'Industries',
        process: 'Process',
        contact: 'Contact',
      },
      cta: 'Book discovery',
    },
    hero: {
      eyebrow: 'Done-for-you AI systems for tech teams',
      title: 'Replace slow internal workflows with agent systems that run inside your infrastructure.',
      description:
        'We do not sell generic AI tooling. We design and deploy custom workflow orchestration systems that reduce turnaround time, lower operational error, and keep your company knowledge versioned and usable.',
      primaryCta: 'Start a project',
      secondaryCta: 'See how it works',
      cardLabel: 'What clients buy',
      cardTitle: 'Replaced workflows',
      cardDescription: 'A process that took days now runs in hours, follows internal rules, and leaves an audit trail.',
      stats: [
        { value: '0', text: 'client data leaves their environment' },
        { value: '80%', text: 'context cost reduction through retrieval-first architecture' },
        { value: '5+', text: 'specialist agents per implementation' },
        { value: '∞', text: 'institutional memory, versioned' },
      ],
    },
    trustStrip: {
      label: 'Best first use case',
      items: ['PR review automation', 'Test generation', 'Commit and release support'],
    },
    offer: {
      eyebrow: 'The offer',
      title: 'Custom orchestration systems for workflows where delay and inconsistency are expensive.',
      description:
        'We study the client workflow, break it into agent responsibilities, connect it to the right tools, and deploy the system inside the client environment. The implementation is the product.',
      highlightsLabel: 'What differentiates the model',
      highlights: [
        'Deploy inside the client environment',
        'Reduce context cost with retrieval-first design',
        'Preserve institutional knowledge in versioned memory',
        'Measure ROI from baseline to day-30 review',
      ],
    },
    architecture: {
      eyebrow: 'Core architecture',
      title: 'Built around a repeatable stack, adapted to each client workflow.',
      pillars: [
        {
          title: 'Multi-agent execution',
          description:
            'An orchestrator routes work to specialist agents for review, testing, implementation, and delivery so each step has a clear owner.',
        },
        {
          title: 'RAG with governed memory',
          description:
            'Agents retrieve only the relevant conventions, tickets, docs, and historical decisions instead of dragging your whole knowledge base into every prompt.',
        },
        {
          title: 'Tool-connected automation',
          description:
            'We connect models to GitHub, Jira, Slack, internal APIs, and databases so the system does work instead of producing isolated text.',
        },
      ],
    },
    industries: {
      eyebrow: 'Where to start',
      title: 'Focus on teams that can understand value quickly and act on it.',
      items: [
        {
          name: 'Software agencies',
          detail:
            'Fast sales cycles, clear workflow pain, and immediate proof through review, test, and release automation.',
        },
        {
          name: 'Product engineering teams',
          detail:
            'Strong fit for teams that need more velocity without adding coordination overhead to every sprint.',
        },
        {
          name: 'Healthcare tech',
          detail:
            'A strong second vertical when privacy and infrastructure control are part of the buying decision.',
        },
      ],
    },
    process: {
      eyebrow: 'Engagement model',
      title: 'One workflow at a time. Baseline first, automation second, ROI review after deployment.',
      steps: [
        'Map the client workflow and identify where time, rework, and human error accumulate.',
        'Design the agent roles, retrieval layer, governance model, and tool integrations around that workflow.',
        'Deploy the system in the client environment and validate against baseline delivery metrics.',
      ],
    },
    contact: {
      eyebrow: 'Next step',
      title: 'Use the landing page to sell the service, then turn the first workflow into the reference implementation.',
      ctaLabel: 'Email us',
      email: 'hello@example.com',
      note: 'Replace the email, connect a form later, and deploy directly to Vercel free tier.',
    },
    footer: {
      navLabel: 'Navigate',
      contactLabel: 'Contact',
      copyright: '© 2026 HiveForge. All rights reserved.',
    },
  },
  es: {
    meta: {
      languageLabel: 'Idioma',
      localeNames: {
        en: 'Inglés',
        es: 'Español',
        pt: 'Portugués',
      },
    },
    brand: {
      name: 'HiveForge',
      statement:
        'HiveForge diseña sistemas de workflows con IA y gobernanza dentro de la infraestructura del cliente, con ROI medible y control operativo.',
    },
    header: {
      nav: {
        solution: 'Solución',
        industries: 'Industrias',
        process: 'Proceso',
        contact: 'Contacto',
      },
      cta: 'Agendar discovery',
    },
    hero: {
      eyebrow: 'Sistemas de IA hechos a medida para equipos técnicos',
      title: 'Reemplaza flujos internos lentos con sistemas de agentes que operan dentro de tu infraestructura.',
      description:
        'No vendemos herramientas genéricas de IA. Diseñamos e implementamos sistemas de orquestación de workflows que reducen tiempos de entrega, bajan errores operativos y mantienen el conocimiento de tu empresa versionado y reutilizable.',
      primaryCta: 'Iniciar proyecto',
      secondaryCta: 'Ver cómo funciona',
      cardLabel: 'Lo que compra el cliente',
      cardTitle: 'Workflows reemplazados',
      cardDescription: 'Un proceso que tardaba días ahora corre en horas, sigue reglas internas y deja trazabilidad.',
      stats: [
        { value: '0', text: 'datos del cliente salen de su entorno' },
        { value: '80%', text: 'reducción del costo de contexto con arquitectura retrieval-first' },
        { value: '5+', text: 'agentes especialistas por implementación' },
        { value: '∞', text: 'memoria institucional versionada' },
      ],
    },
    trustStrip: {
      label: 'Primer caso de uso recomendado',
      items: ['Automatización de PR review', 'Generación de tests', 'Soporte para commits y releases'],
    },
    offer: {
      eyebrow: 'La oferta',
      title: 'Sistemas de orquestación personalizados para workflows donde la demora y la inconsistencia cuestan caro.',
      description:
        'Estudiamos el workflow del cliente, lo dividimos en responsabilidades por agente, lo conectamos con las herramientas correctas y desplegamos el sistema dentro del entorno del cliente. La implementación es el producto.',
      highlightsLabel: 'Qué diferencia este modelo',
      highlights: [
        'Despliegue dentro del entorno del cliente',
        'Menor costo de contexto con diseño retrieval-first',
        'Conocimiento institucional preservado en memoria versionada',
        'ROI medible desde la línea base hasta la revisión del día 30',
      ],
    },
    architecture: {
      eyebrow: 'Arquitectura base',
      title: 'Construido sobre una base repetible, adaptada al workflow de cada cliente.',
      pillars: [
        {
          title: 'Ejecución multiagente',
          description:
            'Un orquestador distribuye el trabajo entre agentes especialistas de revisión, testing, implementación y entrega para que cada etapa tenga un responsable claro.',
        },
        {
          title: 'RAG con memoria gobernada',
          description:
            'Los agentes recuperan solo las convenciones, tickets, documentos y decisiones históricas relevantes en vez de arrastrar toda la base de conocimiento en cada prompt.',
        },
        {
          title: 'Automatización conectada a herramientas',
          description:
            'Conectamos modelos con GitHub, Jira, Slack, APIs internas y bases de datos para que el sistema ejecute trabajo real, no solo genere texto.',
        },
      ],
    },
    industries: {
      eyebrow: 'Dónde empezar',
      title: 'Enfócate en equipos que puedan entender el valor rápido y actuar sobre él.',
      items: [
        {
          name: 'Agencias de software',
          detail:
            'Ciclos comerciales rápidos, fricción clara en el workflow y prueba inmediata con automatización de review, tests y release.',
        },
        {
          name: 'Equipos de producto',
          detail:
            'Buen encaje para equipos que necesitan más velocidad sin agregar más coordinación manual a cada sprint.',
        },
        {
          name: 'Healthtech',
          detail:
            'Un segundo vertical sólido cuando la privacidad y el control de infraestructura forman parte de la decisión de compra.',
        },
      ],
    },
    process: {
      eyebrow: 'Modelo de trabajo',
      title: 'Un workflow a la vez. Primero línea base, después automatización y luego revisión de ROI.',
      steps: [
        'Mapeamos el workflow del cliente e identificamos dónde se acumulan tiempo, retrabajo y error humano.',
        'Diseñamos los roles de agentes, la capa de retrieval, el modelo de gobernanza y las integraciones alrededor de ese workflow.',
        'Desplegamos el sistema en el entorno del cliente y validamos contra métricas base de entrega.',
      ],
    },
    contact: {
      eyebrow: 'Siguiente paso',
      title: 'Usa la landing para vender el servicio y luego convierte el primer workflow en la implementación de referencia.',
      ctaLabel: 'Escríbenos',
      email: 'hello@example.com',
      note: 'Reemplaza el email, conecta un formulario después y despliega directamente en Vercel free tier.',
    },
    footer: {
      navLabel: 'Navegación',
      contactLabel: 'Contacto',
      copyright: '© 2026 HiveForge. Todos los derechos reservados.',
    },
  },
  pt: {
    meta: {
      languageLabel: 'Idioma',
      localeNames: {
        en: 'Inglês',
        es: 'Espanhol',
        pt: 'Português',
      },
    },
    brand: {
      name: 'HiveForge',
      statement:
        'A HiveForge projeta sistemas de workflow com IA e governança dentro da infraestrutura do cliente, com ROI mensurável e controle operacional.',
    },
    header: {
      nav: {
        solution: 'Solução',
        industries: 'Setores',
        process: 'Processo',
        contact: 'Contato',
      },
      cta: 'Agendar discovery',
    },
    hero: {
      eyebrow: 'Sistemas de IA sob medida para equipes de tecnologia',
      title: 'Substitua fluxos internos lentos por sistemas de agentes que operam dentro da sua infraestrutura.',
      description:
        'Não vendemos ferramentas genéricas de IA. Projetamos e implantamos sistemas de orquestração de workflows que reduzem tempo de entrega, diminuem erros operacionais e mantêm o conhecimento da empresa versionado e reutilizável.',
      primaryCta: 'Iniciar projeto',
      secondaryCta: 'Ver como funciona',
      cardLabel: 'O que o cliente compra',
      cardTitle: 'Workflows substituídos',
      cardDescription: 'Um processo que levava dias agora roda em horas, segue regras internas e deixa rastreabilidade.',
      stats: [
        { value: '0', text: 'dados do cliente saem do ambiente dele' },
        { value: '80%', text: 'redução no custo de contexto com arquitetura retrieval-first' },
        { value: '5+', text: 'agentes especialistas por implementação' },
        { value: '∞', text: 'memória institucional versionada' },
      ],
    },
    trustStrip: {
      label: 'Melhor primeiro caso de uso',
      items: ['Automação de PR review', 'Geração de testes', 'Suporte para commits e releases'],
    },
    offer: {
      eyebrow: 'A oferta',
      title: 'Sistemas de orquestração personalizados para workflows em que atraso e inconsistência custam caro.',
      description:
        'Estudamos o workflow do cliente, dividimos em responsabilidades por agente, conectamos às ferramentas certas e implantamos o sistema dentro do ambiente do cliente. A implementação é o produto.',
      highlightsLabel: 'O que diferencia o modelo',
      highlights: [
        'Implantação dentro do ambiente do cliente',
        'Menor custo de contexto com design retrieval-first',
        'Conhecimento institucional preservado em memória versionada',
        'ROI mensurável da linha de base até a revisão de 30 dias',
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura central',
      title: 'Construído sobre uma base repetível, adaptada ao workflow de cada cliente.',
      pillars: [
        {
          title: 'Execução multiagente',
          description:
            'Um orquestrador distribui o trabalho para agentes especialistas de revisão, testes, implementação e entrega para que cada etapa tenha um responsável claro.',
        },
        {
          title: 'RAG com memória governada',
          description:
            'Os agentes recuperam apenas convenções, tickets, documentos e decisões históricas relevantes em vez de arrastar toda a base de conhecimento para cada prompt.',
        },
        {
          title: 'Automação conectada a ferramentas',
          description:
            'Conectamos modelos a GitHub, Jira, Slack, APIs internas e bancos de dados para que o sistema execute trabalho real, não apenas gere texto.',
        },
      ],
    },
    industries: {
      eyebrow: 'Por onde começar',
      title: 'Foque em equipes que consigam entender o valor rapidamente e agir sobre ele.',
      items: [
        {
          name: 'Agências de software',
          detail:
            'Ciclos comerciais rápidos, dor clara no workflow e prova imediata com automação de review, testes e release.',
        },
        {
          name: 'Equipes de produto',
          detail:
            'Ótimo encaixe para times que precisam de mais velocidade sem aumentar a sobrecarga de coordenação em cada sprint.',
        },
        {
          name: 'Healthtech',
          detail:
            'Um segundo vertical forte quando privacidade e controle de infraestrutura fazem parte da decisão de compra.',
        },
      ],
    },
    process: {
      eyebrow: 'Modelo de atuação',
      title: 'Um workflow por vez. Primeiro linha de base, depois automação e então revisão de ROI.',
      steps: [
        'Mapeamos o workflow do cliente e identificamos onde tempo, retrabalho e erro humano se acumulam.',
        'Desenhamos os papéis dos agentes, a camada de retrieval, o modelo de governança e as integrações em torno desse workflow.',
        'Implantamos o sistema no ambiente do cliente e validamos contra métricas iniciais de entrega.',
      ],
    },
    contact: {
      eyebrow: 'Próximo passo',
      title: 'Use a landing page para vender o serviço e depois transforme o primeiro workflow na implementação de referência.',
      ctaLabel: 'Fale com a gente',
      email: 'hello@example.com',
      note: 'Substitua o email, conecte um formulário depois e faça o deploy diretamente na Vercel free tier.',
    },
    footer: {
      navLabel: 'Navegação',
      contactLabel: 'Contato',
      copyright: '© 2026 HiveForge. Todos os direitos reservados.',
    },
  },
}
