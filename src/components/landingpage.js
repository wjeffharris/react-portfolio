import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from './Avatar-Maker.png'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Avatar}
              alt="avatar"
             className="avatar-img"
              />

            <div className="banner-text">
              <h1>Jeffrey Harris</h1>
              <h2>Full-Stack Developer</h2>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/william-harris-8b2968184/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/wjeffharris" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* email*/}
          <a href="mailto:wjeffharris@outlook.com" rel="noopener noreferrer" target="_blank">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>

          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
