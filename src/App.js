import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Styled from "styled-components";
import Portfolio from "./Portfolio";
import Cv from "./Cv";
import Home from "./Home";
import Section from "./Section";
import Nav from "./Nav";
import Footer from "./Footer";
import ProjectProfile from "./ProjectProfile";

const FlexContainer = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <Router>
      <FlexContainer>
        <Nav />
        <Section>
          <Switch>
            <Route path="/cv">
              <Cv />
            </Route>
            <Route path="/portfolio/:id">
              <ProjectProfile />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Section>
        <Footer />
      </FlexContainer>
    </Router>
  );
}

export default App;
