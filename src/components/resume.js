import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Document } from 'react-pdf'

class Resume extends Component {
  render() {
    return(
      <div>
        
        <Document file="file:///Users/coding/Downloads/Resume.pdf">

      </Document>
      </div>
    )
  }
}

export default Resume;
