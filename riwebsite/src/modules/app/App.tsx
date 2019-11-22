import * as React from "react";
import Navbar from "../app/navbar/navbar";
import { MainContainer } from "./style";

import About from "../components/about/about";
import WhyRapid from "../components/why/whyrapid";
import OurClients from "../components/ourclients/ourclients";
import Meeting from "../components/meeting/meeting";
import CreateToken from "../components/eostoken/createtoken";
import Team from "../components/team/team";
import Home from "./home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <MainContainer>
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
