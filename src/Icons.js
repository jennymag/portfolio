import github from "./image/github.png";
import linkedin from "./image/linkedin.png";
import email from "./image/email.png";
import Styled from "styled-components";
const IconContainer = Styled.div`
  img {
    width: 37px;
    padding-left: 15px;
  }
`;

function Icons() {
  return (
    <>
      <IconContainer>
        <img src={linkedin} alt="linkedin" />
        <img src={github} alt="github" />
        <img src={email} alt="email" />
      </IconContainer>
    </>
  );
}
export default Icons;
