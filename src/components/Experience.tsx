import {
  faBook,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import ExperienceSection, {
  ExperienceSectionProps,
} from "./experience_components/ExperienceSection";

const experience: ExperienceSectionProps[] = [
  {
    icon: faBook,
    title: "Educación",
    items: [
      {
        company: "Udemy-Udacity",
        title: "Otros cursos sobre desarrollo",
        dateFrom: "2020",
        dateTo: undefined,
        activities: [
          { description: "React JS (Udemy): Conceptos básicos de React JS." },
          { description: "C# (Udemy): Conceptos básicos de C# y WPF." },
          {
            description:
              "Developing Android Apps with Kotlin (Udacity): Conceptos de desarrollo de aplicaciones para Android con Kotlin.",
          },
        ],
      },
      {
        company: "Uabierta - Uchile",
        title: "Cambio Climático",
        dateFrom: "2020",
        dateTo: undefined,
        activities: [
          {
            description:
              "Curso introductorio al cambio climático, explica conceptos y avances en los estudios al respecto",
          },
        ],
      },
      {
        company: "Coursera - UCSD",
        title: "Data Structures and Algorithms",
        dateFrom: "2019",
        dateTo: undefined,
        activities: [
          {
            description:
              "Aprendizaje de algoritmos y estructuras de datos típicos de programación",
          },
        ],
      },
      {
        company: "Coursera - Stanford University",
        title: "Machine Learning",
        dateFrom: "2019",
        dateTo: undefined,
        activities: [
          {
            description: "Nociones básicas de aprendizaje de máquina.",
          },
        ],
      },
      {
        company: "Universidad Técnica Federico Santa María, Chile",
        title: "Ingeniería Civil",
        dateFrom: "2011-2016",
        dateTo: undefined,
        activities: [
          {
            description:
              "Trabajo de título: Simulación numérica de transporte de fondo con doble acoplamiento en un canal turbulento.",
          },
        ],
      },
    ],
  },
  {
    icon: faBriefcase,
    title: "Experiencia Laboral",
    items: [
      {
        company: "Momenta SA, Chile",
        title: "Desarrollador - Ingeniero de proyectos",
        dateFrom: "Marzo 2020",
        dateTo: "Actualidad",
        activities: [
          {
            description:
              "Desarrollo de software para uso interno por parte de proyectistas e ingenieros: Plugins y scripts para software de terceros, software de diseño de muros y verificación de modelos.",
          },
          {
            description:
              "Generación de modelos estructurales de edificios habitacionales y detección de problemas de estructuración.",
          },
        ],
      },
      {
        company: "Louis Berger SA, Chile",
        title: "Práctica profesional",
        dateFrom: "Abril 2017",
        dateTo: "Junio 2017",
        activities: [
          {
            description:
              "Desarrollo de proyectos de ingeniería vial, estudio de procesos de sedimentación y estudio en terreno de sistema de alcantarillado y drenaje",
          },
        ],
      },
      {
        company: "Universidad Técnica Federico Santa María, Chile",
        title: "Ayundatías universitarias",
        dateFrom: "2014",
        dateTo: "2016",
        activities: [
          {
            description:
              "Ayudantías de carrera: Análisis Estructural (2), Dinámica de Estructuras (1), Hormigón Armado (1) y Diseño en Acero (1).",
          },
          {
            description:
              "Ayudantías de laboratorio: Wolfram Mathematica (3) y MATLAB (1).",
          },
        ],
      },
    ],
  },
  {
    icon: faUsers,
    title: "Otras actividades",
    items: [
      {
        company: "Club Deportivo Montegrande, Chile",
        title: "Tesorero",
        dateFrom: "2019",
        activities: [
          {
            description:
              "Tesorero del club, participación en fondos concursables de la municipalidad de Las Condes, para financiamiento de indumentaria.",
          },
        ],
      },
      {
        company: "CEIC, Universidad Técnica Federico Santa María, Chile",
        title: "Secretario General",
        dateFrom: "2015",
        activities: [
          {
            description:
              "Participación y organización de actividades del Centro de Estudiantes de Ingeniería Civil de la UTFSM.",
          },
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div>
      {experience.map(({ icon, title, items }: ExperienceSectionProps) => {
        return <ExperienceSection icon={icon} title={title} items={items} />;
      })}
    </div>
  );
};

export default Experience;
