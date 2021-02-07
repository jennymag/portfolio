import { useState } from "react";
import Styled from "styled-components";
import Project from "./Project";
import projects from "./projects";
const Content = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
li img {
  width: 3%;
}
background-color: white;
ul {
  display: flex;
  padding: 40px 0 40px 0;
  list-style-type: none;
  text-transform: uppercase;
  color: gray;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 20px;
  padding: 5px;
}
li:hover {
  background-color: lightgray;
}
.active {
  background: lightgray;
}
`;
const ProjectContainer = Styled.div`
display: grid; 
grid-template-columns: 1fr 1fr 1fr;
min-height: 45vh;
div{
margin: 4px;
}
`;
const OpsContainer = Styled.div`
padding-top: 100px;
min-height: 32vh;
text-align: center;
color: gray;
`;

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState();

  function changeColor(e) {
    let index = e.target.innerText;
    if (index === "ALL") {
      setActiveCategory(undefined);
    } else if (index === "WEB") {
      setActiveCategory("web");
    } else if (index === "APPS") {
      setActiveCategory("apps");
    } else if (index === "3D MODELING") {
      setActiveCategory("3d modeling");
    }
  }
  const filteredProjects = projects.filter(
    (project) =>
      project.category === activeCategory || activeCategory === undefined
  );

  return (
    <Content>
      <ul>
        <li
          className={activeCategory === undefined ? "active" : ""}
          onClick={changeColor}
        >
          all
        </li>
        <li
          className={activeCategory === "web" ? "active" : ""}
          onClick={changeColor}
        >
          web
        </li>
        <li
          className={activeCategory === "apps" ? "active" : ""}
          onClick={changeColor}
        >
          apps
        </li>
        <li
          className={activeCategory === "3d modeling" ? "active" : ""}
          onClick={changeColor}
        >
          3D modeling
        </li>
      </ul>

      {filteredProjects.length > 0 ? (
        <ProjectContainer>
          {filteredProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </ProjectContainer>
      ) : (
        <OpsContainer>
          <p>There are no projects in this category yet...</p>
        </OpsContainer>
      )}
    </Content>
  );
}
/* <div>
  Icons made by{" "}
  <a
    href="https://www.flaticon.com/authors/pixel-perfect"
    title="Pixel perfect"
  >
    Pixel perfect
  </a>{" "}
  from{" "}
  <a href="https://www.flaticon.com/" title="Flaticon">
    www.flaticon.com
  </a>
</div>; */

export default Portfolio;
