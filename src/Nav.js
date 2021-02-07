import Styled from "styled-components";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Navbar = Styled.nav`
display: flex;
justify-content: space-between; 
flex-wrap: wrap;
padding: 20px 60px 0 60px;
background-color: white;
max-height: 235px;

a {
  text-decoration: none;
  color: black;
  font-family: 'Dawning of a New Day', cursive;
  font-size: 25px;
}

`;

function Nav() {
  return (
    <Navbar>
      <Link to="/">
        <h1>Jenny Magnessen</h1>
      </Link>
      <div>
        <Icons />
      </div>
    </Navbar>
  );
}

export default Nav;
