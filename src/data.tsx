import {
  Link,
  QR,
  Weather,
  Hire,
  Blogy,
  Client,
  Client1,
  Client2,
  Client3,
  Reacty,
  Typy,
  GitIntro,
  Gity,
  Reducery,
  sushi,
  LMSY,
  Diety,
  Note,
  port,
} from "./assets";
interface Prof {
  id: number;
  image: string;
  para: string;
  title: string;
  hosted: string;
  github: string;
}
interface Profy {
  id: number;
  image: string;
  para: string;
}
export const myData: Prof[] = [
  {
    id: 1,
    image: Link,
    para: "This is a link shortening website built with HTML, CSS, JavaScript and Shrtcode API",
    title: "Link Shortner",
    hosted: "https://nky237.github.io/Team2/",
    github: "https://nky237.github.io/Team2/",
  },
  {
    id: 2,
    image: QR,
    para: "This is a QR generator website built with html, boostrap, css ",
    title: "QR Generator",
    hosted: "https://jhenna-qrgenerator.netlify.app/",
    github: "https://github.com/Nky237/QR-generator.git",
  },
  {
    id: 3,
    image: Weather,
    para: "An app built with HTML, CSS, Javascript and weather API",
    title: "WEATHER APP",
    hosted: "https://nky237.github.io/weather/index.html",
    github: "https://github.com/Nky237/weather.git",
  },
  {
    id: 4,
    image: Hire,
    para: "A website where you can book an event. It was created with HTML, boostrap, css, javascript and nodejs",
    title: "HIRE",
    hosted: "https://kodehire.netlify.app/",
    github: "https://github.com/Nky237/Hire.git",
  },
  {
    id: 5,
    image: Blogy,
    para: "A netflix clone done with HTNl,CSS, Javascript and swiperJS",
    title: "NETFLIX",
    hosted: "https://janenetlify.netlify.app/",
    github: "https://github.com/Nky237/Netflix-clone.git",
  },
  {
    id: 6,
    image: port,
    para: "My portfolio done with HTML, Javascript, CSS, formOnSubmit and swiperjs",
    title: "PORTFOLIO",
    hosted: "https://html-portfolio-two.vercel.app/",
    github: "https://github.com/Nky237/HTML_Portfolio.git",
  },
];
export const myData2: Prof[] = [
  {
    id: 1,
    image: LMSY,
    para: "A Learning Management System done with ReactJS, Module CSS, MongoDB and NodeJS ",
    title: "LEARNING MANAGEMENT SYSTEM",
    hosted: "https://learnz.vercel.app/",
    github: "https://github.com/learnable-2022/LMS-YC-2-FE.git",
  },

  {
    id: 2,
    image: Note,
    para: "A notepad done with ReactJS and CSS ",
    title: "NOTEPAD",
    hosted: "https://note-pad-with-react-js.vercel.app/",
    github: "https://github.com/Nky237/NotePad-with-ReactJs.git",
  },
  {
    id: 3,
    image: Diety,
    para: "A diet App used for checking weight done with Reactjs and CSS",
    title: "DIET APP",
    hosted: "https://diet-plan-app.vercel.app/",
    github: "https://github.com/Bukason20/Diet-plan-app.git",
  },
  {
    id: 4,
    image: sushi,
    para: "A website where you can order any meal of your choice done with ReactJs and CSS",
    title: "SUSHI APP",
    hosted: "https://sushi-app-cyan.vercel.app/",
    github: "https://github.com/Nky237/Sushi-App.git",
  },
  // {
  //   id: 5,
  //   image: Blogy,
  //   para: "lorem",
  // },
];
export const myData3: Prof[] = [
  {
    id: 1,
    image: Reacty,
    para: "An article writeen on introduction to reactjs",
    title: "INTRODUCTION TO REACTJS",
    hosted:
      "https://medium.com/@ezikejanenkemdili/introduction-to-the-internet-and-brief-history-of-html-8d334e46a648",
    github: "#",
  },
  {
    id: 2,
    image: Typy,
    para: "An article written on React in TypeScript: A Guide to the Differences You Need to Know",
    title: "React in TypeScript: A Guide to the Differences You Need to Know",
    hosted:
      "https://medium.com/@ezikejanenkemdili/react-in-typescript-a-guide-to-the-differences-you-need-to-know-ab0b07d11d58",
    github: "#",
  },
  {
    id: 3,
    image: Gity,
    para: "An article written on GIT REBASE, GIT CHERRY-PICK, AND GIT REVERT",
    title: "GIT REBASE, GIT CHERRY-PICK, AND GIT REVERT",
    hosted:
      "https://medium.com/@ezikejanenkemdili/git-rebase-git-cherry-pick-and-git-revert-a3d590d7e38f",
    github: "#",
  },
  {
    id: 4,
    image: GitIntro,
    para: "An article written on INTRODUCTION TO GIT AND GITHUB",
    title: "INTRODUCTION TO GIT AND GITHUB",
    hosted:
      "https://medium.com/@ezikejanenkemdili/introduction-to-git-and-github-bb373ed017cc",
    github: "#",
  },
  {
    id: 5,
    image: Reducery,
    para: "An article written on useReducer Hook in ReactJS",
    title: "useReducer Hook in ReactJS",
    hosted:
      "https://medium.com/@ezikejanenkemdili/usereducer-hook-in-reactjs-394d1ae33436",
    github: "#",
  },
];

export const MyTes: Profy[] = [
  {
    id: 1,
    image: Client,
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  },
  {
    id: 2,
    image: Client1,
    para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  },
  {
    id: 3,
    image: Client3,
    para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  },
  {
    id: 4,
    image: Client2,
    para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  },
  // {
  //   id: 5,
  //   image: Client3,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
  // {
  //   id: 6,
  //   image: Client2,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
  // {
  //   id: 7,
  //   image: Client3,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
  // {
  //   id: 8,
  //   image: Client2,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
];
