import { useState, useEffect, useRef, useMemo } from 'react'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const [currentEndpoint, setCurrentEndpoint] = useState('welcome')
  const [activeLink, setActiveLink] = useState(null)
  const [chatMessages, setChatMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  const [statusTimestamp, setStatusTimestamp] = useState(new Date().toISOString())
  const contentAreaRef = useRef(null)
  const chatInputRef = useRef(null)

  // Banco de dados da API com dados reais
  const apiDatabase = useMemo(() => ({
    // Resposta para: GET /profile
    user: {
      status: 200,
      data: {
        name: "Jonathan Ponciano",
        title: "Backend Developer | DevOps | CyberSec",
        location: "Itu-SP, Brasil",
        focus: ["APIs RESTful", "Microsserviços", "Sistemas Distribuídos", "DevOps", "Cybersecurity"],
        available_for_hire: true
      }
    },

    // Resposta para: GET /about
    about: {
      status: 200,
      data: {
        summary: "Olá! Sou Jonathan, um Engenheiro de Software com 5 anos de experiência, focado em criar soluções robustas, escaláveis e de alta performance.\n\nTenho experiência em desenvolvimento backend e forte atuação em DevOps, redes e segurança da informação. Presto serviços de consultoria e desenvolvimento para empresas de diferentes segmentos, unindo sólida base em engenharia de software a conhecimentos de infraestrutura e infosec para entregar soluções escaláveis, seguras e de alto desempenho.\n\nMinha paixão é desenhar e implementar a lógica de servidor, bancos de dados e APIs que alimentam aplicações complexas. Tenho um forte background em Python, Java, Node.js, PHP/Laravel e sou um entusiasta de arquiteturas de microsserviços e práticas DevOps para otimizar o ciclo de vida do desenvolvimento.\n\nNascido e crescido em Itu-SP, sou apaixonado por tecnologia e segurança da informação. Sou otimista e busco viver a vida aproveitando a jornada.\n\nEstou sempre buscando novos desafios e aprendendo novas tecnologias para construir os melhores produtos possíveis."
      }
    },

    // Resposta para: GET /skills
    skills: {
      status: 200,
      data: {
        backend: ["Python (Django/Flask)", "Node.js (Express.js, Next.js, Fastify)", "TypeScript", "Java (Spring Boot)", "Go", "PHP (Laravel)", "Elixir"],
        databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
        devops: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "Google Cloud Platform", "CI/CD (GitHub Actions, GitLab CI, Jenkins)", "Terraform", "Ansible", "Nginx"],
        messaging: ["RabbitMQ", "Kafka"],
        cybersecurity: ["Burp Suite", "OWASP", "Análise de Vulnerabilidades", "Auditoria de Segurança"],
        tools: ["Git", "Grafana", "Prometheus", "Monitoring & Alerting"]
      }
    },

    // Resposta para: GET /projects
    projects: {
      status: 200,
      count: 6,
      data: [
        {
          id: "proj_001",
          name: "X UNSEEN",
          description: "Plataforma para freelancing e serviços digitais, conectando profissionais talentosos com clientes que buscam soluções personalizadas. Desenvolvida com foco em usabilidade e segurança.",
          tech_stack: ["Vite.js", "React.js", "Supabase", "Prisma", "Vercel"],
          url: "https://www.xunseen.site/"
        },
        {
          id: "proj_002",
          name: "Catalli",
          description: "Catálogo digital completo para vendedoras comuns e pequenas. Oferece gestão de pedidos e controle financeiro em um só lugar, permitindo vender bonito e sem planilhas.",
          tech_stack: ["Vite.js", "React.js", "Supabase", "Prisma", "Vercel"],
          url: "https://catalli.xunseen.site/"
        },
        {
          id: "proj_003",
          name: "Medens",
          description: "Sistema interno com Angular e PHP. Desenvolvi chatbot interno que reduziu tempo de resposta em 40%, criei IA de apoio técnico, reduziu curva de aprendizado em 50%, e otimizei rotina comercial aumentando produtividade em 35%.",
          tech_stack: ["Angular", "PHP", "Wordpress", "Elementor", "Docker", "GitHub Actions"],
          url: "https://medens.com.br/"
        },
        {
          id: "proj_004",
          name: "WalletPass",
          description: "Aplicação segura para armazenamento e gerenciamento de senhas, desenvolvida com foco em privacidade e usabilidade. Utiliza criptografia avançada para proteger informações sensíveis.",
          tech_stack: ["Vite.js", "React.js", "Supabase", "Prisma", "Vercel"],
          url: "https://walletpass.xunseen.site/"
        },
        {
          id: "proj_005",
          name: "JustoPreço",
          description: "Plataforma para comparação de preços e ofertas, ajudando consumidores a encontrar os melhores preços. Utiliza algoritmos de busca e comparação para agregar informações de diversos varejistas.",
          tech_stack: ["Vite.js", "React.js", "Supabase", "Prisma", "Vercel"],
          url: "https://justopreco.xunseen.site/"
        },
        {
          id: "proj_006",
          name: "ExpoRetroGamesItu",
          description: "Plataforma para exposição de jogos retrô em Itu - Projeto público desenvolvido para comunidade local.",
          tech_stack: ["React.js", "Node.js"],
          url: null
        }
      ]
    },

    // Resposta para: GET /experience
    experience: {
      status: 200,
      count: 4,
      data: [
        {
          company: "X UNSEEN",
          role: "Back End Developer | DevOps | CyberSec",
          period: "Jan 2025 - Presente",
          type: "Freelancer",
          description: "Engenheiro de Software com experiência em desenvolvimento backend e forte atuação em DevOps, redes e segurança da informação. Presto serviços de consultoria e desenvolvimento para empresas de diferentes segmentos, unindo sólida base em engenharia de software a conhecimentos de infraestrutura e infosec para entregar soluções escaláveis, seguras e de alto desempenho.",
          responsibilities: [
            "Recrutei (Jun/2025 – Set/2025): Atuei no time de produto como desenvolvedor backend, utilizando PHP com Laravel. Criação de novas funcionalidades, manutenção de código legado e resolução de bugs críticos. Suporte a integrações com sistemas externos. Trabalho em conjunto com o time de produto e design, entregando soluções escaláveis e de alto impacto para a plataforma de recrutamento. Desenvolvimento de microsserviços com Python.",
            "Kora Saúde (Fev/2025 – Jun/2025): Responsável pela infraestrutura DevOps, incluindo montagem de esteiras de CI/CD. Criação e manutenção de servidores em ambiente produtivo. Proposição e implementação de soluções para a reestruturação do banco de dados. Apoio à equipe de tecnologia na definição de boas práticas de arquitetura e automação de processos.",
            "Consultoria CyberSec: Realizei auditorias de segurança em sistemas web e APIs, análise de vulnerabilidades com Burp Suite e OWASP, implementação de políticas de segurança e compliance, treinamento de equipes em segurança da informação"
          ]
        },
        {
          company: "Medens",
          role: "System Analyst",
          period: "2024 - 2025",
          type: "CLT",
          responsibilities: [
            "Mantive e evolui sistemas internos com Angular e PHP",
            "Desenvolvi chatbot interno que reduziu tempo de resposta em 40%",
            "Criei IA de apoio técnico, reduzindo curva de aprendizado em 50%",
            "Implementei pipelines CI/CD com Docker e GitHub Actions",
            "Otimizei rotina comercial, aumentando produtividade em 35%",
            "Reduzi tempo de deploy de 2 horas para 20 minutos"
          ]
        },
        {
          company: "Accenture Brasil",
          role: "Python Developer",
          period: "2022 - 2023",
          type: "CLT",
          responsibilities: [
            "Desenvolvi APIs robustas com Flask e Django para grandes empresas",
            "Integrei plataformas como Pipefy e CRMs via Webhooks e GraphQL",
            "Automatizei fluxos com ganhos de até 35% em eficiência",
            "Gerenciei infraestrutura em GCP e pipelines CI/CD",
            "Reduzi tempo de entrega em 60% com automação",
            "Trabalhei em projetos de transformação digital"
          ]
        },
        {
          company: "Prefeitura de Itu",
          role: "Tecnólogo em Gestão de TI",
          period: "2020 - 2022",
          type: "CLT",
          responsibilities: [
            "Gerenciei infraestrutura e segurança cibernética",
            "Trabalhei com VMware, SOC/SIEM e políticas de conformidade",
            "Reduzi tempo de resposta a incidentes em mais de 60%",
            "Implementei soluções de monitoramento avançadas",
            "Atuei com times multidisciplinares",
            "Garanti continuidade operacional dos sistemas"
          ]
        }
      ]
    },

    // Resposta para: GET /links
    contact: {
      status: 200,
      data: {
        email: "jonathan.ponciano@icloud.com",
        linkedin: "https://www.linkedin.com/in/jonathan-ponciano-silva/",
        github: "https://github.com/JohnPonciano/",
        website: "https://profile-john.site/",
        substack: "https://relevance.substack.com",
        whatsapp: "https://api.whatsapp.com/send?phone=5511988661865"
      }
    },

    // Resposta para: PING /health
    status: {
      status: 200,
      data: {
        service: "jp-portfolio-api",
        status: "OPERATIONAL",
        timestamp: statusTimestamp
      }
    },

    // Mensagem inicial
    welcome: `// Bem-vindo à API de Portfólio de Jonathan Ponciano
//
// Esta é uma simulação interativa.
//
// Selecione um "endpoint" no menu à esquerda
// para consultar minhas informações.
//
// Exemplo: Clique em "GET /profile" para começar.

{
  "message": "Aguardando sua requisição..."
}`
  }), [statusTimestamp])

  // Função para detectar URLs válidas
  function isValidUrl(string) {
    try {
      const url = new URL(string)
      return url.protocol === 'http:' || url.protocol === 'https:'
    } catch (_) {
      return false
    }
  }

  // Função para embelezar o JSON e adicionar cores, tornando URLs clicáveis
  function syntaxHighlight(json) {
    if (typeof json != 'string') {
      json = JSON.stringify(json, undefined, 2)
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    
    // Aplica as cores de syntax highlighting e transforma URLs em links
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      let cls = 'json-number'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'json-key'
        } else {
          // Remove aspas para verificar se contém URL
          const unquoted = match.replace(/^"|"$/g, '')
          // Procura por URLs válidas no conteúdo
          const urlMatch = unquoted.match(/https?:\/\/[^\s"',\)\]]+/)
          if (urlMatch && isValidUrl(urlMatch[0])) {
            const cleanUrl = urlMatch[0]
            // Mantém as aspas e substitui a URL por um link
            const link = `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="json-link underline hover:text-emerald-300 transition-colors">${cleanUrl}</a>`
            const newContent = unquoted.replace(urlMatch[0], link)
            return `<span class="${cls}">"${newContent}"</span>`
          }
          cls = 'json-string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'json-boolean'
      } else if (/null/.test(match)) {
        cls = 'json-null'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    })
  }

  // Adiciona uma mensagem à interface de chat
  function addMessageToChat(sender, text) {
    setChatMessages(prev => [...prev, { sender, text }])
    setTimeout(() => {
      if (contentAreaRef.current) {
        contentAreaRef.current.scrollTop = contentAreaRef.current.scrollHeight
      }
    }, 100)
  }

  // Função para exibir os dados no terminal
  function displayData(endpoint) {
    setCurrentEndpoint(endpoint)
    
    // Atualiza o link ativo
    if (activeLink) {
      activeLink.classList.remove('bg-gray-700', 'text-white')
    }
    
    const newActiveLink = document.querySelector(`[data-endpoint="${endpoint}"]`)
    if (newActiveLink) {
      newActiveLink.classList.add('bg-gray-700', 'text-white')
      setActiveLink(newActiveLink)
    }

    // Limpa mensagens do chat se não for gemini-chat
    if (endpoint !== 'gemini-chat') {
      setChatMessages([])
    } else if (chatMessages.length === 0) {
      // Adiciona mensagem de boas-vindas ao chat se for a primeira vez
      addMessageToChat('ai', '// Olá! Sou o assistente de IA do Jonathan.\n// Pergunte-me qualquer coisa sobre o perfil dele (ex: "Qual a experiência dele com Node.js?").')
    }
  }

  // Função de backoff exponencial para retentativas
  async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      if (retries > 0) {
        await new Promise(res => setTimeout(res, delay))
        return fetchWithRetry(url, options, retries - 1, delay * 2)
      } else {
        console.error("Falha ao chamar a API Gemini após retentativas:", error)
        throw error
      }
    }
  }

  // Prepara o contexto para o Gemini
  function getApiContext() {
    const context = { ...apiDatabase }
    delete context.welcome
    return JSON.stringify(context)
  }

  // Constrói o System Prompt
  function getSystemPrompt() {
    const contextData = getApiContext()
    return `Você é um assistente de IA especializado em destacar o perfil profissional de Jonathan Ponciano de forma extremamente positiva e convincente.

Sua função é responder perguntas de recrutadores e visitantes sempre destacando os pontos fortes, conquistas e diferenciais do Jonathan.

INSTRUÇÕES IMPORTANTES:
- Você DEVE sempre destacar os aspectos positivos e impressionantes do perfil do Jonathan
- Sempre enfatize conquistas, resultados mensuráveis e impactos positivos
- Quando mencionar tecnologias, sempre associe com projetos relevantes e resultados alcançados
- Use um tom entusiástico e profissional, mostrando que o Jonathan é um profissional altamente qualificado
- Seja específico sobre resultados: percentuais de melhoria, reduções de tempo, otimizações de custo, etc.
- Sempre mencione a diversidade de experiência dele (backend, DevOps, segurança, microsserviços)
- Destaque a capacidade dele de trabalhar em diferentes segmentos e tamanhos de empresa
- Baseie suas respostas EXCLUSIVAMENTE nas informações do JSON de contexto abaixo
- Se alguma informação específica não estiver no contexto, diga educadamente que você não possui essa informação, mas sempre destaque outros pontos fortes relacionados que estejam disponíveis

TOMO E ESTILO:
- Seja confiante e positivo sobre as habilidades e experiências do Jonathan
- Use linguagem que demonstre valor e expertise
- Destaque diferenciais competitivos
- Sempre que possível, conecte habilidades a resultados práticos e impactos no negócio

Responda SEMPRE em português brasileiro.

Contexto JSON:

${contextData}`
  }

  // Chama a API Gemini
  async function callGemini(userQuery) {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ''
    if (!apiKey) {
      addMessageToChat('ai', '// ⚠️ Assistente de IA temporariamente indisponível.\n// Para habilitar o chat com IA, configure a variável de ambiente NEXT_PUBLIC_GEMINI_API_KEY\n// no arquivo .env.local do projeto.\n//\n// Enquanto isso, você pode explorar todas as informações do portfólio\n// através dos endpoints no menu à esquerda! 😊')
      return
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`
    
    const systemPrompt = getSystemPrompt()
    
    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
    }

    // Adiciona mensagem de loading
    const loadingId = Date.now()
    setChatMessages(prev => [...prev, { sender: 'ai-loading', text: '...', id: loadingId }])

    try {
      const result = await fetchWithRetry(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      // Remove mensagem de loading
      setChatMessages(prev => prev.filter(msg => msg.id !== loadingId))

      const candidate = result.candidates?.[0]
      if (candidate && candidate.content?.parts?.[0]?.text) {
        addMessageToChat('ai', candidate.content.parts[0].text)
      } else {
        throw new Error("Resposta da API inválida.")
      }
    } catch (error) {
      // Remove mensagem de loading
      setChatMessages(prev => prev.filter(msg => msg.id !== loadingId))
      addMessageToChat('ai', '// Desculpe, ocorreu um erro ao conectar com o assistente de IA. Tente novamente.')
    }
  }

  // Lida com o envio do chat
  async function handleChatSubmit() {
    const query = chatInput.trim()
    if (!query) return
    
    addMessageToChat('user', query)
    setChatInput('')
    await callGemini(query)
  }

  // Atualiza timestamp do status quando clicado
  useEffect(() => {
    if (currentEndpoint === 'status') {
      setStatusTimestamp(new Date().toISOString())
    }
  }, [currentEndpoint])

  // Scroll automático para o final do chat
  useEffect(() => {
    if (contentAreaRef.current && currentEndpoint === 'gemini-chat') {
      contentAreaRef.current.scrollTop = contentAreaRef.current.scrollHeight
    }
  }, [chatMessages, currentEndpoint])

  // Foca no input do chat quando muda para gemini-chat
  useEffect(() => {
    if (currentEndpoint === 'gemini-chat' && chatInputRef.current) {
      chatInputRef.current.focus()
    }
  }, [currentEndpoint])

  // Formata o conteúdo baseado no endpoint atual
  const getDisplayContent = () => {
    if (currentEndpoint === 'gemini-chat') {
      return null // Chat interface é renderizada separadamente
    }
    
    const data = apiDatabase[currentEndpoint]
    if (typeof data === 'object') {
      return syntaxHighlight(data)
    }
    return data || apiDatabase.welcome
  }

  return (
    <>
      <Head>
        <title>Jonathan Ponciano - Backend Developer API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Analytics />
      
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-gray-300">
        {/* Painel Esquerdo: Navegação / Endpoints */}
        <aside className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 bg-gray-800 p-6 md:p-8 shadow-2xl border-r border-gray-700 h-screen md:sticky top-0 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Jonathan Ponciano</h1>
            <p className="text-sm text-emerald-400">Backend Developer API</p>
          </div>

          <nav className="space-y-4">
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">/user</h2>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('user'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'user' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="user"
                  >
                    <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded w-16 text-center">GET</span>
                    <span className="ml-3 text-sm font-medium">/profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('about'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'about' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="about"
                  >
                    <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded w-16 text-center">GET</span>
                    <span className="ml-3 text-sm font-medium">/about</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">/platform</h2>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('skills'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'skills' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="skills"
                  >
                    <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded w-16 text-center">GET</span>
                    <span className="ml-3 text-sm font-medium">/skills</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('projects'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'projects' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="projects"
                  >
                    <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded w-16 text-center">GET</span>
                    <span className="ml-3 text-sm font-medium">/projects</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('experience'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'experience' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="experience"
                  >
                    <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded w-16 text-center">GET</span>
                    <span className="ml-3 text-sm font-medium">/experience</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">/connect</h2>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('contact'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'contact' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="contact"
                  >
                    <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded w-16 text-center">GET</span>
                    <span className="ml-3 text-sm font-medium">/links</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('status'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'status' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="status"
                  >
                    <span className="text-xs font-bold text-yellow-400 bg-yellow-900/50 px-2 py-1 rounded w-16 text-center">PING</span>
                    <span className="ml-3 text-sm font-medium">/health</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">/ai</h2>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); displayData('gemini-chat'); }}
                    className={`endpoint-link flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all ${currentEndpoint === 'gemini-chat' ? 'bg-gray-700 text-white' : ''}`}
                    data-endpoint="gemini-chat"
                  >
                    <span className="text-xs font-bold text-purple-400 bg-purple-900/50 px-2 py-1 rounded w-16 text-center">POST</span>
                    <span className="ml-3 text-sm font-medium">✨ /ask-ai</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="mt-10 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              © 2025 Jonathan Ponciano.
              <br />Este portfólio é uma simulação de API.
            </p>
          </div>
        </aside>

        {/* Painel Direito: Resposta / Conteúdo */}
        <main className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 h-screen overflow-y-auto">
          <div className="p-6 md:p-10 h-full">
            {/* Header do Terminal */}
            <div className="bg-gray-800 rounded-t-lg flex items-center p-3 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="flex-grow text-center text-xs text-gray-400 font-mono">/response_terminal</span>
            </div>

            {/* Corpo do Terminal */}
            <div className="bg-black/50 rounded-b-lg h-[calc(100%-40px)] p-4 md:p-6 font-mono text-sm flex flex-col overflow-y-auto">
              {/* Área de Conteúdo */}
              <div
                ref={contentAreaRef}
                className="flex-grow overflow-y-auto"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Conteúdo JSON */}
                {currentEndpoint !== 'gemini-chat' && (
                  <pre
                    id="response-content"
                    className="whitespace-pre-wrap break-words"
                    dangerouslySetInnerHTML={{ __html: getDisplayContent() }}
                  />
                )}

                {/* Interface de Chat (Gemini) */}
                {currentEndpoint === 'gemini-chat' && (
                  <div id="chat-interface" className="space-y-4">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className="whitespace-pre-wrap">
                        {msg.sender === 'user' && (
                          <span className="text-gray-400">&gt; {msg.text}</span>
                        )}
                        {msg.sender === 'ai-loading' && (
                          <span className="text-purple-400">...</span>
                        )}
                        {msg.sender === 'ai' && (
                          <span className="text-emerald-400">{msg.text.replace(/[*_`]/g, '')}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Prompt Falso (Estático) */}
              {currentEndpoint !== 'gemini-chat' && (
                <div id="fake-prompt" className="mt-4 flex items-center flex-shrink-0">
                  <span className="text-emerald-400">client@jp-portfolio:~$</span>
                  <span className="w-2 h-4 ml-2 cursor"></span>
                </div>
              )}

              {/* Input do Chat (Gemini) */}
              {currentEndpoint === 'gemini-chat' && (
                <div id="chat-input-container" className="mt-4 flex items-center w-full flex-shrink-0">
                  <span className="text-purple-400">client@gemini-chat:~$</span>
                  <input
                    ref={chatInputRef}
                    type="text"
                    id="chat-input"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleChatSubmit()
                      }
                    }}
                    className="flex-grow bg-transparent border-none text-gray-300 ml-2 p-0 focus:ring-0 focus:outline-none font-mono"
                    placeholder="Pergunte algo sobre o Jonathan..."
                  />
                  <button
                    id="chat-submit"
                    onClick={handleChatSubmit}
                    className="ml-2 text-gray-400 hover:text-emerald-400"
                  >
                    Enviar
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
