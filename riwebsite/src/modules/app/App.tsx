import * as React from "react";
import Navbar from "../components/navbar/navbar";
import { MainContainer } from "./style";

import About from "../components/pages/about/about";
import WhyRapid from "../components/pages/why/whyrapid";
import OurClients from "../components/pages/ourclients/ourclients";
import Meeting from "../components/pages/meeting/meeting";
import CreateToken from "../components/pages/eostoken/createtoken";
import Team from "../components/pages/team/team";
import Home from "../components/pages/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../../shared/styles/globalstyles";

export default function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/whyrapid" component={WhyRapid} />
          <Route path="/ourclients" component={OurClients} />
          <Route path="/meeting" component={Meeting} />
          <Route path="/createtoken" component={CreateToken} />
        </Switch>
      </Router>
    </MainContainer>
  );
}
