import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Quentin | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Quentin',
  subtitle: "I'm a junior studying Computer Science at UPenn",
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'quentin.jpeg',
  paragraphOne:
    'My name is Quentin and I aspire to be a skillful software engineer with business acumen.',
  paragraphTwo:
    'The class "Intro to CIS" I took out of curiosity in my freshman year of college has now turned into my passion. I love solving challenging problems through code and learning new technology. My current topic of interest is networks.',
  paragraphThree:
    'I have gained experience in multiple internships and projects, especially in web development as a full stack developer.',
  resume: 'https://drive.google.com/file/d/1QxV-1Eo7nX467tDds5vDjgInwjVUIpVr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'flexity_img.jpg',
    title: 'Flexity',
    info: 'Cofounder of startup EDIT Collective.',
    info2: 'Service platform that automates the process of building 3D site plans.',
    url: 'https://flexity.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'minecraft.png',
    title: 'Mini Minecraft',
    info: 'Mini version of Minecraft.',
    info2: 'An interactive 3D world exploration and alteration program',
    url: 'https://www.youtube.com/watch?v=4zPfx9-bNuQ',
    repo: 'https://github.com/Changhun-0305/mini-minecraft', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'taobao.png',
    title: 'Taobao Crawler API',
    info:
      "A Django based API that returns TaoBao product's name, price, and options in JSON format given the product id. Crawls Taobao using Selenium and BeautifulSoup.",
    info2: '',
    url: '',
    repo: 'https://github.com/Changhun-0305/taobao-crawl-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'minimaya.png',
    title: 'Mini Maya',
    info: 'Mini version of Maya.',
    info2:
      'A 3D mesh editor program that efficiently renders obj files by applying half-edge data structure supporting key mesh operations',
    url: '',
    repo: 'https://github.com/Changhun-0305/mini-maya', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'changhun0305@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chang-hun-quentin-lee-667494106/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Changhun-0305',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
