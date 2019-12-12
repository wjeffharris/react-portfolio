import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Pdf from './components/ResumeSD.pdf';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
            <a href = {Pdf}>Resume</a>
                <Link to="/contact">About Me</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
            <a href = {Pdf}>Resume</a>
              <Link to="/contact">About Me</Link>
              <Link to="/projects">Projects</Link>
              {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
