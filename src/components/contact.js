import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from './Avatar-Maker.png'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={7}>
            <h2>Jeffrey Harris</h2>
            <img
              src={Avatar}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>My name is Jeffrey Harris. I am a senior a the University of Houston majoring in French with a minor in Technology Leadership and Innovation Managment. I discovered my love for programming my sophmore year of college and decided to learn software development through DigitalCrafts. My goal is to utilise my programming skills in becoming a front-end web developer.</p>

          </Cell>
          <Cell col={7}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (682) 559-9036
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    wjeffharris@outlook.com
                  </ListItemContent>
                </ListItem>

    


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
