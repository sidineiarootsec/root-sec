
import React from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import { ShieldCheck, Terminal, Cloud, MessageCircle, Cpu } from 'lucide-react'
import './style.css'

const cards=[
{icon:ShieldCheck,title:'Cyber Security',text:'Proteção premium para empresas.'},
{icon:Terminal,title:'Infraestrutura',text:'Performance e monitoramento.'},
{icon:Cloud,title:'Cloud & Backup',text:'Seus dados protegidos.'},
{icon:Cpu,title:'Automação',text:'Processos inteligentes e rápidos.'}
]

function App(){
return(
<main className="page">
<div className="bg"></div>

<section className="hero">

<motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}}>
<div className="tag">ROOT SEC • SECURITY SYSTEM</div>

<h1>NEXT LEVEL <span>SECURITY</span></h1>

<p>
Tecnologia premium, segurança digital e soluções inteligentes.
</p>

<div className="buttons">
<a className="primary">EXPLORAR</a>

<a className="secondary" href="https://wa.me/5593981077977">
<MessageCircle size={18}/> WHATSAPP
</a>
</div>
</motion.div>

<motion.div className="glass"
initial={{opacity:0,scale:.8}}
animate={{opacity:1,scale:1}}
transition={{duration:1.2}}>

<div className="terminal">
<div className="line">root@sec: initializing...</div>
<div className="line delay1">bypassing firewall...</div>
<div className="line delay2 green">ACCESS GRANTED</div>
</div>

</motion.div>

</section>

<section className="services">

<div className="title">
<small>SERVIÇOS</small>
<h2>Soluções inteligentes</h2>
</div>

<div className="cards">
{cards.map((card,i)=>{
const Icon=card.icon
return(
<motion.div
key={i}
className="card"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*.15}}
viewport={{once:true}}
>
<div className="icon"><Icon size={32}/></div>
<h3>{card.title}</h3>
<p>{card.text}</p>
</motion.div>
)
})}
</div>

</section>

</main>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode><App/></React.StrictMode>
)
