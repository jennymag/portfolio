import { Link } from "react-router-dom";
import Styled from "styled-components";

const Content = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
min-height: 500px;

h1 {
    padding: 30px;
    text-transform: uppercase;
}
p {
    margin-bottom: 30px;
}
button {
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid black;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 13px;
    outline: none;

}
`;

const Portbutton = Styled.button`
  &:hover {
    border: 1px solid pink;
     outline: none;
  }
`;
const Cvbutton = Styled.button`
  &:hover {
    border: 1px solid pink;
    outline: none;
`;

function Home() {
  return (
    <Content>
      <h1>Portfolio</h1>
      <p>Here is my portfolio for all my coding projects</p>
      <Link to="/portfolio">
        <Portbutton>launch portfolio</Portbutton>
      </Link>
      <h1>CV</h1>
      <p>
        Soon you can find my resume here <i>(in progress)</i>
      </p>
      <Link to="/cv">
        <Cvbutton>launch CV</Cvbutton>
      </Link>
    </Content>
  );
}

export default Home;
