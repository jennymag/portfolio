import calculator from "./image/calculator.png";
import guestbook from "./image/guestbook.png";
import quire from "./image/quire.png";
import blog from "./image/blog.png";
import pizzatime from "./image/pizzatime.png";
/* import portfolio from "./image/portfolio.png"; */
const projects = [
  {
    name: "Blog",
    description:
      "A blog created in React which also lets you write posts, administrate comments and more.. (In progress)",
    language: "React.js",
    link: "http://jennymag.github.io/calculator",
    img: blog,
    id: "blog",
    category: "web",
  },
  {
    name: "Calculator",
    description:
      "This is a calculator that counts addition, substraction, division and multiplication",
    language: "Vanilla JavaScript",
    link: "http://jennymag.github.io/calculator",
    img: calculator,
    id: "calculator",
    category: "web",
  },
  {
    name: "Quire",
    description:
      "This is a web based note application which you can use to write, save or/and delete notes. This is a group project from 2020. Contributors: Jenny, Merab, Justus, Khadija and Ivan",
    language: "Vanilla JavaScript",
    link: "http://jennymag.github.io/calculator",
    img: quire,
    id: "quire",
    category: "web",
  },
  {
    name: "Guestbook",
    description:
      "This is a simple guestbook that saves comments with localStorage",
    language: "Vanilla JavaScript",
    link: "http://jennymag.github.io/guestbook",
    img: guestbook,
    id: "guestbook",
    category: "web",
  },
  {
    name: "Pizzatime",
    description: "My first website",
    language: "HTML / CSS",
    link: "http://jennymag.github.io/guestbook",
    img: pizzatime,
    id: "pizzatime",
    category: "web",
  },
];

export default projects;
