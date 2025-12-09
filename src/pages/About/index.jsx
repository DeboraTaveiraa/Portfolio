import ArrowBack from '../../components/ArrowBack';
import './style.css'

function About() {
  const currentAge = new Date().getFullYear() - 1999;

  return (
    <div className="about">
      <ArrowBack />

      <h3 className="about__title">Sobre Mim</h3>

      <p className="about__description">
        Olá, me chamo Débora Taveira, tenho <span id="years">{currentAge}</span> anos e atualmente moro em São José, Santa Catarina.

        <br />
        <br />
        
        Formada em Análise e Desenvolvimento de Sistemas pelo IFRO, atuo como desenvolvedora web desde 2021. Nesse período, contribuí para diversos projetos em uma EdTech, onde participei do desenvolvimento de novas funcionalidades, correção de bugs e melhorias contínuas na plataforma de ensino, garantindo uma experiência única para os alunos. Também atuei em sistemas administrativos internos, projetos B2B, e-commerce e otimização do SEO.
        
        <br />
        <br />
        
        Minha atuação principal vem sendo no FrontEnd, utilizando HTML, CSS, JavaScript, Vue.js e TypeScript. E sempre que possível colaboro no BackEnd com Node.js, desenvolvendo APIs RESTful e manipulando bancos de dados como MySQL, MongoDB e Redis.
        
        <br />
        <br />
        
        Há mais de três anos trabalho home office, colaborando com equipes de design e desenvolvimento, desde o levantamento de requisitos até a implementação, trabalhando com metodologias ágeis como Scrum e Kanban.
        
        <br />
        <br />
        
        Como desenvolvedora, sempre busco aplicar boas práticas de programação, como código limpo, legível, reutilizável e utilização da metodologia BEM.
        
        <br />
        <br />
        
        Em 2024, tive oportunidades de expandir minha atuação para o design, uma área que sempre me despertou interesse. Utilizando o Figma, desenvolvi layouts responsivos para web, o que tem me permitido contribuir para soluções ainda mais completas e intuitivas.
      </p> 
    </div>
  )
}

export default About