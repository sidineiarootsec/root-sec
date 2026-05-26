export default function App() {
  return (
    <main className="container">
      <header className="hero">
        <div className="badge">ACESSO LIBERADO</div>
        <h1>ROOT <span>SEC</span></h1>
        <p>
          Tecnologia, segurança e performance para levar seu mundo ao próximo nível.
        </p>

        <div className="buttons">
          <button>VER SERVIÇOS</button>
          <button className="outline">ENTRAR EM CONTATO</button>
        </div>
      </header>

      <section className="cards">
        <div className="card">
          <h2>Segurança Digital</h2>
          <p>Proteção avançada para dados e sistemas.</p>
        </div>

        <div className="card">
          <h2>Suporte Técnico</h2>
          <p>Assistência especializada para equipamentos.</p>
        </div>

        <div className="card">
          <h2>Cloud & Backup</h2>
          <p>Seus dados protegidos na nuvem.</p>
        </div>
      </section>
    </main>
  )
}
