import { Link } from "react-router-dom";
import Styled from "styled-components";

const Content = Styled.div`
background-color: white;

h2 {
text-transform: uppercase;
}
button {
  border: 1px solid black;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 13px;
  outline: none;
  margin-bottom: 80px;
  padding: 20px 40px 20px 40px;
}

`;
const Portbutton = Styled.button`
  &:hover {
  border: 1px solid pink;
  outline: none;
  cursor: pointer;
  }
`;
const Cvbutton = Styled.button`
  &:hover {
  border: 1px solid pink;
  outline: none;
  cursor: pointer;
`;
const HomeBox = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 40px;
margin-bottom: 40px;
p {
  padding: 2px;
}
h2 {
  padding: 0;
  margin: 0px;
}
`;

function Home() {
  return (
    <Content>
      <HomeBox>
        <h2>Portfolio</h2>
        <p>Go here to find my portfolio</p>
        <Link to="/portfolio">
          <Portbutton>launch portfolio</Portbutton>
        </Link>
        <h2>Skills</h2>
        <p>Find my resumé here</p>
        <Link to="/cv">
          <Cvbutton>launch resume</Cvbutton>
        </Link>
      </HomeBox>
    </Content>
  );
}

export default Home;
