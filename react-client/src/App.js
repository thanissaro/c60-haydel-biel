import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Team = () => <h2>Team</h2>;
const Chat = () => <h2>Chat</h2>;
const Contact = () => <h2>Contacts</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/team/">Team</Link>
          </li>
          <li>
            <Link to="/contact/">Contacts</Link>
          </li>
          <li>
            <Link to="/chat/">Chat</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/team/" component={Team} />
      <Route path="/chat/" component={Chat} />
      <Route path="/contact/" component={Contacts} />
    </div>
  </Router>
);

export default AppRouter;