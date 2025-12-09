import ArrowBack from '../../components/ArrowBack';
import ProjectCard from '../../components/ProjectCard';

import projectRoadmap from '../../assets/project-roadmaps-para-devs.png';
import projectAddressForm from '../../assets/project-address-form.png';
import projectLinksBio from '../../assets/project-links-bio.png';
import projectTodoList from '../../assets/project-todo-list.png';
import projectQueCorEuUso from '../../assets/project-que-cor-eu-uso.png';
import projectRecrutaTech from '../../assets/project-recruta-tech.png';
import projectAdivinheAPalavra from '../../assets/project-advinhe-a-palavra.png';

import './style.css'

function Projects() {
  const projects = [
    {
      imageSrc: projectRoadmap,
      imageAlt: 'Imagem da tela inicial do projeto Roadmaps para Devs',
      title: 'Roadmaps Para Devs',
      description: 'Criado para auxiliar as pessoas que estão ingressando na programação, com roteiros de estudos para FrontEnd, BackEnd e Mobile. Foi desenvolvido para o Trabalho de Conclusão de Curso.',
      projectLink: 'https://roadmaps-dev.vercel.app/'
    },
    {
      imageSrc: projectAddressForm,
      imageAlt: 'Imagem da tela inicial do projeto Formulário de Endereço',
      title: 'Formulário de endereço',
      description: 'Este formulário é focado na etapa de endereço do usuário. Havendo integração com a API ViaCEP para preenchimento automático dos campos.',
      projectLink: 'https://deborataveiraa.github.io/FormularioDeEndereco/'
    },
    {
      imageSrc: projectLinksBio,
      imageAlt: 'Imagem da tela inicial do projeto Links In Bio',
      title: 'Links In Bio',
      description: 'Projeto feito para deixar o link da biografia do Instagram mais atraente e com redirecionamento para os principais links de contato.',
      projectLink: 'https://deborataveiraa.github.io/LinksInBio/'
    },
    {
      imageSrc: projectTodoList,
      imageAlt: 'Imagem da tela inicial do projeto To Do List',
      title: 'To Do List',
      description: 'Projeto de um organizador de lista de afazeres.',
      projectLink: 'https://deborataveiraa.github.io/VueJs30dias4Projetos/03-Todo%20List/'
    },
    {
      imageSrc: projectQueCorEuUso,
      imageAlt: 'Imagem da tela inicial do projeto Que cor eu uso?',
      title: 'Que cor eu uso?',
      description: 'Projeto para ajudar a criar paletas de cores, usando os nomes das cores em inglês, hexadecimal ou rbg.',
      projectLink: 'https://deborataveiraa.github.io/VueJs30dias4Projetos/02-Que%20cor%20eu%20uso/'
    },
    {
      imageSrc: projectRecrutaTech,
      imageAlt: 'Imagem da tela inicial do projeto Recruta Tech',
      title: 'Recruta Tech',
      description: 'Formulário de recrutamento divido em etapas.',
      projectLink: 'https://deborataveiraa.github.io/VueJs30dias4Projetos/04-Formulario/'
    },
    {
      imageSrc: projectAdivinheAPalavra,
      imageAlt: 'Imagem da tela inicial do projeto Adivinhe a Palavra',
      title: 'Adivinhe a Palavra',
      description: 'Jogo de adivinhar a palavra através de dicas.',
      projectLink: 'https://deborataveiraa.github.io/VueJs30dias4Projetos/01-Adivinhe%20a%20Palavra/'
    }
  ]

  return (
    <div className="projects">
      <ArrowBack />

      <h3 className="projects__title">Projetos Pessoais</h3>

      <div className="projects__list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects