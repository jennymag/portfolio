import Styled from "styled-components";
import Icons from "./Icons";

const Foot = Styled.section`


display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 2% 10% 2% 10%;
color: white;
background-color: #333333;
overflow: hidden;

div {
  margin-bottom: 6px;
}
h3 {
  margin: 0;
padding: 0;
  padding: 0 0 6px 60px;
  font-size: 40px;
  font-family: 'Dawning of a New Day', cursive;
}

img {
  padding: 20px 0 0 15px;
}

p {
  max-width: 400px;
}
`;

function Footer() {
  return (
    <Foot>
      <div>
        <h3>About me</h3>
        <p>
          Hello there! I'm a passioned Frontend Developer Student with a big
          interest in design. I'm currently living in Stockholm. My interest in
          coding and web development has followed me since I was a kid, but
          today not all of my pages is related to cute cats :)
        </p>
      </div>
      <div>
        <h3>Contact</h3>
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
