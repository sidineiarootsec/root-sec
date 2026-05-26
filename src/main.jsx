import React from 'react'
import { createRoot } from 'react-dom/client'
import { ShieldCheck, Monitor, Code2, Cloud, Lock, Zap, Rocket, Coffee, CheckSquare, MessageCircle, Terminal, Wifi, Skull } from 'lucide-react'
import './style.css'

function App() {
  const services = [
    { icon: Terminal, title: 'Segurança Digital', text: 'Proteção avançada para seus dados e sistemas.' },
    { icon: Monitor, title: 'Suporte Técnico', text: 'Assistência especializada para seu equipamento.' },
    { icon: Code2, title: 'Desenvolvimento', text: 'Sites, sistemas e soluções personalizadas.' },
    { icon: Cloud, title: 'Cloud & Backup', text: 'Seus dados seguros na nuvem.' },
    { icon: ShieldCheck, title: 'Pentest & Auditoria', text: 'Análise de vulnerabilidades e melhorias.' },
  ]

  return (
    <main className="page">
      <div className="stars"></div>
      <div className="grid-floor"></div>

      <header className="topbar">
        <div className="brand">
          <div className="logo-box"><Skull size={42}/></div>
          <div>
            <h2>ROOT <span>SEC</span></h2>
            <p>Tecnologia | Segurança | Performance</p>
          </div>
        </div>

        <nav>
          <a>Home</a>
          <a>Serviços</a>
          <a>Sobre</a>
          <a>Portfólio</a>
          <a>Contato</a>
        </nav>

        <a className="whats" href="https://wa.me/5593981077977">
          <MessageCircle size={18}/> WhatsApp
        </a>
      </header>

      <section className="hero">
        <div className="hero-text">
          <div className="access">› ACESSO LIBERADO</div>

          <h1>ROOT <span>SEC</span></h1>
          <p className="subtitle">
            Tecnologia, segurança e performance para levar seu mundo ao próximo nível.
          </p>

          <div className="features">
            <div><ShieldCheck/> Segurança digital</div>
            <div><Zap/> Alta performance</div>
            <div><Code2/> Soluções inteligentes</div>
            <div><Lock/> Privacidade e confiança</div>
          </div>

          <div className="actions">
            <a href="#servicos" className="primary">Ver serviços ›</a>
            <a href="#contato" className="secondary">Entrar em contato ▢</a>
          </div>
        </div>

        <div className="hacker">
          <div className="hood"></div>
          <div className="face">
            <span>×</span><span>×</span>
            <small>▾▾▾</small>
          </div>
          <div className="laptop">
            <Skull size={54}/>
          </div>
          <div className="terminal">
            <p>› ROOT@SEC:~#</p>
            <strong>ACESSO CONCEDIDO</strong>
            <i></i>
          </div>
          <Wifi className="wifi" size={34}/>
        </div>
      </section>

      <section id="servicos" className="cards">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <div className="card" key={i}>
              <Icon className="card-icon" size={42}/>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a>Saiba mais ›</a>
            </div>
          )
        })}
      </section>

      <section className="info">
        <div className="checklist">
          <h3><CheckSquare/> Checklist Nerd</h3>
          <p>☑ Tomar café</p>
          <p>☑ Escrever código</p>
          <p>☑ Proteger sistemas</p>
          <p>☑ Resolver problemas</p>
          <p>☑ Repetir infinitamente</p>
          <Coffee className="coffee" size={90}/>
        </div>

        <div className="why">
          <h3>⚙ Por que escolher a ROOT SEC?</h3>
          <p>✓ Soluções modernas e seguras</p>
          <p>✓ Atendimento rápido e personalizado</p>
          <p>✓ Tecnologia de ponta</p>
          <p>✓ Foco total em resultado</p>
          <p>✓ Confiança e transparência</p>
        </div>
      </section>

      <footer id="contato" className="footer">
        <div><Rocket/> Performance máxima</div>
        <div><ShieldCheck/> 100% Segurança</div>
        <div><Zap/> Atendimento rápido</div>
        <div><Code2/> Soluções personalizadas</div>
        <div><Lock/> Privacidade garantida</div>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
