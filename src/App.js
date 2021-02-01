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

const GridContainer = Styled.div`
  display: grid;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <GridContainer>
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
      </GridContainer>
    </Router>
  );
}

export default App;
