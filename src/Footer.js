import Styled from "styled-components";
import Icons from "./Icons";

const Foot = Styled.section`
display: flex;
justify-content: space-between;
padding: 2% 15% 2% 15%;
border: 1px solid black;
color: white;
background-color: #333333;


h1 {
  padding: 0 0 10px 50px;
  text-transform: uppercase;
}

img {
  padding: 20px 0 0 15px;
}

p {
  max-width: 500px;
}
`;

function Footer() {
  return (
    <Foot>
      <div>
        <h1>About me</h1>
        <p>
          Hello there! I'm a passioned Frontend Developer Student with a big
          interest in design. I'm currently living in Stockholm. My interest in
          coding and web development has followed me since I was a kid, but
          today not all of my pages is related to cute cats :)
        </p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>
          Find me on my socials down below! Feel free to contact me if you want
          to know more.
        </p>
        <Icons />
      </div>
    </Foot>
  );
}

export default Footer;
