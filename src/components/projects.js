import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
// import FreindGen from 'logoFriend.png'
import{ Link }from 'react-router-dom'
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://raw.githubusercontent.com/prphntm63/friendgen/master/images/logo.png) center / cover'}} >FrenGen</CardTitle>
            <CardText>
            FreindGen is an App that matches you to other users with similar interests in your immediate georaphical locale. And if you like, you can message your matches to connect.            </CardText>
            <CardActions border>
              
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://github.com/Gauraklein/attaboy/blob/master/testicon.png?raw=true) center / cover'}} >AttaBoy</CardTitle>
            <CardText>
            Attaboy is a reddit Clone that allow users to view posts, collect attayboys -- likes, and interact with fellow users through attacomments.            </CardText>
            <CardActions border>
              <Link to="https://github.com/ngalvin93/gitchofruits">
              <Button colored>GitHub</Button>
              </Link>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.all-free-download.com/images/graphicthumb/banana_310735.jpg) center / cover'}} >GetChoFruits</CardTitle>
            <CardText>
            GitchoFruits is a fun project website produced by myself and 3 other team members that showcased our combined skills in HTML & CSS.            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
