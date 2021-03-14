import Styled from "styled-components";
import cloud1 from "./image/cloud1.png";
import cloud2 from "./image/cloud2.png";
import airplane from "./image/airplane.png";
import boats from "./image/boats.png";
import avatar from "./image/avatar.png";
import reactlogo from "./image/react.png";
import jslogo from "./image/jshtmlcss.png";
import figma from "./image/figma.png";
import ps from "./image/ps.png";
import blender from "./image/blender.png";
import friends from "./image/friend.png";
import animal from "./image/pawprint.png";
import desktop from "./image/desktop.svg";
import swe from "./image/swe.png";
import nor from "./image/nor.png";
import eng from "./image/eng.png";

const CvDiv = Styled.div`
background-color: #a9d7bc;
`;
const CloudDiv = Styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
padding: 29px;
overflow: hidden;
img {
  width: 40%;
}
.cloud2 {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
  animation-direction: alternate;
    animation-fill-mode: both;
}
@keyframes slidein {
  from {
    margin-left: 120%;
  }
  to {
    margin-left: -0%;
  }
}
`;
const AirplaneDiv = Styled.div`
overflow: hidden;
.airplane {
  animation-duration: 7s;
  animation-name: airplane;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.49, 0.72, 0.04,-0.09);
  animation-fill-mode: both;
}
@keyframes airplane {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: -150%;
  }
}
`;
const Resume = Styled.div`
background-color: #50BE9C;
padding-bottom: 60px;
img {
  width: 100%;
}
`;
const GridContainer = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap: 6px;
color: black;
max-width: 70%;
margin: 0 auto;
border-bottom: 1px solid lightgray;
padding-bottom: 20px;
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: lightblue;
}
h3 {
  font-family: "Dawning of a New Day", cursive;
  font-size: 30px;
  color: white;
  margin: 0;
}
p {
 margin: 0;
 font-size: 13px;
}
`;

const ProfileDiv = Styled.div`
padding: 20px;
max-width: 350px;
`;
const ImgDiv = Styled.div`
  text-align: center;
  margin-top: 10px;
 img {
  width: 100%;
  border-radius: 30px;
}                  
`;
const DevelopmentDiv = Styled.div`
color: black;
display: flex;
text-align: center;
flex-direction: column;
margin-top: 10px;
div {
  display: flex;
  justify-content: center;
}
img {
  width: 30%;
    padding: 0 10px 0 10px;
}h3 {
  padding: 10px 0 10px 0;
}
`;
const SwDiv = Styled.div`
color: white;
display: flex;
text-align: center;
flex-direction: column;
margin-top: 10px;
div {
  display: flex;
  justify-content: center;
}
img {
  width: 15%;
  padding: 0 10px 0 10px;
}
h3 {  
  padding: 0 0 20px 0;
}
`;
const ExDiv = Styled.div`

text-align: center;
h3 {
  margin: 40px;
  font-family: "Dawning of a New Day", cursive;
  font-size: 30px;
  color: white;
}
`;
const YearDiv = Styled.div`
p {
  color: black;
  padding: 50px;
  font-size: 17px;
}
`;
const ExcDiv = Styled.div`
border-left: 1px solid lightgray;
padding-left: 60px;

h4 {
  margin: 0;
font-size: 14px;
font-family: "Raleway", sans-serif;
background-color: lightblue;
max-width: 300px;
padding: 5px;
}
h5{
  margin: 0;
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  padding: 6px;
}
p {
  font-size: 13px;
}
div {
  padding: 7px 0 30px 0;
}
`;
const LangDiv = Styled.div`
color: white;
display: flex;
text-align: center;
flex-direction: column;
margin-top: 10px;
div {
  display: flex;
  justify-content: center;
}
img {
  width: 15%;
  padding: 0 10px 0 10px;
}
h3 {  
  padding: 0 0 20px 0;
}`;
const IntDiv = Styled.div`
color: white;
display: flex;
text-align: center;
flex-direction: column;
margin-top: 10px;
div {
  display: flex;
  justify-content: center;
}
img {
  width: 15%;
  padding: 0 10px 0 10px;
}
h3 {  
  padding: 0 0 20px 0;
}`;

function Animations() {
  return (
    <>
      <CloudDiv>
        <img className="cloud1" src={cloud1} alt="cloud" />
        <img className="cloud2" src={cloud2} alt="cloud" />
      </CloudDiv>
      <AirplaneDiv>
        <img className="airplane" src={airplane} alt="airplane" />
      </AirplaneDiv>
    </>
  );
}
function Cv() {
  return (
    <CvDiv>
      <Animations />
      <Resume>
        <img src={boats} alt="boats" />
        <GridContainer>
          <ImgDiv>
            <img src={avatar} alt="avatar" />
          </ImgDiv>
          <ProfileDiv>
            <p>Jenny Magnessen</p>
            <h2>Front end Developer</h2>
            <h3>Profile</h3>
            <p>
              I have loved tech as long as I can remember. It has always been a
              big part of my life, both privatly and in my career. At 7 I made
              my first home page and today I am following my dream studying
              Front end.
            </p>
          </ProfileDiv>
        </GridContainer>
        <GridContainer>
          <DevelopmentDiv>
            <h3>Development</h3>
            <div>
              <img src={reactlogo} alt="react" />
              <img src={jslogo} alt="javascript" />
            </div>
          </DevelopmentDiv>
          <SwDiv>
            <h3>Software</h3>
            <div>
              <img src={figma} alt="figma" />
              <img src={ps} alt="photoshop" />
              <img src={blender} alt="blender" />
            </div>
          </SwDiv>
          <IntDiv>
            <h3>Interests</h3>
            <div>
              <img src={desktop} alt="games" />
              <img src={friends} alt="friends" />
              <img src={animal} alt="animales" />
            </div>
          </IntDiv>
          <LangDiv>
            <h3>Language</h3>
            <div>
              <img src={swe} alt="swedish" />
              <img src={nor} alt="norweigan" />
              <img src={eng} alt="english" />
            </div>
          </LangDiv>
        </GridContainer>
        <ExDiv>
          <h3>Experience</h3>
          <GridContainer>
            <YearDiv className="yearHide">
              <p>2018 - 2020</p>
              <p>2018</p>
              <p>2015 - 2016</p>
            </YearDiv>
            <ExcDiv className="hideBorder">
              <div>
                <h4 className="excH4">System Technichan</h4>
                <h5>Incoord ∙ Stockholm</h5>
                <p>
                  I set up and maintained all hard & software, administrated the
                  virtual environment and documented technical procedures. I
                  also gave IT-support onsite.
                </p>
              </div>
              <div>
                <h4 className="excH4">IT Support Consultant</h4>
                <h5>Wise IT ∙ Stockholm</h5>
                <p>
                  I gave both 1:st and 2:nd line support onsite, and I was main
                  support for the norweigan employees.
                </p>
              </div>

              <div>
                <h4 className="excH4">IT Support Technichan</h4>
                <h5>CGI ∙ Lissabon, Portugal</h5>
                <p>
                  I worked with 1:st line IT-support by phone and email, and I
                  was responsible for several projects. One was our new self
                  support web.
                </p>
              </div>
            </ExcDiv>
          </GridContainer>
        </ExDiv>
      </Resume>
    </CvDiv>
  );
}

export default Cv;
