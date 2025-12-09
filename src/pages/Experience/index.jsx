import ArrowBack from '../../components/ArrowBack';
import ExperienceCard from '../../components/ExperienceCard';

import './style.css'

function Experience() {
  const experiences = [
    {
      companyLogo: "https://media.glassdoor.com/sqll/1342558/convenia-squareLogo-1752846672547.png",
      companyName: "Convenia",
      role: "Desenvolvedora FrontEnd",
      period: "Jan 2025 – Nov 2025",
      description: [
        "Atuação em plataforma SaaS de RH e DP utilizando Vue.js (Options API e Composition API).",
        "Implementação de melhorias e correções em funcionalidades como Benefícios, Relatórios e PDI.",
        "Desenvolvimento e documentação de componentes globais utilizando Storybook.",
        "Contribuição para cobertura de testes com Playwright (integração) e Vue Test Utils + Jest (unitários).",
        "Utilização de instâncias AWS EC2 para ambientes de teste antes do deploy.",
        "Outras ferramentas do dia a dia: ClickUp, Slack, Confluence, Notion, GitHub e Figma."
      ]
    },
    {
      companyLogo: "https://cdn.prod.website-files.com/6384cb5c2a10240441c1651c/68aca96ac96ec94492a3f55b_EXP-AVATAR.png",
      companyName: "Explicaê",
      role: "Desenvolvedora FullStack",
      period: "Mai 2021 – Jan 2025",
      description: [
        "Desenvolvimento de aplicações White Label utilizando Vue.js 2 e 3, Vuetify e TypeScript.",
        "Implementação de estratégias de SEO com Nuxt.js, aumentando a visibilidade orgânica.",
        "Construção de funcionalidades escaláveis para plataforma SaaS.",
        "Criação de interfaces no Figma, incluindo gamificação para alunos e ferramentas administrativas para professores.",
        "Desenvolvimento de APIs RESTful em Node.js, integrando MongoDB, MySQL e Redis.",
        "Documentação de APIs com Postman e Swagger."
      ]
    }
  ];
  
  return (
    <div className="experience">
      <ArrowBack />

      <h3 className="experience__title">Experiência Profissional</h3>

      <div className="experience__list">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyLogo={experience.companyLogo}
            companyName={experience.companyName}
            role={experience.role}
            period={experience.period}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience