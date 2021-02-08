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
  padding: 20px;
  margin-bottom: 40px;
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
const HomeBox = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 20px;
margin-bottom: 80px;
p {
  padding: 5px;
}
h2 {
  padding: 0;
  margin: 20px;
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
        <h2>CV</h2>
        <p>
          Soon you can find my resume here <i>(in progress)</i>
        </p>
        <Link to="/cv">
          <Cvbutton>launch CV</Cvbutton>
        </Link>
      </HomeBox>
    </Content>
  );
}

export default Home;
