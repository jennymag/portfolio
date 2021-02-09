import Styled from "styled-components";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Navbar = Styled.nav`
display: flex;
justify-content: space-between; 
flex-wrap: wrap;
padding: 20px;
background-color: white;
max-height: 235px;
h1 {
  margin: 0;
  padding: 0 0 0 20px;
}
img 
{
  margin-top: 1px;
}

`;

function Nav() {
  return (
    <Navbar>
      <Link to="/">
        <h1>Jenny Magnessen</h1>
      </Link>
      <div id="icons">
        <Icons />
      </div>
    </Navbar>
  );
}

export default Nav;
