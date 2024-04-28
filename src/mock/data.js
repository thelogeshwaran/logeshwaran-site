import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Logeshwaran', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Logeshwaran',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile_Picture.jpeg',
  paragraphOne: `Motivated and detail-oriented web developer with a strong foundation in designing and developing responsive websites and mobile apps. Proficient in troubleshooting and debugging complex code, particularly in React.js and Next.js environments, to enhance website functionality and optimize user experience. Passionate about staying abreast of the latest industry trends and technologies, including microfrontend architecture, in which I've contributed by delivering talks.`,
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1VvpL-dpYCubeEo4lpfMFhdjcqD08Lmnp/view?usp=sharing',
};

// TECHTALKDATA
export const techTalkData = [
  {
    id: nanoid(),
    img: 'https://www.youtube.com/embed/478ye0uVwgk?si=SJmOFhG2GPvC_EhW',
    title: '',
    info: ' ',
    info2: '',
    url: undefined,
    repo: '',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'MFE_demo.png',
    title: 'Dashboard - MicroFrontend Demo',
    info: 'Utilizes React and Vue.js to create a dynamic and scalable user interface that seamlessly integrates multiple frontend frameworks. ',
    info2:
      'Supported by a robust CI/CD pipeline, updates are deployed swiftly and reliably, ensuring agility to user needs. Hosted on Amazon Web Services (AWS), our microfrontend architecture optimizes resource utilization for high availability and scalability, providing an innovative solution for modern frontend development',
    url: 'https://d4o7rc0icswda.cloudfront.net/',
    repo: 'https://github.com/thelogeshwaran/mfe-react-vue',
  },
  {
    id: nanoid(),
    img: 'Chatapp.jpeg',
    title: 'Chatapp',
    info: 'A real-time communication app with authentication. ',
    info2:
      'Ability to create new Groups and send messages, share photos, emojis with date and time.',
    url: 'https://chat-app-fb4a1.web.app/login',
    repo: 'https://github.com/thelogeshwaran/Chatapp',
  },
  {
    id: nanoid(),
    img: 'DMDB.jpeg',
    title: 'DMDB',
    info: 'A movie recommendation app, with custom playlist and favorite list.',
    info2: 'Contains a search option along with various filter categories.',
    url: 'https://movie-app-e3839.web.app/',
    repo: 'https://github.com/thelogeshwaran/Movie-Search', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Pevernote.jpeg',
    title: 'Pevernote',
    info: 'An app was developed for note taking, organizing, and task management.',
    info2: 'Has options to add a tag, pin a note and search a note.',
    url: 'https://evernote-clone-app-c2308.web.app/?#',
    repo: 'https://github.com/thelogeshwaran/Pevernote',
  },
  {
    id: nanoid(),
    img: 'Pexabay.jpeg',
    title: 'Pexabay',
    info: 'An Image sharing Platform, developed using Typescript. ',
    info2: 'Allows users to share/upload their pictures and like pictures shared by others.',
    url: 'https://gallery-app-3336f.web.app/',
    repo: 'https://github.com/thelogeshwaran/Pexa-bay', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'Expenser.jpeg',
  //   title: 'Expenser',
  //   info: 'A Finance management app for an individual to track his/her expenditure and income.',
  //   info2: 'Contains a chart that visualizes the percentage of each income/expense.',
  //   url: 'https://expenser-logesh.netlify.app/',
  //   repo: 'https://github.com/thelogeshwaran/Expenser', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'thelogeshwarand@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/thelogeshwaran',
    },
    {
      id: nanoid(),
      name: 'book',
      url: 'https://dev.to/thelogeshwaran',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/logesh-waran/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/thelogeshwaran',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
