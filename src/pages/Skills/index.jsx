import ArrowBack from '../../components/ArrowBack';
import SkillCard from '../../components/SkillCard';
import {
  FaHtml5, FaCss3, FaJs, FaVuejs, FaReact, FaNodeJs, FaFigma,
  FaGithub, FaBitbucket, FaNpm, FaYarn, FaSass
} from "react-icons/fa";
import { SiTypescript, SiVuetify, SiSwagger, SiPostman, SiAmazonec2, SiStorybook, SiJest } from "react-icons/si";
import { TbBrandNuxt } from "react-icons/tb";
import { FaMobileScreenButton, FaMasksTheater } from "react-icons/fa6";

import './style.css'

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      title: 'CSS3',
    },
    {
      icon: <FaSass />,
      title: 'Sass',
    },
    {
      icon: <FaJs />,
      title: 'JavaScript',
    },
    {
      icon: <SiTypescript />,
      title: 'TypeScript',
    },
    {
      icon: <FaVuejs />,
      title: 'Vue.js 2/3',
    },
    {
      icon: <TbBrandNuxt />,
      title: 'Nuxt.js',
    },
    {
      icon: <SiVuetify />,
      title: 'Vuetify',
    },
    {
      icon: <FaReact />,
      title: 'React.js',
    },
    {
      icon: <SiStorybook />,
      title: 'Storybook',
    },
     {
      icon: <FaMobileScreenButton />,
      title: 'Design Responsivo',
    },
    {
      icon: <FaFigma />,
      title: 'Figma',
    },
    {
      icon: <FaMasksTheater />,
      title: 'Testes de Integração com Playwright',
    },
    {
      icon: <SiJest />,
      title: 'Testes Unitários com Jest',
    },
    {
      icon: <FaNodeJs />,
      title: 'Node.js',
    },
    {
      icon: <SiSwagger />,
      title: 'Swagger',
    },
    {
      icon: <SiPostman />,
      title: 'Postman',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
    },
    {
      icon: <FaBitbucket />,
      title: 'Bitbucket',
    },
    {
      icon: <SiAmazonec2 />,
      title: 'AWS EC2',
    },
    {
      icon: <FaNpm />,
      title: 'NPM',
    },
    {
      icon: <FaYarn />,
      title: 'Yarn',
    },
  ];

  return (
    <div className="skills">
      <ArrowBack />

      <h3 className="skills__title">Habilidades</h3>

      <div className="skills__list">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills