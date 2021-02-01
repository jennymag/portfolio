import Styled from "styled-components";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Navbar = Styled.nav`
display: flex;
justify-content: space-between; 
padding: 20px 60px 20px 60px;
border: 1px solid black;
color: white;
background-color: #333333;
max-height: 32px;

h1{
text-transform: uppercase;
padding-top: 5px;
}

a {
  text-decoration: none;
  color: white;
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
