import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/Trad.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Soares's Portfolio",
  description: "Lets Build a Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Soares Dolapo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Proficient in a wide range of programming languages and tools, as well as frontend and backend development. A hard working individual with multiple years of experience, who has honed exceptional skills and can effectively work on any stage of the development process.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` A hard working individual with multiple years of experience, who has honed exceptional skills and can effectively work on any stage of the development process. Known for consistently exceeding expectations and delivering projects on time.`,
  aboutItems: [
    {label: 'Location', text: 'Lagos, Nigeria', Icon: MapIcon},
    {label: 'Nationality', text: 'Nigerian', Icon: FlagIcon},
    {label: 'Interests', text: 'Martial Arts, Dancing, Hiking, Food tasting', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Lagos', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to Work', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Databases',
    skills: [
      {
        name: 'MongoDb',
        level: 9,
      },
      {
        name: 'PostgresQl',
        level: 6,
      },
      {
        name: 'SQL',
        level: 7
      },
      {
        name: 'firebase',
        level: 7
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 5,
      },
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'eConnect',
    description: 'eCONNECT built an app called woozeee where ecommerce can take place, booking of flights, meeting of new people and connecting with old friends and soo much more.',
    url: 'https://www.econnectnp.com/woozeee.html',
    image: porfolioImage1,
  },
  {
    title: 'Pennycanny',
    description: 'PenyCanny is the ultimate destination for finding the best deals and discounts on everything from fashion and home decor to food and travel.',
    url: 'https://pennycanny.com/',
    image: porfolioImage2,
  },
  {
    title: 'bgHealth',
    description: 'Black girl vitamins is a health supplement company that caters to the wellness of black women through the supply of vitamins.',
    url: 'https://bghealth.co/',
    image: porfolioImage3,
  },
  {
    title: 'NPFcmris',
    description: 'This portal is designed to enable motor vehicle owners comply with regulatory requirements by providing information online about their vehicles, its ownership and other necessary details that will support the Police in maintaining information on vehicles.',
    url: 'https://cmris.npf.gov.ng/signup',
    image: porfolioImage4,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2009 - May 2015',
    location: 'University of Lagos',
    title: 'B.Sc in Mechanical Engineering',
    content: <p>As a mechanical engineering student, my education provided a comprehensive foundation in mathematics, physics, and engineering principles, enabling me to delve into core courses covering topics like fluid mechanics, heat transfer, machine design, and control systems. I gained invaluable hands-on experience through laboratory work and became proficient in computer-aided design (CAD). Problem-solving, teamwork, and effective communication were emphasized throughout, and I honed my project management skills by working on engineering projects. Ethical considerations and professionalism were central to my education, and I had opportunities for internships or co-op programs to apply classroom knowledge in real-world settings.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - December 2022',
    location: 'eConnect',
    title: 'Full Stack Engineer',
    content: (
      <p>
        <ul>
          <li>Implemented frontend solutions using Reactjs, React-Native and MongoDB.</li>
          <li>Implemented backend solutions using Nodejs, Express, and Nest, resulting in a high-performing and scalable system.</li>
          <li>Expertly managed and maintained the database system using mongoDB, ensuring data integrity and availability.</li>
          <li>Collaborated effectively with cross-functional teams to clarify project requirements and proposals, contributing to project success.</li>
          <li>Consistently met project specifications and deadlines throughout the software lifecycle, delivering high-quality software solutions.</li>
        </ul>
      </p>
      
    ),
  },
  {
    date: 'March 2022 - June 2022',
    location: 'PennyCanny',
    title: 'FullStack Developer',
    content: (
      <p>
      <ul>
        <li>Utilized AWS for production and quality assurance testing, ensuring a seamless and reliable deployment process.</li>
        <li>Designed new UI components for the interactive library using storybook, enhancing the overall user experience.</li>
        <li>Implemented design solutions and conducted root cause analysis on component failures, contributing to system stability and reliability.</li>
        <li>Collaborated effectively with cross-functional teams to clarify project requirements and proposals, contributing to project success.</li>
        <li>Developed Single Page Applications using Javascript frameworks like HandlebarsJs,Nodejs.</li>
      </ul>
    </p>
    ),
  },
  {
    date: 'October 2020 - March 2022',
    location: 'Decagon',
    title: 'Software Developer',
    content: (
      <p>
      <ul>
        <li>Developed full-stack applications using Node, Express on the backend, and React on the frontend, delivering highly interactive and user-friendly experiences.</li>
        <li>Managed database systems using SQL (MySQL) and state and HTTP requests with Axios, ensuring seamless data management.</li>
        <li>Installed new systems and updated modifications for existing systems, ensuring the technology infrastructure was up-to-date and secure.</li>
        <li>Built high-quality applications using React, JavaScript, and Nodejs and designed testable code and applications using the latest technical features.</li>
        <li>Maintained client information and accounts while ensuring confidentiality, upholding professional ethics and standards.</li>
      </ul>
    </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Here are the different options to reach me. Let's work together.",
  items: [
    {
      type: ContactType.Email,
      text: 'soaresdolapo@gmail.com',
      href: 'mailto:soaresdolapo@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lagos, Nigeria',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'DolapoSoares',
      href: 'https://github.com/DolapoSoares',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/DolapoSoares'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dolapo-soares-74b260121/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
