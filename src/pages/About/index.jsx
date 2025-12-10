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

        Sou desenvolvedora Front-end formada em Análise e Desenvolvimento de Sistemas pelo IFRO e atuo na área desde 2021. Trabalhei em plataformas SaaS e produtos digitais de grande escala, sempre focada em criar interfaces consistentes, performáticas e alinhadas às necessidades dos usuários.

        <br />
        <br />

        Na Convenia, plataforma de soluções para RH e DP, contribuí com melhorias e correções em funcionalidades como PDI, Benefícios e Relatórios, trabalhando 100% no front-end com Vue.js. Também colaborei na cobertura de testes unitários e de integração, na criação e documentação de componentes globais com Storybook e validei entregas em instâncias AWS EC2 antes do deploy.

        <br />
        <br />

        Além disso, na Explicaê, participei do desenvolvimento de funcionalidades que impactavam alunos e professores, como e-commerce, gamificação e um novo SaaS administrativo. Além de melhorias contínuas em módulos como simulados, tira-dúvidas, videoaulas e apostilas. Atuei principalmente com Vue.js 2/3 + TypeScript e Nuxt.js, e também tive contato com o backend criando endpoints em Node.js e integrando com MySQL e MongoDB.

        <br />
        <br />

        Trabalhar em equipe, aprender e contribuir com soluções bem estruturadas sempre fizeram parte da minha rotina. Busco continuar evoluindo como desenvolvedora, criando produtos que causem impacto real no dia a dia das pessoas!
      </p>
    </div>
  )
}

export default About