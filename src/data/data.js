const data = {
  /****** WEBSITE DATA IN FRENCH ********
   ***************************************
   ***************************************/
  fr: {
    navbar: {
      links: [
        "À propos de moi",
        "Formation",
        "Projets récents",
        "Compétences informatiques",
        "Centres d'intérêt",
        "Me contacter",
      ],
    },
    home: {
      title:
        "Salut, je m'appelle Loucif et je suis développeur full stack 💻🚀",
      description:
        "J'aime créer des applications web et résoudre des problèmes du quotidien en utilisant des technologies récentes. Je souhaite mettre à profit mes compétences afin d'apporter une valeur ajoutée à ma future équipe et en apprendre davantage sur le développement web et la gestion de projets.",
    },
    courses: {
      title: "Formation 🧑🏻‍🎓",
      degrees: [
        {
          year: "2019 - 2020",
          name: "Master 2 en Ingénierie Systèmes et Logiciels",
          school: "Université de Franche-Comté, Besançon",
        },
        {
          year: "2018 - 2019",
          name: "Master 1 en Ingénierie Systèmes et Logiciels",
          school: "Université de Franche-Comté, Besançon",
        },
        {
          year: "2017 - 2018",
          name: "Master 1 en Conduite de Projets Informatiques",
          school: "Université Mouloud Mammeri, Tizi Ouzou",
        },
        {
          year: "2014 - 2017",
          name: "Licence en informatique",
          school: "Université Mouloud Mammeri, Tizi Ouzou",
        },
      ],
    },
    skills: {
      title: "Compétences informatiques 🧑🏻‍💻",
    },
    projects: {
      title: "Projets récents 🚀",
      projectList: [
        {
          title: "Netflix Clone",
          description:
            "Développement d'un clone de la plateforme de streaming Netflix en utilisant React ainsi que l'API TMDB qui fournit l'ensemble des données relatives aux films et séries proposés par Netflix.",
          img: {
            title: "Netflix Clone",
            url: "/netflix-clone.jpg",
            alt: "Netflix Clone image",
            height: "180",
          },
          projectUrl: "https://netflix-clone-5b011.web.app/",
          technologies: [
            "React.js",
            "React Hooks",
            "Axios",
            "REST API",
            "FlexBox",
            "CSS3",
            "Material UI",
            "Git",
            "Github Pages",
            "Visual Studio Code",
          ],
        },
        {
          title: "Jeu Morpion",
          description:
            "Implémentation du jeu Morpion (Tic Tac Toe pour les anglophones) sous forme d'application Web responsive en utilisant React.js et différentes technologies récentes du Web",
          img: {
            title: "Tic Tac Toe Game",
            url: "/tic-tac-toe-ui.png",
            alt: "Tic Tac Toe UI",
            height: "180",
          },
          projectUrl: "https://loucif-rakem.github.io/morpion-app/",
          technologies: [
            "React.js",
            "React Hooks",
            "JSX",
            "FlexBox",
            "Material UI",
            "Git",
            "Github Pages",
          ],
        },
        {
          title: "Développeur Logiciel chez Flowbird (Stage)",
          description:
            "Mise en place d'un système de sérialisation en Python afin d'automatiser le processus de génération de code qui gère la communication entre un PC et ses périphériques",
          img: {
            title: "Ticket vending machine",
            url: "/tvm.jpg",
            alt: "Ticket Vending Machine",
            height: "180",
          },
          projectUrl: "#",
          technologies: [
            "Python 3.8",
            "C",
            "CORBA",
            "IDL",
            "ANTLR4",
            "JSON",
            "Git",
            "Jira",
            "IntelliJ Idea",
          ],
        },
        {
          title: "Projet PrestaFind",
          description:
            "Développement d'une application web qui met en relation les prestataires de services avec des clients potentiels à l'aide d'un système de notation des profils",
          img: {
            title: "PrestaFind",
            url: "/prestafind.jpg",
            alt: "PrestaFind",
            height: "180",
          },
          projectUrl: "#",
          technologies: [
            "Vue.js",
            "Vuetify",
            "Spring Boot",
            "REST API",
            "MySQL",
            "Trello",
          ],
        },
      ],
    },
    hobbies: {
      title: "Centres d'intérêt 🧘🏻🏝️⛰️",
      hobbies: [
        {
          title: "Développement personnel",
          description: [
            "Confiance en soi",
            "Gestion de temps",
            "Motivation",
            "Techniques de communication",
          ],
          imgUrl: "/personal-dev.jpg",
        },
        {
          title: "Santé & Bien-être",
          description: [
            "Méditation",
            "Techniques de relaxation",
            "Affirmations positives",
            "Musculation",
          ],
          imgUrl: "/meditation.jpg",
        },
        {
          title: "Voyages",
          description: [
            "Nature",
            "Randonnées",
            "Montagnes",
            "Sites touristiques",
          ],
          imgUrl: "/trips.jpg",
        },
      ],
    },
    contact: "2020, Développé avec ❤️ par Loucif Rakem"
    ,
  },
  /****** WEBSITE DATA IN ENGLISH ********
   ***************************************
   ***************************************/
  en: {
    navbar: {
      links: [
        "About Me",
        "My School Degrees",
        "My Projects",
        "My Skills",
        "My Hobbies",
        "Contact Me",
      ],
    },
    home: {
      title: "Hi, my name is Loucif & I am a Full Stack Web Developer 💻🚀",
      description:
        "I enjoy building web apps and solving daily problems using the most recent technologies. I am looking to use all of my skills in order to add value to my future team, and learn much more about web development and project management.",
    },
    courses: {
      title: "Degrees 🧑🏻‍🎓",
      degrees: [
        {
          year: "2019 - 2020",
          name: "Master's degree in Computer Science, 2nd year",
          school: "University of Franche-Comté, Besançon",
        },
        {
          year: "2018 - 2019",
          name: "Master's degree in Computer Science, 1nd year",
          school: "University of Franche-Comté, Besançon",
        },
        {
          year: "2017 - 2018",
          name: "Master's degree in IT Project management, 1st year",
          school: "University of Mouloud Mammeri, Tizi Ouzou",
        },
        {
          year: "2014 - 2017",
          name: "Bachelor's degree in Computer Science",
          school: "University of Mouloud Mammeri, Tizi Ouzou",
        },
      ],
    },
    projects: {
      title: "My Recent Projects 🚀",
      projectList: [
        {
          title: "Netflix Clone",
          description:
            "I developed a clone of the well known streaming platform 'Netflix' using React.js and TMDB API which gives me all the movies' info.",
          img: {
            title: "Netflix Clone",
            url: "/netflix-clone.jpg",
            alt: "Netflix Clone image",
            height: "180",
          },
          projectUrl: "https://netflix-clone-5b011.web.app/",
          technologies: [
            "React.js",
            "React Hooks",
            "Axios",
            "REST API",
            "FlexBox",
            "CSS3",
            "Material UI",
            "Git",
            "Github Pages",
            "Visual Studio Code",
          ],
        },
        {
          title: "Tic Tac Toe Game",
          description:
            "I created a simple implementation of the game Tic Tac Toe as a web application using React.js and other recent technologies.",
          img: {
            title: "Tic Tac Toe Game",
            url: "/tic-tac-toe-ui.png",
            alt: "Tic Tac Toe UI",
            height: "180",
          },
          projectUrl: "https://loucif-rakem.github.io/morpion-app/",
          technologies: [
            "React.js",
            "React Hooks",
            "JSX",
            "FlexBox",
            "Material UI",
            "Git",
            "Github Pages",
          ],
        },
        {
          title: "Internship at Flowbird Group",
          description:
            "I implemented a serialization system in Python which generates the code that handles communications between peripherals inside a ticket vending machine.",
          img: {
            title: "Ticket vending machine",
            url: "/tvm.jpg",
            alt: "Ticket Vending Machine",
            height: "180",
          },
          projectUrl: "#",
          technologies: [
            "Python 3.8",
            "C",
            "CORBA",
            "IDL",
            "ANTLR4",
            "JSON",
            "Git",
            "Jira",
            "IntelliJ Idea",
          ],
        },
        {
          title: "PrestaFind Web App",
          description:
            "Within a team of three developers, I took part in the development of a web application which puts in touch consultants and potential clients using a profile notation system.",
          img: {
            title: "PrestaFind",
            url: "/prestafind.jpg",
            alt: "PrestaFind",
            height: "180",
          },
          projectUrl: "#",
          technologies: [
            "Vue.js",
            "Vuetify",
            "Spring Boot",
            "REST API",
            "MySQL",
            "Trello",
          ],
        },
      ],
    },
    skills: {
      title: "My Skills & Tools 🧑🏻‍💻",
    },
    hobbies: {
      title: "My Hobbies 🧘🏻🏝️⛰️",
      hobbies: [
        {
          title: "Personal development",
          description: [
            "Confidence",
            "Time management",
            "Motivation",
            "Communication",
          ],
          imgUrl: "/personal-dev.jpg",
        },
        {
          title: "Health & Wellbeing",
          description: [
            "Meditation",
            "Relaxation",
            "Positive affirmations",
            "Bodybuilding",
          ],
          imgUrl: "/meditation.jpg",
        },
        {
          title: "Trips",
          description: ["Nature", "Hiking", "Mountains", "Tourist attractions"],
          imgUrl: "/trips.jpg",
        },
      ],
    },
    contact: "2020, Developed with ❤️ by Loucif Rakem",
  },
};

export default data;
