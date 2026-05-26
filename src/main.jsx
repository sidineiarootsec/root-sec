import React from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Terminal,
  Cloud,
  MessageCircle,
  Cpu,
  Lock,
  Zap,
  Globe
} from 'lucide-react'
import './style.css'

const services = [
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    text: 'Proteção premium para empresas, dados e sistemas.'
  },
  {
    icon: Terminal,
    title: 'Infraestrutura',
    text: 'Performance, monitoramento e estabilidade.'
  },
  {
    icon: Cloud,
    title: 'Cloud & Backup',
    text: 'Backup seguro, nuvem e recuperação de dados.'
  },
  {
    icon: Cpu,
    title: 'Automação',
    text: 'Soluções inteligentes para acelerar processos.'
  }
]

function CodeRain() {
  const lines = [
    'root@sec:~# scanning network...',
    'firewall status: protected',
    'access token verified',
    'encrypting packets...',
    'system integrity: OK',
    'threat monitor enabled',
    'secure shell connected',
    'backup routine completed',
    'auth layer active',
    'ROOT SEC // ONLINE'
  ]

  return (
    <div className="code-rain">
      {lines.map((line, index) => (
        <span
          key={index}
          style={{
            top: `${index * 10 + 3}%`,
            animationDelay: `${index * 0.45}s`,
            animationDuration: `${11 + index * 0.8}s`
          }}
        >
          {line}
        </span>
      ))}
    </div>
  )
}

function App() {
  return (
    <main className="page">
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      <CodeRain />

      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <ShieldCheck size={28} />
          </div>
          <div>
            <strong>ROOT SEC</strong>
            <small>Security System</small>
          </div>
        </div>

        <a className="nav-whats" href="https://wa.me/5593981077977">
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </header>

      <section className="hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="tag">ROOT SEC • SECURITY SYSTEM ONLINE</div>

          <h1>
            NEXT LEVEL
            <span> SECURITY</span>
          </h1>

          <p>
            Tecnologia premium, segurança digital e soluções inteligentes
            para empresas modernas.
          </p>

          <div className="buttons">
            <a className="primary" href="#servicos">
              Explorar serviços
            </a>

            <a className="secondary" href="https://wa.me/5593981077977">
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          className="terminal-card"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <div className="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">
            <div className="line">root@sec: initializing system...</div>
            <div className="line delay1">bypassing firewall...</div>
            <div className="line delay2">loading security modules...</div>
            <div className="line delay3 green">ACCESS GRANTED</div>
          </div>

          <div className="shield-orb">
            <Lock size={90} />
          </div>
        </motion.div>
      </section>

      <section id="servicos" className="services">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <small>SERVIÇOS</small>
          <h2>Soluções inteligentes</h2>
          <p>Segurança, cloud, infraestrutura e automação premium.</p>
        </motion.div>

        <div className="cards">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                className="card"
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
              >
                <div className="icon">
                  <Icon size={32} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="stats">
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Globe size={38} />
          <strong>24/7</strong>
          <span>Monitoramento ativo</span>
        </motion.div>

        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <ShieldCheck size={38} />
          <strong>100%</strong>
          <span>Proteção avançada</span>
        </motion.div>

        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Zap size={38} />
          <strong>Ultra Fast</strong>
          <span>Performance premium</span>
        </motion.div>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
