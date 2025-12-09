import './style.css'
import SimpleCard from '../../components/SimpleCard'

function Home() {
  
  return (
    <section className="cards">
      <SimpleCard title="Sobre/Mim" target="sobre" className="cards__item" />
      <SimpleCard title="Projetos/Pessoais" target="projetos" className="cards__item" />
      <SimpleCard title="Experiência/Profissional" target="experiencia" className="cards__item" />
      <SimpleCard title="Habilidades/Técnicas" target="habilidades" className="cards__item" />
    </section>
  )
}

export default Home