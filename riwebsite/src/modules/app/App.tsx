import * as React from "react";
import Header from "./Header";
import { MainContainer } from "./styles";
//import ServicesCard from '../cards/servicecard'
// import TechCard from '../cards/tech/techcard'
// import TeamCard from '../cards/team/teamcard'
//import ServicesCard from '../cards/service/servicecard'
import About from "../components/about/about";
import WhyRapid from "../components/why/whyrapid";
import Clients from "../components/clients/clients";
import Meeting from "../components/meeting/meeting";
import CreateToken from "../components/eostoken/createtoken"
import Team from "../components/team/team";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <MainContainer>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/whyrapid" component={WhyRapid} />
          <Route path="/clients" component={Clients} />
          <Route path="/meeting" component={Meeting} />
          <Route path="/createtoken" component={CreateToken} />
        </Switch>
      </Router>
    </MainContainer>
  );
}
